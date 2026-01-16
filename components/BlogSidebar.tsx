import Link from 'next/link';

interface Post {
  slug: string;
  title: string;
}

interface BlogSidebarProps {
  posts: Post[];
}

export function BlogSidebar({ posts }: BlogSidebarProps) {
  return (
    <aside style={{ minWidth: 200, padding: 16, borderRight: '1px solid #eee' }}>
      <h2>All posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
