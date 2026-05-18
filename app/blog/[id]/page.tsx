import Link from "next/link"
import { notFound } from "next/navigation"
import SiteHeader from "@/components/site-header"
import { getAllPostIds, getPostData } from "@/lib/posts"
import type { Metadata } from "next"

type PostPageProps = {
  params: Promise<{
    id: string
  }>
}

export async function generateStaticParams() {
  return getAllPostIds()
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { id } = await params

  try {
    const postData = await getPostData(id)

    return {
      title: `${postData.title} | Kat Terranova`,
      description: postData.excerpt,
    }
  } catch {
    return {
      title: "Post not found | Kat Terranova",
    }
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params

  try {
    const postData = await getPostData(id)

    return (
      <div className="min-h-screen text-foreground">
        <SiteHeader />
        <main className="px-6 py-16 sm:px-8 sm:py-24">
          <article className="mx-auto max-w-3xl space-y-10">
            <header className="space-y-6 border-b border-border pb-10">
              <Link href="/blog" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                All posts
              </Link>
              <div className="space-y-4">
                <time className="font-mono text-sm text-muted-foreground" dateTime={postData.date}>
                  {postData.date}
                </time>
                <h1 className="text-4xl font-light tracking-tight sm:text-6xl">{postData.title}</h1>
                {postData.excerpt ? (
                  <p className="text-lg leading-relaxed text-muted-foreground">{postData.excerpt}</p>
                ) : null}
              </div>
            </header>

            <div className="blog-content" dangerouslySetInnerHTML={{ __html: postData.contentHtml ?? "" }} />
          </article>
        </main>
      </div>
    )
  } catch {
    notFound()
  }
}
