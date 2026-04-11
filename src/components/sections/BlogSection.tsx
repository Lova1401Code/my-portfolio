import { Container } from '../Container'
import { blogPosts } from '../../site-content'

export function BlogSection() {
  return (
    <section id="blog" className="bg-slate-50 py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Blog
          </h2>
          <p className="mt-3 text-slate-600">
            Articles courts sur design, produit et collaboration.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover"
                  width={600}
                  height={450}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-medium text-slate-500">{post.date}</p>
                <h3 className="mt-2 line-clamp-2 text-base font-semibold leading-snug text-slate-900">
                  {post.title}
                </h3>
                <a
                  href="#blog"
                  className="mt-3 inline-block text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  Lire la suite
                </a>
              </div>
            </article>
          ))}
        </div>

        <div
          className="mt-8 flex justify-center gap-2"
          role="tablist"
          aria-label="Pagination du blog"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`h-2.5 w-2.5 rounded-full ${i === 0 ? 'bg-brand-600' : 'bg-slate-300'}`}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
