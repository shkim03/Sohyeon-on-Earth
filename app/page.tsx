const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const stops = [
  {
    id: "research",
    number: "01",
    title: "Research",
    category: "대기와 지표",
    heading: "지표에서 일어나는 변화 읽기",
    description: "화학과 지리학을 공부하며 대기와 지표가 만나는 곳을 살펴봅니다. 위성영상으로 산불 이후 지표가 어떻게 달라지는지, 도시의 온도가 공간에 따라 어떻게 다른지 들여다보고 있습니다.",
  },
  {
    id: "notes",
    number: "02",
    title: "Notes",
    category: "연구와 일상",
    heading: "관찰한 것을 오래 기억하는 법",
    description: "실험실에서 생긴 질문, 지도에서 멈춰 본 곳, 걷다가 우연히 눈에 들어온 풍경. 연구와 일상에서 다시 들여다보고 싶은 것들을 모으는 공간입니다.",
  },
  {
    id: "about",
    number: "03",
    title: "About",
    category: "김소현",
    heading: "안녕하세요, 소현입니다.",
    description: "경희대학교에서 화학과 지리학을 공부합니다. 분자의 움직임에서 시작한 관심이 대기와 지표로 이어졌습니다. 이곳에 제가 배우고 관찰하는 것들을 남깁니다.",
  },
];

function Star({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 40 40" fill="currentColor" aria-hidden="true"><path d="M20 0c1.7 13.4 6.6 18.3 20 20-13.4 1.7-18.3 6.6-20 20C18.3 26.6 13.4 21.7 0 20 13.4 18.3 18.3 13.4 20 0Z"/></svg>;
}

export default function Home() {
  return (
    <div className="site" id="top">
      <a className="skip" href="#main">본문으로 건너뛰기</a>
      <header className="masthead">
        <a className="brand" href="#top" aria-label="Sohyeon on Earth 홈">
          <img src={`${basePath}/favicon.svg`} alt="" width="40" height="40" />
          <span>SOHYEON<br/>ON EARTH</span>
        </a>
        <nav className="nav" aria-label="주 메뉴">
          {stops.map(({ id, title }) => <a key={id} href={`#${id}`}>{title}</a>)}
        </nav>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="page-title">
          <div className="stage">
            <div className="stage-meta mono" aria-hidden="true">
              <span><b className="dot"/> PERSONAL FIELD NOTES</span>
              <span>VOL. 01 <i>✳</i> EARTH EDITION</span>
            </div>
            <div className="halo" aria-hidden="true"/>
            <svg className="orbit" viewBox="0 0 1240 595" fill="none" aria-hidden="true">
              <path d="M25 456C-5 397 258 251 588 151c320-97 601-128 625-69 28 67-236 206-557 302C319 486 54 516 25 456Z" stroke="currentColor" strokeDasharray="2 7" strokeWidth="1.1"/>
              <path d="M179 382h13m-6.5-6.5v13m899-260h13m-6.5-6.5v13M838 461h13m-6.5-6.5v13" stroke="currentColor"/>
            </svg>

            <h1 className="hero-title" id="page-title" lang="en">
              <span>Sohyeon</span>
              <em>on Earth<span className="period">.</span></em>
            </h1>

            <figure className="terrain" aria-hidden="true">
              <div className="terrain-image"><img src={`${basePath}/terrain.webp`} alt="" width="520" height="670"/></div>
              <figcaption className="mono"><span>FIG. 01</span><span>THE GROUND</span></figcaption>
            </figure>

            <div className="sky-card" aria-hidden="true">
              <span className="mono">FIG. 02 <span>✦</span></span>
              <svg viewBox="0 0 220 142" fill="none">
                <defs>
                  <pattern id="halftone" width="3" height="3" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".68" fill="currentColor"/></pattern>
                  <radialGradient id="planet"><stop offset="0" stopColor="#a7a5ff"/><stop offset=".67" stopColor="#6b55ae"/><stop offset="1" stopColor="#352354"/></radialGradient>
                </defs>
                <g stroke="currentColor" strokeWidth=".55" opacity=".62">
                  <path d="M0 24h220M0 47h220M0 71h220M0 95h220M0 118h220M24 0v142M48 0v142M72 0v142M96 0v142M120 0v142M144 0v142M168 0v142M192 0v142"/>
                  <circle cx="110" cy="71" r="64"/><circle cx="110" cy="71" r="54"/>
                </g>
                <circle cx="110" cy="71" r="40" fill="url(#planet)"/><circle cx="110" cy="71" r="40" fill="url(#halftone)" opacity=".75"/>
                <ellipse cx="110" cy="71" rx="70" ry="19" transform="rotate(-21 110 71)" stroke="#f3c0df" strokeWidth="1.1"/>
                <path d="M170 28v16m-8-8h16M49 92v12m-6-6h12" stroke="#f3c0df"/>
                <circle cx="155" cy="47" r="3" fill="#f3c0df"/>
              </svg>
              <span className="mono">THE ATMOSPHERE <span>↗</span></span>
            </div>

            <Star className="star star-one"/>
            <Star className="star star-two"/>
            <Star className="star star-three"/>

            <div className="bus" aria-hidden="true">
              <img src={`${basePath}/blue-bus.webp`} alt="" width="1050" height="650" fetchPriority="high"/>
            </div>

            <a className="ticket" href="#stops" aria-label="지구행 티켓으로 목차 보기">
              <span className="ticket-route mono"><span>ONE WAY · NO. 001</span><span>↗</span></span>
              <span className="ticket-name" lang="en">Earthbound</span>
              <span className="ticket-bottom mono"><span>ADMIT ONE</span><span className="barcode" aria-hidden="true"/></span>
            </a>

            <div className="stage-footer">
              <p className="intro"><span lang="en">From molecules to landscapes.</span><br/>대기와 지표를 공부하고, 그 사이의 일상을 기록합니다.</p>
              <a className="depart mono" href="#stops">EXPLORE THE STOPS <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </section>

        <section className="stops" id="stops" aria-labelledby="stops-title">
          <div className="section-kicker mono"><span>01 / INDEX</span><span>✳</span></div>
          <h2 id="stops-title" lang="en">Along the <em>route.</em></h2>
          <div className="stop-list">
            {stops.map(({ id, number, title, category, heading, description }) => (
              <article id={id} className="stop" key={id}>
                <div className="stop-label"><span className="mono">{number} /</span><h3 lang="en">{title}</h3></div>
                <div className="stop-body"><p className="category">{category}</p><h4>{heading}</h4><p>{description}</p></div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer mono"><span>© SOHYEON KIM</span><a href="#top">BACK TO TOP ↑</a></footer>
    </div>
  );
}
