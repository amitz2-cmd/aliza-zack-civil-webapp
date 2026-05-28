import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "azack1962@gmail.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "שירות הדואר אינו מוגדר" },
      { status: 500 }
    );
  }

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !message) {
    return NextResponse.json(
      { error: "נא למלא שם והודעה" },
      { status: 400 }
    );
  }

  const subject = `פנייה חדשה מהאתר — ${name}`;
  const textBody = [
    `שם: ${name}`,
    email ? `אימייל: ${email}` : null,
    phone ? `טלפון: ${phone}` : null,
    "",
    message
  ]
    .filter((line) => line !== null)
    .join("\n");

  const htmlBody = `
    <div dir="rtl" style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2 style="margin: 0 0 16px;">פנייה חדשה מהאתר</h2>
      <p><strong>שם:</strong> ${escapeHtml(name)}</p>
      ${email ? `<p><strong>אימייל:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>` : ""}
      ${phone ? `<p><strong>טלפון:</strong> <a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></p>` : ""}
      <hr style="border: none; border-top: 1px solid #ddd; margin: 16px 0;" />
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
    </div>
  `;

  const resend = new Resend(apiKey);

  try {
    const result = await resend.emails.send({
      from: `Aliza Zack Website <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: email || undefined,
      subject,
      text: textBody,
      html: htmlBody
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return NextResponse.json(
        { error: "השליחה נכשלה. נסו שוב מאוחר יותר." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, id: result.data?.id });
  } catch (err) {
    console.error("Resend exception:", err);
    return NextResponse.json(
      { error: "שגיאה לא צפויה" },
      { status: 500 }
    );
  }
}
