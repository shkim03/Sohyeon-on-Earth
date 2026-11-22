'use client';

import Link from 'next/link';
import { useState, type ReactNode } from 'react';
import { posts } from '../data/posts';

const costumes = [
  { name: 'STAR GUARDIAN', subtitle: 'pink / celestial', dress: '#ff83d3', trim: '#fff4fa', bow: '#fd5eae', boots: '#885dce' },
  { name: 'SKY EXPLORER', subtitle: 'blue / atmosphere', dress: '#76c4ff', trim: '#ecfbff', bow: '#527af9', boots: '#7159c2' },
  { name: 'MOON ALCHEMIST', subtitle: 'lavender / chemistry', dress: '#c5a6ff', trim: '#fff1b6', bow: '#a777ff', boots: '#6f4bb0' },
] as const;

function WindowFrame({ title, tag, children, className = '' }: { title: string; tag: string; children: ReactNode; className?: string }) {
  return (
    <section className={'window-frame ' + className}>
      <div className="window-titlebar"><span className="window-title"><span className="window-spark">✦</span> {title}</span><span className="window-controls" aria-hidden="true">▁ □ ×</span></div>
      <div className="window-inner">{children}</div>
      <span className="window-tag">{tag}</span>
    </section>
  );
}

function Star({ className = '' }: { className?: string }) {
  return <span className={'twinkle ' + className} aria-hidden="true">✦</span>;
}

function Avatar({ costumeIndex }: { costumeIndex: number }) {
  const costume = costumes[costumeIndex];
  return (
    <svg className="avatar-svg" viewBox="0 0 190 230" role="img" aria-label={costume.name + ' 픽셀 캐릭터'}>
      <g shapeRendering="crispEdges">
        <ellipse cx="96" cy="218" rx="60" ry="8" fill="#573771" opacity=".42" />
        <path d="M66 165h20v40H65zm40 0h20v40h-20z" fill="#fff0e1"/>
        <path d="M60 199h32v15H54v-7zm42 0h32v8h7v7h-39z" fill={costume.boots}/>
        <path d="M58 113h75v17h8v22h12v19h-16v21H56v-21H40v-19h11v-22h7z" fill={costume.dress}/>
        <path d="M72 119h46v18H72zM48 163h99v8H48zM62 180h68v6H62z" fill={costume.trim}/>
        <path d="M52 127H37v35h18zm83 0h15v35h-18z" fill="#ffe5d7"/>
        <path d="M68 65h57v51h-57z" fill="#ffe1d4"/>
        <path d="M58 65h10v56H57zM125 65h12v58h-12z" fill="#46234f"/>
        <path d="M52 39h10V25h19V16h33v8h17v15h12v51h-17V62H63v28H49V51h3z" fill="#512955"/>
        <path d="M60 37h13V26h36v10h18v14H62z" fill="#7d4483"/>
        <path d="M62 32h21v7H62zM101 24h13v8h-13z" fill="#ad71b0"/>
        <path d="M64 86h8v8h-8zm44 0h8v8h-8z" fill="#372347"/>
        <path d="M82 101h18v5H82z" fill="#c85a91"/>
        <path d="M54 97h10v6H54zm68 0h10v6h-10z" fill="#f6a1b3"/>
        <path d="M76 52h39v8H76z" fill={costume.bow}/>
        <path d="M62 40h15v15H62zm51 0h15v15h-15z" fill={costume.bow}/>
        <path d="M87 47h13v12H87z" fill={costume.trim}/>
        <path d="M88 130h10v12H88z" fill={costume.bow}/>
      </g>
      <g fill="#fff6c6"><path d="m25 51 3 8 8 3-8 3-3 8-3-8-8-3 8-3zM161 102l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/></g>
    </svg>
  );
}

function DressUpGame() {
  const [costumeIndex, setCostumeIndex] = useState(0);
  const setRelative = (offset: number) => setCostumeIndex((prev) => (prev + offset + costumes.length) % costumes.length);
  return (
    <WindowFrame title="DRESS UP.exe" tag="♡ magical closet / v.01" className="dressup-window">
      <div className="dressup-prompt">☆ CREATE YOUR ALTER EGO ☆</div>
      <div className="avatar-scene"><div className="avatar-sun" aria-hidden="true"/><Avatar costumeIndex={costumeIndex}/><div className="avatar-ground" aria-hidden="true"/></div>
      <div className="outfit-information"><span>OUTFIT {String(costumeIndex + 1).padStart(2,'0')} / 03</span><strong>{costumes[costumeIndex].name}</strong><small>{costumes[costumeIndex].subtitle}</small></div>
      <div className="outfit-controls"><button type="button" aria-label="이전 의상" onClick={() => setRelative(-1)}>◀</button><span>CHANGE LOOK</span><button type="button" aria-label="다음 의상" onClick={() => setRelative(1)}>▶</button></div>
      <div className="outfit-swatches" aria-label="의상 선택">{costumes.map((costume, i) => <button type="button" key={costume.name} className={i===costumeIndex ? 'swatch active' : 'swatch'} style={{ background: costume.dress }} aria-label={costume.name} aria-pressed={i===costumeIndex} onClick={() => setCostumeIndex(i)}/>)}</div>
    </WindowFrame>
  );
}

function PixelScene() {
  const pixels = [
    [34,33],[99,60],[160,26],[236,77],[315,24],[395,54],[477,32],[536,75],[604,21],[675,66],[745,38],[813,79],
    [76,121],[191,144],[290,118],[431,129],[563,147],[716,127],[832,155]
  ];
  return (
    <svg className="pixel-scene" viewBox="0 0 900 620" role="img" aria-label="마법소녀의 대기·화학 연구실을 표현한 픽셀 아트. 별이 빛나는 창문, 컴퓨터 모니터, 실험기구와 분홍색 책상이 있습니다.">
      <defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4d3593"/><stop offset="100%" stopColor="#ae6eb2"/></linearGradient></defs>
      <g shapeRendering="crispEdges">
        <rect width="900" height="620" fill="#44356a"/>
        <rect x="0" y="0" width="900" height="380" fill="#554577"/>
        <rect x="28" y="27" width="844" height="293" fill="#b78bc4"/>
        <rect x="40" y="39" width="820" height="269" fill="url(#sky)"/>
        <path d="M40 263h72v-23h65v16h83v-30h75v26h84v-17h64v26h91v-29h54v29h90v-34h71v34h71v47H40z" fill="#7a5b9c"/>
        <path d="M40 283h105v-19h72v16h97v-30h82v25h73v-13h90v25h122v-17h91v18h88v20H40z" fill="#44386e"/>
        <rect x="440" y="38" width="12" height="270" fill="#caa3cc"/>
        <rect x="40" y="168" width="820" height="9" fill="#caa3cc"/>
        {pixels.map(([x,y],i)=><rect key={i} x={x} y={y} width={i%3===0?7:4} height={i%3===0?7:4} fill="#fff1d5" opacity={i%2===0?1:.66}/>)}
        <rect x="684" y="65" width="42" height="42" fill="#fff0c9"/>
        <rect x="676" y="72" width="13" height="28" fill="#f9d4c2"/>
        <rect x="718" y="59" width="16" height="51" fill="#ba80b8"/>
        <rect x="0" y="316" width="900" height="12" fill="#d89dd7"/>
        <rect x="0" y="328" width="900" height="140" fill="#6b4c7e"/>
        <rect x="0" y="462" width="900" height="158" fill="#453454"/>
        <rect x="0" y="456" width="900" height="24" fill="#d68fbb"/>
        <rect x="0" y="481" width="900" height="19" fill="#aa6d9f"/>
        <rect x="39" y="500" width="53" height="120" fill="#785481"/>
        <rect x="808" y="500" width="53" height="120" fill="#785481"/>
        <rect x="119" y="490" width="661" height="10" fill="#f4b5d4"/>
        {/* analysis monitor */}
        <rect x="52" y="263" width="189" height="164" fill="#493158"/>
        <rect x="59" y="270" width="174" height="148" fill="#c59de0"/>
        <rect x="72" y="284" width="150" height="118" fill="#292d6f"/>
        <rect x="81" y="296" width="132" height="12" fill="#6864b3"/>
        <rect x="81" y="320" width="70" height="67" fill="#302d68"/>
        <path d="m87 360 16-12 13 7 12-24 16 4" fill="none" stroke="#ffaed2" strokeWidth="5"/>
        <path d="m160 380 12-12 12 4 14-26 12-7" fill="none" stroke="#8bd8ed" strokeWidth="5"/>
        <rect x="162" y="317" width="45" height="8" fill="#83a2f0"/>
        <rect x="162" y="331" width="28" height="7" fill="#9e87d3"/>
        <rect x="162" y="344" width="39" height="7" fill="#9e87d3"/>
        <rect x="120" y="428" width="49" height="10" fill="#d0a9d1"/>
        <rect x="134" y="438" width="23" height="22" fill="#9371a4"/>
        {/* second analysis screen */}
        <rect x="665" y="263" width="185" height="163" fill="#463259"/>
        <rect x="673" y="271" width="168" height="146" fill="#caa4d9"/>
        <rect x="683" y="282" width="147" height="120" fill="#26366d"/>
        <rect x="690" y="290" width="132" height="12" fill="#6266b2"/>
        <rect x="698" y="321" width="112" height="59" fill="#354d86"/>
        <path d="M703 369v-24h20v-16h24v13h28v-7h27v34z" fill="#749ec3"/>
        <path d="M705 345h93" stroke="#e7b1e6" strokeWidth="3" strokeDasharray="7 5"/>
        <rect x="737" y="428" width="49" height="10" fill="#d0a9d1"/>
        <rect x="750" y="438" width="23" height="22" fill="#9371a4"/>
        {/* central CRT */}
        <rect x="256" y="212" width="394" height="278" fill="#765082"/>
        <rect x="270" y="225" width="367" height="248" fill="#f9cfdb"/>
        <rect x="286" y="241" width="334" height="195" fill="#302856"/>
        <rect x="298" y="254" width="309" height="166" fill="#7566b3"/>
        <path d="M298 351h309v69H298z" fill="#4a4285"/>
        <path d="M298 373h41v-16h33v9h36v-22h39v21h49v-13h57v21h54v47H298z" fill="#3b3575"/>
        <rect x="323" y="274" width="12" height="12" fill="#fff9e8"/>
        <rect x="530" y="288" width="9" height="9" fill="#fff9e8"/>
        <rect x="578" y="322" width="7" height="7" fill="#ffc5ed"/>
        <rect x="353" y="321" width="7" height="7" fill="#ffc5ed"/>
        <path d="M449 269v12h-12v12h12v12h12v-12h12v-12h-12v-12z" fill="#ffe0f1"/>
        <rect x="286" y="447" width="334" height="11" fill="#aa79ac"/>
        <rect x="418" y="473" width="78" height="13" fill="#eac0d4"/>
        <rect x="434" y="486" width="45" height="19" fill="#9a6d9b"/>
        <rect x="373" y="504" width="170" height="14" fill="#e0adc9"/>
        <rect x="360" y="519" width="194" height="8" fill="#95648f"/>
        {/* keyboard */}
        <rect x="324" y="533" width="270" height="35" fill="#f1c3d8"/>
        <rect x="335" y="540" width="249" height="9" fill="#aa80af"/>
        <rect x="348" y="555" width="222" height="6" fill="#ad88b3"/>
        {/* lab glassware left */}
        <rect x="28" y="457" width="183" height="14" fill="#efb1cc"/>
        <rect x="38" y="437" width="25" height="24" fill="#a6cbe3" opacity=".9"/>
        <path d="M70 414h13v20h16v28H58v-28h12z" fill="#a0dcf0"/>
        <path d="M63 449h30v12H63z" fill="#f7a2cc"/>
        <rect x="114" y="403" width="10" height="28" fill="#9bdff4"/>
        <path d="M105 431h29v26h-29z" fill="#b6e8e8"/>
        <path d="M105 448h29v9h-29z" fill="#7e9cde"/>
        <rect x="153" y="425" width="12" height="32" fill="#f9d4e6"/>
        <rect x="146" y="437" width="27" height="20" fill="#a7d5e0"/>
        {/* atmospheric sensor and notebooks right */}
        <rect x="714" y="452" width="160" height="12" fill="#edb8d0"/>
        <rect x="733" y="425" width="73" height="27" fill="#e6bfd8"/>
        <rect x="740" y="432" width="29" height="14" fill="#7897c0"/>
        <rect x="778" y="433" width="20" height="7" fill="#ef78ad"/>
        <rect x="817" y="420" width="44" height="33" fill="#7a6cb1"/>
        <rect x="820" y="414" width="42" height="7" fill="#ffb3cf"/>
        <rect x="830" y="404" width="32" height="9" fill="#aab8ee"/>
        {/* sticker details */}
        <rect x="239" y="522" width="23" height="23" fill="#f28abc"/>
        <rect x="246" y="529" width="9" height="9" fill="#fff1d6"/>
        <rect x="642" y="522" width="22" height="22" fill="#95bcff"/>
        <path d="m650 526 7 8-7 7-6-7z" fill="#fff3e6"/>
      </g>
    </svg>
  );
}

export default function Home() {
  const [started, setStarted] = useState(false);
  const latest = [...posts].sort((a,b) => b.date.localeCompare(a.date)).slice(0, 3);
  return (
    <div id="top" className="site-shell">
      <a className="skip-link" href="#main">본문으로 바로가기</a>
      <div className="background-stars" aria-hidden="true"><span>✧</span><span>✦</span><span>✧</span><span>✦</span><span>✶</span></div>
      <header className="topbar">
        <a href="#top" className="tiny-brand">✦ SOHYEON ON EARTH <span>★ OFFICIAL HOMEPAGE</span></a>
        <nav aria-label="주 메뉴"><a href="#main">HOME</a><a href="#about">ABOUT</a><Link href="/blog">DIARY</Link><a href="#links">LINKS</a></nav>
      </header>
      <div className="ticker" aria-hidden="true"><div>✦ WELCOME TO MY LITTLE UNIVERSE ✧ MAGICAL GIRL × SCI-FI × Y2K WEB GAME ✦ CHEMISTRY IS A KIND OF MAGIC ✧ SOHYEON ON EARTH ✦</div></div>
      <main id="main">
        <div className="desktop-grid">
          <aside className="left-rail" aria-label="캐릭터 게임"><div className="rail-label">01 / MINI GAME</div><DressUpGame/><div className="mini-sticker">✧ dress your dream self ✧</div></aside>
          <section className="hero-column" aria-labelledby="hero-heading">
            <div className="hero-hud"><span>✦ SYSTEM ONLINE</span><span>EARTH / 001</span></div>
            <div className="hero-board">
              <Star className="star-a"/><Star className="star-b"/><Star className="star-c"/><Star className="star-d"/>
              <div className="hero-heading-wrap"><span className="hero-kicker">♡ WELCOME TO THE WORLD OF ♡</span><h1 id="hero-heading" className="hero-logo"><span>Sohyeon</span><span>on Earth<span className="hero-exclaim">!</span></span></h1><span className="hero-subheading">THE GIRL WHO STUDIES THE SKY & EARTH</span></div>
              <div className="hero-illustration"><PixelScene /></div>
              <div className="press-start-wrap"><button type="button" className="press-start" onClick={() => setStarted((old) => !old)} aria-expanded={started} aria-controls="game-menu"><span className="button-spark">✦</span> {started ? 'CLOSE MENU' : 'PRESS START'} <span className="button-spark">✦</span></button><span className="press-hint">CLICK TO ENTER MY WORLD</span></div>
              {started && <div className="game-menu" id="game-menu"><span className="menu-caption">SELECT YOUR DESTINATION</span><a href="#about" onClick={() => setStarted(false)}>✧ ABOUT ME</a><Link href="/blog">✧ READ THE DIARY</Link><a href="#links" onClick={() => setStarted(false)}>✧ FIND ME ONLINE</a></div>}
            </div>
            <div className="hero-hud bottom"><span>LV. 01 · EXPLORING THE UNIVERSE</span><span>♥ ♥ ♥</span></div>
          </section>
          <aside className="right-rail" aria-label="소개와 최신 글">
            <div className="rail-label">02 / PLAYER INFO</div>
            <WindowFrame title="ABOUT ME.txt" tag="♡ player profile / earth server" className="profile-window">
              <div className="profile-inner" id="about"><div className="profile-icon" aria-hidden="true">✿</div><span className="profile-level">PLAYER NO. 001</span><h2>HELLO!<br/>I&apos;M SOHYEON.</h2><p>화학과 지리학을 공부하고, 하늘과 땅에서 벌어지는 일들을 좋아해요. 실험실과 지도 사이의 호기심, 그리고 반짝이는 일상을 이곳에 모읍니다.</p><div className="profile-status"><span>CLASS</span><strong>EARTH EXPLORER</strong></div><div className="profile-status"><span>MOOD</span><strong>CURIOUS +999</strong></div></div>
            </WindowFrame>
            <WindowFrame title="NEW DIARY.log" tag="♡ tiny memories / ongoing" className="blog-window">
              <div className="blog-inner"><div className="panel-strap">LATEST ENTRIES <span>✧</span></div>{latest.map((post,i)=><Link href={'/blog/' + post.slug} className="blog-entry" key={post.slug}><span className="blog-index">{String(i+1).padStart(2,'0')}</span><span className="blog-info"><strong>{post.title}</strong><small>{post.date} · {post.tag}</small></span><span className="entry-arrow">↗</span></Link>)}<Link className="blog-all" href="/blog">OPEN MY DIARY ↗</Link></div>
            </WindowFrame>
          </aside>
        </div>
        <section className="bottom-widgets" id="links" aria-label="둘러보기">
          <div className="mission-card"><span>☆ MISSION 01</span><h2>Wonder is everywhere.</h2><p>분자에서 대기로, 대기에서 지형으로. 궁금한 것을 따라가다 보면 매일 새로운 세계가 펼쳐져요.</p></div>
          <div className="link-card"><span>☆ QUICK PORTALS</span><div><Link href="/blog">✧ MY DIARY <b>↗</b></Link><a href="https://github.com/shkim03/Sohyeon-on-Earth" target="_blank" rel="noopener noreferrer">✧ GITHUB <b>↗</b></a><a href="#top">✧ BACK TO TOP <b>↑</b></a></div></div>
        </section>
      </main>
      <footer className="footer"><span>© 2026 SOHYEON ON EARTH</span><span>MADE WITH STARDUST, SCIENCE & LOVE ♡</span><span>YOU ARE VISITOR ★001</span></footer>
    </div>
  );
}
