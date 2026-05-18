import Link from "next/link"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/#projects", label: "Work" },
  { href: "/#connect", label: "Connect" },
]

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/70 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-4xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Link href="/" className="text-sm font-medium tracking-wide text-foreground">
          Kat Terranova
        </Link>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
