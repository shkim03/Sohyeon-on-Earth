import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts } from '../../../data/posts';
export function generateStaticParams() { return posts.map(({slug})=>({slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}) { const {slug}=await params; const post=posts.find(p=>p.slug===slug); return {title:post?post.title+' | Sohyeon on Earth':'Post not found'}; }
export default async function BlogPost({params}:{params:Promise<{slug:string}>}) {
 const {slug}=await params;
 const post=posts.find(p=>p.slug===slug);
 if(!post) notFound();
 return <main className="inner-page"><Link href="/blog" className="return-link">◀ BACK TO DIARY</Link><article className="article-panel"><div className="article-meta">✦ {post.date} / {post.tag}</div><h1 className="inner-title">{post.title}</h1><p className="article-copy">{post.body}</p></article></main>;
}