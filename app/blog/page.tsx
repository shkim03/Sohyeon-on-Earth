import Link from 'next/link';
import { posts } from '../../data/posts';
export const metadata = { title: 'Diary | Sohyeon on Earth' };
export default function BlogIndex() {
 const sorted=[...posts].sort((a,b)=>b.date.localeCompare(a.date));
 return <main className="inner-page"><Link href="/" className="return-link">◀ RETURN TO HOME</Link><h1 className="inner-title">My little diary.</h1><p className="inner-caption">✦ 연구의 호기심, 일상의 반짝임, 그리고 작은 기록들 ✦</p>{sorted.map(post=><Link href={'/blog/'+post.slug} className="entry-card" key={post.slug}><small>{post.date} / {post.tag}</small><h2>{post.title} ↗</h2><p>{post.excerpt}</p></Link>)}</main>;
}