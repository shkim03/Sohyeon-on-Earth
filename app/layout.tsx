import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sohyeon on Earth",
  description: "김소현의 개인 홈페이지. 대기와 지표를 공부하고, 그 사이의 일상을 기록합니다.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
