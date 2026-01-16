import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

// Type for the blog post frontmatter
interface PostData {
  slug: string;
  title: string;
  date: string;
  [key: string]: any;
}

export default function BlogIndex() {
  const blogDir = path.join(process.cwd(), 'blog');
  const files = fs.readdirSync(blogDir);
  const posts: PostData[] = files
    .filter(f => f.endsWith('.mdx'))
    .map(filename => {
      const file = fs.readFileSync(path.join(blogDir, filename), 'utf8');
      const { data } = matter(file);
      return {
        slug: filename.replace(/\.mdx$/, ''),
        ...data
      } as PostData;
    })
    .sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());

  return (
    <div style={{ display: 'flex', minHeight: '80vh' }}>
      <aside style={{ minWidth: 200, padding: 16, borderRight: '1px solid #eee' }}>
        <h2>All posts</h2>
        <ul>
          {posts.map(post => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </aside>
      <main style={{ flex: 1, padding: 32 }}>
        <h1>Blog</h1>
        <ul>
          {posts.map(post => (
            <li key={post.slug} style={{ margin: '2rem 0' }}>
              <Link href={`/blog/${post.slug}`}><strong>{post.title}</strong></Link>
              <div style={{ color: '#888', fontSize: 14 }}>{post.date}</div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
