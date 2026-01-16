import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), 'blog');
  const files = fs.readdirSync(blogDir);
  return files.filter(f => f.endsWith('.mdx')).map((file) => ({ slug: file.replace(/\.mdx$/, '') }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;

  console.log('slug', slug);

  const blogDir = path.join(process.cwd(), 'blog');
  const filePath = path.join(blogDir, `${slug}.mdx`);

  let MDXContent = null;
  try {
    const mdxModule = await import(`../../../blog/${slug}.mdx`); // TODO fix: slug is undefined
    MDXContent = mdxModule.default;
    
  } catch (e) {
    return (
      <div>
        <h1>Error loading blog post: {String(e)}</h1>
        <Link href="/blog">← Back to blog</Link>
      </div>
    );
  }

  const file = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(file);

  return (
    <div style={{ margin: '0 auto', maxWidth: 720, padding: 32 }}>
      <Link href="/blog">← Back to blog</Link>
      <h1 style={{ margin: '2rem 0 1rem' }}>{data.title}</h1>
      <div style={{ color: '#888', fontSize: 14, marginBottom: 32 }}>{data.date}</div>
      <article style={{ lineHeight: 1.7 }}>
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        {MDXContent && <MDXContent />}
      </article>
    </div>
  );
}
