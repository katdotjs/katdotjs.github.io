import Link from "next/link"
import SiteHeader from "@/components/site-header"
import { getSortedPostsData } from "@/lib/posts"

export const metadata = {
  title: "Blog | Kat Terranova",
  description: "Writing from Kat Terranova on frontend development, design systems, and web craft.",
}

export default function BlogPage() {
  const allPostsData = getSortedPostsData()

  return (
    <div className="min-h-screen text-foreground">
      <SiteHeader />
      <main className="px-6 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl space-y-12">
        <header className="space-y-6 border-b border-border pb-10">
          <div className="space-y-4">
            <p className="font-mono text-sm tracking-wider text-muted-foreground">BLOG</p>
            <h1 className="text-4xl font-light tracking-tight sm:text-6xl">Keep up with Kat</h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Markdown posts with front matter, sorted newest first.
            </p>
          </div>
        </header>

        <section className="space-y-6">
          {allPostsData.map(({ id, date, title, excerpt }) => (
            <article key={id} className="border-b border-border/60 py-6 transition-colors hover:border-border">
              <Link href={`/blog/${id}`} className="group grid gap-3 sm:grid-cols-[10rem_1fr] sm:gap-8">
                <time className="font-mono text-sm text-muted-foreground" dateTime={date}>
                  {date}
                </time>
                <div className="space-y-2">
                  <h2 className="text-2xl font-light tracking-tight transition-colors group-hover:text-green-300">
                    {title}
                  </h2>
                  {excerpt ? <p className="max-w-2xl leading-relaxed text-muted-foreground">{excerpt}</p> : null}
                </div>
              </Link>
            </article>
          ))}
        </section>
        </div>
      </main>
    </div>
  )
}
