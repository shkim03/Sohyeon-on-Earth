import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Change this to false when the site is ready to reopen.
// The original pages, blog posts and styling are left untouched.
const MAINTENANCE_MODE = true;

export const metadata: Metadata = {
  title: "Sohyeon on Earth",
  description: "김소현의 개인 홈페이지. 대기와 지표를 공부하고, 그 사이의 일상을 기록합니다.",
  metadataBase: new URL("https://aerohypegirl.com"),
  alternates: { canonical: "/" },
  icons: { icon: `${basePath}/favicon.svg` },
};

const maintenanceStyles = "\n.maintenance-root, .maintenance-root * { box-sizing: border-box; }\n.maintenance-root {\n  position: fixed; inset: 0; z-index: 2147483647;\n  min-height: 100vh; min-height: 100dvh; overflow-y: auto;\n  display: grid; place-items: center; padding: 32px 18px 44px;\n  color: #ffeff9; font-family: \"Noto Sans KR\", \"Apple SD Gothic Neo\", \"Malgun Gothic\", system-ui, sans-serif;\n  background:\n    radial-gradient(ellipse at 50% 16%, rgba(119,82,182,.33) 0, rgba(119,82,182,0) 52%),\n    radial-gradient(ellipse at 18% 85%, rgba(233,105,175,.16) 0, rgba(233,105,175,0) 48%),\n    #151025;\n  isolation: isolate; text-align: center;\n}\n.maintenance-root::before {\n  content: \"\"; position: fixed; inset: 0; z-index: -1;\n  background-image: linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),\n                    linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px);\n  background-size: 28px 28px; pointer-events: none;\n}\n.maintenance-starfield { position: fixed; inset: 0; pointer-events: none; overflow: hidden; }\n.maintenance-starfield span { position: absolute; color: #ffd6f0; text-shadow: 0 0 12px #f688d7; animation: maintenance-twinkle 3.4s ease-in-out infinite alternate; }\n.maintenance-starfield span:nth-child(1) { top: 12%; left: 15%; font-size: 20px; }\n.maintenance-starfield span:nth-child(2) { top: 20%; right: 12%; font-size: 30px; animation-delay: .9s; }\n.maintenance-starfield span:nth-child(3) { bottom: 17%; left: 11%; font-size: 26px; animation-delay: 1.4s; }\n.maintenance-starfield span:nth-child(4) { bottom: 11%; right: 17%; font-size: 19px; animation-delay: .5s; }\n.maintenance-starfield span:nth-child(5) { top: 47%; right: 5%; font-size: 13px; animation-delay: 2s; }\n.maintenance-window {\n  position: relative; width: min(100%, 650px);\n  background: #29203e; border: 3px solid #fba7d8;\n  box-shadow: 8px 8px 0 #0c0818, 0 0 0 6px rgba(246,155,209,.11), 0 0 55px rgba(248,135,203,.21);\n}\n.maintenance-windowbar { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 11px 15px; color: #2d1737; background: #f4abd3; font-size: 12px; font-weight: 800; letter-spacing: .05em; text-align: left; }\n.maintenance-controls { font-size: 16px; letter-spacing: 4px; white-space: nowrap; }\n.maintenance-body { padding: clamp(26px, 7vw, 54px) clamp(16px, 6vw, 50px) 31px; }\n.maintenance-eyebrow { display: inline-block; border: 1px solid #e99fdb; color: #ffc0eb; background: #483355; letter-spacing: .14em; padding: 7px 13px; font-size: 11px; }\n.maintenance-orbit { display: flex; justify-content: center; align-items: center; height: 116px; margin: 17px auto 3px; position: relative; }\n.maintenance-planet { display: grid; place-items: center; width: 84px; height: 84px; border: 4px solid #ffe6f7; border-radius: 50%; color: #fff5cb; font-size: 47px; background: #9d63ac; box-shadow: 0 0 0 9px #694b87, 0 0 32px #ef8ccb; transform: rotate(-12deg); }\n.maintenance-orbit::before { content: \"\"; position: absolute; width: 140px; height: 43px; border: 5px solid #f8aedc; border-radius: 50%; transform: rotate(-25deg); box-shadow: 0 0 13px #ec98d8; }\n.maintenance-orbit::after { content: \"✦\"; position: absolute; font-size: 26px; color: #fff3c2; top: 5px; right: calc(50% - 90px); text-shadow: 0 0 16px #f6b6e7; }\n.maintenance-heading { margin: 17px 0 5px; color: #ffb8df; font-size: clamp(27px, 6.7vw, 45px); font-weight: 800; letter-spacing: -.045em; line-height: 1.32; word-break: keep-all; }\n.maintenance-heading span { display: block; }\n.maintenance-heading span:last-child { color: #ffb8df; text-shadow: 0 0 18px rgba(240,144,210,.33); }\n.maintenance-english { margin: 15px 0 21px; font-weight: bold; color: #fff0b8; letter-spacing: .14em; font-size: 12px; }\n.maintenance-description { margin: 0 auto; max-width: 490px; color: #e2d6ec; font-family: \"Noto Sans KR\", \"Apple SD Gothic Neo\", \"Malgun Gothic\", system-ui, sans-serif; font-size: 15px; line-height: 1.85; word-break: keep-all; }\n.maintenance-divider { margin: 27px 0 22px; border-top: 1px dashed #8d6f9d; }\n.maintenance-loading-title { display: flex; justify-content: space-between; gap: 10px; color: #f8bfe3; font-size: 11px; letter-spacing: .09em; }\n.maintenance-loadingbar { display: flex; gap: 6px; margin: 11px 0 0; padding: 8px; border: 2px solid #a27fbd; background: #1c1730; }\n.maintenance-loadingbar span { height: 12px; flex: 1; background: #f9a9db; box-shadow: 0 0 8px rgba(248,171,223,.5); }\n.maintenance-loadingbar span:nth-child(5) { background: #c3a6e9; }\n.maintenance-loadingbar span:nth-child(n+6) { background: #443653; box-shadow: none; }\n.maintenance-footer { margin-top: 21px; color: #cdb5db; font-size: 11px; line-height: 1.6; letter-spacing: .06em; }\n.maintenance-footer b { color: #ffb1df; font-weight: normal; }\n@keyframes maintenance-twinkle { from { opacity: .35; transform: scale(.75); } to { opacity: 1; transform: scale(1.18); } }\n@media (max-width: 600px) {\n  .maintenance-root { padding: 22px 16px 30px; }\n  .maintenance-windowbar { font-size: 10px; padding: 10px; }\n  .maintenance-controls { font-size: 12px; letter-spacing: 1px; }\n  .maintenance-body { padding: 26px 18px; }\n  .maintenance-orbit { height: 104px; }\n  .maintenance-description { font-size: 14px; }\n  .maintenance-english { font-size: 10px; }\n}\n@media (prefers-reduced-motion: reduce) { .maintenance-starfield span { animation: none; } }\n";

function MaintenanceNotice() {
  return (
    <main className="maintenance-root">
      <div className="maintenance-starfield" aria-hidden="true">
        <span>✧</span><span>✦</span><span>✶</span><span>✧</span><span>✦</span>
      </div>
      <section className="maintenance-window" aria-labelledby="maintenance-heading">
        <div className="maintenance-windowbar">
          <span>✦ SOHYEON ON EARTH / update.exe</span>
          <span className="maintenance-controls" aria-hidden="true">▁ □ ×</span>
        </div>
        <div className="maintenance-body">
          <span className="maintenance-eyebrow">♡ SYSTEM UPDATE IN PROGRESS ♡</span>
          <div className="maintenance-orbit" aria-hidden="true">
            <span className="maintenance-planet">♥</span>
          </div>
          <h1 id="maintenance-heading" className="maintenance-heading">사이트 점검 중</h1>
          <p className="maintenance-english">✧ SITE UNDER CONSTRUCTION ✧</p>
          <p className="maintenance-description">
            더 반짝이는 공간으로 돌아오기 위해 잠시 정비하고 있어요.
            <br />
            예쁜 모습으로 다시 만나요! ♡
          </p>
          <div className="maintenance-divider" />
          <div aria-hidden="true">
            <div className="maintenance-loading-title">
              <span>✦ MAGIC LOADING...</span><span>PLEASE COME BACK SOON</span>
            </div>
            <div className="maintenance-loadingbar">
              <span /><span /><span /><span /><span /><span /><span /><span /><span /><span />
            </div>
          </div>
          <div className="maintenance-footer">MADE WITH STARDUST, SCIENCE &amp; <b>LOVE ♡</b></div>
        </div>
      </section>
    </main>
  );
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" href={`${basePath}/site-assets.css`} />
        {MAINTENANCE_MODE && <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700;800&display=swap" />}
        <style>{maintenanceStyles}</style>
      </head>
      <body>{MAINTENANCE_MODE ? <MaintenanceNotice /> : children}</body>
    </html>
  );
}
