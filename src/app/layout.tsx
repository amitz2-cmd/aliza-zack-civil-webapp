import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "עליזה זק — אדריכלות והנדסה",
    template: "%s — עליזה זק"
  },
  description:
    "תכנון אדריכלי והנדסי מדויק — בתים פרטיים, תוספות בניה, ממ\"ד, תיאום מערכות וכתבי כמויות. ליווי מלא מהרעיון ועד קבלת מפתח."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={heebo.className}>
      <body>{children}</body>
    </html>
  );
}
