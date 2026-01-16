# Blog Implementation Plan with Contentlayer

- [ ] **Content Source**
  - [ ] Blog Markdown files in `katdotjs/blog`
  - [ ] Each file contains metadata (title, date, etc.)

- [ ] **Contentlayer Setup**
  - [ ] Install required Contentlayer and remark/rehype plugins
  - [ ] Define content schema for posts (including images, code, etc.)

- [ ] **Next.js Integration**
  - [ ] Configure Contentlayer in Next.js (e.g., next.config.js, contentlayer.config.ts)
  - [ ] Generate types and hooks for blog data

- [ ] **UI Implementation**
  - [ ] Add a main blog index page (e.g., `/blog`) that lists all posts
  - [ ] Sidebar component for quick navigation between posts
  - [ ] Individual post pages, rendered from markdown, with images, code, etc.
  - [ ] Responsive and accessible design

- [ ] **Example File Paths**
  - [ ] `katdotjs/blog/post-1.md`
  - [ ] `katdotjs/components/BlogSidebar.tsx`
  - [ ] `katdotjs/app/blog/page.tsx`
  - [ ] `katdotjs/app/blog/[slug]/page.tsx`

- [ ] **(Optional) Enhancements**
  - [ ] Syntax highlighting for code blocks in posts
  - [ ] Auto-generated Open Graph images and SEO meta tags
  - [ ] Pagination or infinite scroll for posts list
