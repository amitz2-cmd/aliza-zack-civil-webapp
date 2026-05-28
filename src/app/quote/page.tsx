import QuoteForm from "./quote-form";
import Link from "next/link";
import { MarketingPage } from "@/components/site/MarketingPage";

export default function QuotePage() {
  return (
    <MarketingPage title="בקשת הצעת מחיר" eyebrow="קבלו הצעה מותאמת לפרויקט שלכם">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-lg font-semibold text-slate-900">פרטי הפרויקט</div>
            <QuoteForm />
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-lg font-semibold text-slate-900">איך זה עובד?</div>
            <ol className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-semibold text-white">
                  1
                </span>
                אני בוחנת את היקף הפרויקט ומחזירה אליכם עם שאלות הבהרה במידת הצורך.
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-semibold text-white">
                  2
                </span>
                תקבלו טווח מחיר מוערך ורשימת תוצרים מפורטת.
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-semibold text-white">
                  3
                </span>
                אם נמשיך — נתחיל בליווי מלא, החל מהשלב הראשון ועד לסיום הפרויקט.
              </li>
            </ol>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              מעדיפים לדבר קודם?{" "}
              <Link className="font-semibold text-brand-700 hover:text-brand-800" href="/contact">
                צרי קשר ←
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MarketingPage>
  );
}
