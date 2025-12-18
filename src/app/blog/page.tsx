import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SafeBackgroundImage } from "@/components/SafeBackgroundImage";
import { normalizeImageUrl } from "@/lib/images";

// Force dynamic rendering since we fetch from external API


type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  imageUrl: string;
  publishedAt: string | null;
};

const thoughtLeadershipTopics = [
  { name: "Generative AI", icon: "🎨", color: "from-purple-500 to-pink-500" },
  { name: "Agentic AI", icon: "🤖", color: "from-blue-500 to-cyan-500" },
  { name: "Automation Systems", icon: "⚡", color: "from-orange-500 to-amber-500" },
  { name: "AI for Business Growth", icon: "📈", color: "from-green-500 to-emerald-500" },
];

async function getBlogPosts(): Promise<BlogPost[]> {
  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL;
  const base = apiBase
    ? apiBase.replace(/\/+$/, "")
    : (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:5001");
  try {
    const res = await fetch(`${base}/api/home`, { cache: "no-store" });
    if (!res.ok) {
      console.error(`Failed to fetch blog posts: ${res.status} ${res.statusText}`);
      return [];
    }
    const data = await res.json();
    return data.posts ?? [];
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&h=800&fit=crop"
            alt="Blog background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/70"></div>
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              Insights & Research
            </div>
            <h1 className="text-4xl font-extrabold text-white md:text-6xl lg:text-7xl leading-tight">
              Blog
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
              Insights on AI innovation, automation strategies, and business transformation.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {thoughtLeadershipTopics.map((topic) => (
                <div
                  key={topic.name}
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition cursor-pointer"
                >
                  <span className="text-lg">{topic.icon}</span>
                  <span className="text-white font-medium">{topic.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600 mb-4">Latest Articles</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Explore Our Insights</h2>
          </div>

          {posts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => (
                <article
                  key={post.id}
                  className={`group relative overflow-hidden rounded-3xl bg-white shadow-sm border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-orange-200 ${index === 0 ? "md:col-span-2 md:row-span-2" : ""
                    }`}
                >
                  <div className={`relative ${index === 0 ? "aspect-[16/9]" : "aspect-video"} overflow-hidden`}>
                    <SafeBackgroundImage
                      src={normalizeImageUrl(post.imageUrl)}
                      className="absolute inset-0 bg-gray-100 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {index === 0 && (
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-500 text-white text-xs font-semibold">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  <div className={`p-6 ${index === 0 ? "md:p-8" : ""}`}>
                    {post.publishedAt && (
                      <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
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

                    <h3 className={`font-bold text-gray-900 line-clamp-2 group-hover:text-orange-600 transition ${index === 0 ? "text-2xl md:text-3xl" : "text-lg"
                      }`}>
                      {post.title}
                    </h3>

                    <p className={`mt-3 text-gray-600 line-clamp-3 ${index === 0 ? "text-base" : "text-sm"}`}>
                      {post.excerpt}
                    </p>

                    <a
                      href={`/blog/${post.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-600 group-hover:gap-3 transition-all"
                    >
                      Read Article
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border-2 border-dashed border-gray-200 bg-gradient-to-br from-gray-50 to-white p-16 text-center">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Coming Soon</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Our thought leadership articles on AI innovation and automation are being prepared. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600 mb-4">Topics We Cover</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Thought Leadership On</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {thoughtLeadershipTopics.map((topic) => (
              <div
                key={topic.name}
                className="group relative rounded-2xl bg-white p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${topic.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                  {topic.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{topic.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
