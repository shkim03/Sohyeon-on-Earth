export type Post = { slug: string; title: string; date: string; tag: string; excerpt: string; body: string };
/**
 * Edit this array to publish a new entry.
 * Dates must be YYYY-MM-DD. Slugs must be unique and URL-safe.
 * All posts are pre-rendered for GitHub Pages.
 */
export const posts: Post[] = [
  { slug: "hello-world", title: "Hello, my little universe!", date: "2026-11-22", tag: "DIARY", excerpt: "Sohyeon on Earth의 새로운 시작.", body: "안녕! 여기는 나의 작은 우주, Sohyeon on Earth야.\n\n마법소녀 게임처럼 반짝이는 공간에 내가 좋아하는 과학, 여행, 연구, 그리고 평범한 일상도 기록하려고 해.\n\n천천히 나만의 이야기로 채워 나갈게. ♡" },
  { slug: "the-sky-and-earth", title: "From molecules to landscapes", date: "2026-11-15", tag: "FIELD NOTES", excerpt: "분자에서 대기, 그리고 지표까지.", body: "작은 분자의 움직임을 궁금해하다가 대기를 공부하게 되었고, 어느새 지형과 지표의 변화도 들여다보게 되었어.\n\n이곳에는 그렇게 이어진 질문들을 차곡차곡 남기고 싶어." },
  { slug: "things-i-love", title: "A few things I love", date: "2026-11-08", tag: "LITTLE THINGS", excerpt: "반짝이는 디자인과 끝없는 호기심.", body: "핑크색, 별빛, 레트로 게임, 반짝이는 것들. 그리고 실험실에서 새로운 걸 발견하는 순간을 좋아해.\n\n매일의 작은 재미들을 잊지 않기 위해 쓰는 기록이야." },
];