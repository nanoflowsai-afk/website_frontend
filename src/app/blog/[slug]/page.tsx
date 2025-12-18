import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SafeBackgroundImage } from "@/components/SafeBackgroundImage";
import { normalizeImageUrl } from "@/lib/images";
import Link from "next/link";
import { notFound } from "next/navigation";

// Force dynamic rendering since we fetch from external API


type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  imageUrl: string;
  publishedAt: string | null;
  isPublished: boolean;
};

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL;
  const base = apiBase
    ? apiBase.replace(/\/+$/, "")
    : (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:5001");
  try {
    const res = await fetch(`${base}/api/home`, { cache: "no-store" });
    if (!res.ok) {
      console.error(`Failed to fetch blog post: ${res.status} ${res.statusText}`);
      return null;
    }
    const data = await res.json();
    const posts = data.posts ?? [];
    return posts.find((p: BlogPost) => p.slug === slug) ?? null;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

async function getRelatedPosts(currentSlug: string): Promise<BlogPost[]> {
  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL;
  const base = apiBase
    ? apiBase.replace(/\/+$/, "")
    : (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:5001");
  try {
    const res = await fetch(`${base}/api/home`, { cache: "no-store" });
    if (!res.ok) {
      console.error(`Failed to fetch related posts: ${res.status} ${res.statusText}`);
      return [];
    }
    const data = await res.json();
    const posts = data.posts ?? [];
    return posts.filter((p: BlogPost) => p.slug !== currentSlug).slice(0, 3);
  } catch (error) {
    console.error("Error fetching related posts:", error);
    return [];
  }
}


export async function generateStaticParams() {
  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL;
  const base = apiBase
    ? apiBase.replace(/\/+$/, "")
    : (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:5001"); // Updated default to 5001 matching backend

  try {
    const res = await fetch(`${base}/api/home`, { cache: "no-store" }); // Fetch all posts
    if (!res.ok) return [];

    const data = await res.json();
    const posts: BlogPost[] = data.posts ?? [];

    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error generating static params for blog:", error);
    return [];
  }
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(slug);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <article>
        <header className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50 py-20">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-200 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-200 rounded-full blur-3xl"></div>
          </div>

          <div className="relative mx-auto max-w-4xl px-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-700 transition mb-8"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>

            {post.publishedAt && (
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              {post.title}
            </h1>

            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-6 -mt-8">
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
            <SafeBackgroundImage
              src={normalizeImageUrl(post.imageUrl)}
              className="absolute inset-0 bg-gray-100 bg-cover bg-center"
            />
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-6 py-16">
          <div className="prose prose-lg prose-gray max-w-none">
            <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {post.content}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">AI</span>
              <span className="px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">Automation</span>
              <span className="px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">Business</span>
            </div>
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Ready to transform your business?</h3>
                <p className="mt-2 text-gray-600">Let's discuss how AI can drive growth for your organization.</p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/25"
              >
                Get in Touch
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600 mb-4">Keep Reading</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Related Articles</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.id}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-orange-200"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <SafeBackgroundImage
                      src={normalizeImageUrl(relatedPost.imageUrl)}
                      className="absolute inset-0 bg-gray-100 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-orange-600 transition">
                      {relatedPost.title}
                    </h3>
                    <p className="mt-3 text-sm text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-600 group-hover:gap-3 transition-all"
                    >
                      Read More
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
      <Footer />
    </div>
  );
}
