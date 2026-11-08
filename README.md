# Sohyeon-on-Earth
THIS IS ONLY FOR MEEEE YAYYYYYYYYYYYYYY!!

김소현의 개인 홈페이지. 대기와 지표를 공부하고 그 사이의 일상을 기록하는 공간입니다.

## 로컬에서 보기

Node.js 22 이상과 npm이 필요합니다. 레포를 클론한 뒤 레포 루트에서 실행합니다.

```bash
npm ci
npm run dev
```

브라우저에서 http://localhost:3000 을 엽니다. `npm run build`를 실행하면 정적 사이트가 `out/`에 생성됩니다.

## 수정할 파일

| 파일 | 내용 |
| --- | --- |
| `app/page.tsx` | 메인 화면의 구성, 소개 문구, Research·Notes·About 섹션 |
| `app/globals.css` | 블랙·핑크 팔레트, 콜라주 배치, 모바일 레이아웃 |
| `app/layout.tsx` | 브라우저 탭 제목, 사이트 설명 |
| `public/` | 파란 버스, 지형 사진, 폰트, 파비콘 |
| `CLAUDE.md` | Claude Code 프로젝트 안내 |

## Claude Code로 편집하기

레포 루트에서 `claude`를 실행합니다. 변경 후 로컬 미리보기와 `npm run build`로 확인합니다. GitHub 저장소와 ChatGPT Sites 배포는 각각 관리합니다.
