import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroCarousel } from "@/components/HeroCarousel";
import { SafeBackgroundImage } from "@/components/SafeBackgroundImage";
import { TechStackTabs } from "@/components/TechStackTabs";
import { AIAgentBuilder } from "@/components/AIAgentBuilder";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { TeamCarousel } from "@/components/TeamCarousel";
import { normalizeImageUrl } from "@/lib/images";

type HomeResponse = {
  slides: {
    id: number;
    heading: string;
    subHeading: string;
    tags: string[];
    backgroundImageUrl: string;
    isActive: boolean;
    displayOrder: number;
  }[];
  about: {
    mission: string;
    vision: string;
    teamIntro: string;
    expertise: string[];
    coreValues: string[];
  } | null;
  team: {
    id: number;
    name: string;
    role: string;
    bio: string;
    expertise: string[];
    avatarUrl: string;
    isActive: boolean;
    displayOrder: number;
  }[];
  posts: {
    id: number;
    title: string;
    excerpt: string;
    slug: string;
    imageUrl: string;
    publishedAt: string | null;
  }[];
};

async function getHomeData(): Promise<HomeResponse | null> {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://0.0.0.0:5000";
  const res = await fetch(`${base}/api/home`, { cache: "no-store" });
  if (!res.ok) return null;
  return (await res.json()) as HomeResponse;
}

export default async function Home() {
  const data = await getHomeData();
  const slides = data?.slides ?? [];
  const about = data?.about ?? null;
  const team = data?.team ?? [];
  const posts = data?.posts ?? [];



  const comparisonData = [
    { param: "AI-First Architecture", nano: true, others: false },
    { param: "Deep Customization", nano: true, others: "Limited" },
    { param: "Autonomous Workflows", nano: true, others: false },
    { param: "Scalability", nano: "Enterprise", others: "Basic" },
    { param: "Post-Deployment Optimization", nano: true, others: false },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="w-full">
        <HeroCarousel slides={slides} />
      </div>

      <main className="mx-auto max-w-[1400px] px-6">
        <section id="about" className="py-16">
          <AboutSection
            data={
              about
                ? {
                    mission: about.mission,
                    vision: about.vision,
                    coreValues: about.coreValues ?? [],
                  }
                : null
            }
          />
        </section>

        <section id="team" className="py-20">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-orange-600">
              Meet The Team
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
              AI-Native Experts
            </h2>
          </div>
          <div className="mt-12">
            <TeamCarousel team={team} />
          </div>
        </section>

        <section id="services" className="py-12">
          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="mb-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-orange-600">
                Our Services
              </p>
              <h2 className="mt-2 text-xl font-extrabold text-gray-900 md:text-2xl">
                Digital Transformation Services for{" "}
                <span className="text-orange-600">Every Small to Large Enterprise</span>
              </h2>
            </div>
            <ServicesSection />
          </div>
        </section>

        <section id="agent" className="py-12">
          <div className="rounded-2xl border border-gray-200 px-8 py-6 shadow-sm">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-orange-600">
                Train & Tune
              </p>
              <h2 className="mt-2 text-xl font-extrabold text-gray-900 md:text-2xl">
                Build Your Own AI Agent
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-600">
                Create powerful AI agents customized for your business needs.
              </p>
            </div>
            <div className="mt-5">
              <AIAgentBuilder />
            </div>
          </div>
        </section>

        <section id="tech" className="py-8">
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 via-white to-orange-50/30 px-8 py-6 shadow-sm">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-orange-600">
                Powered By
              </p>
              <h2 className="mt-2 text-xl font-extrabold text-gray-900 md:text-2xl">
                Technologies We Work With
              </h2>
            </div>
            <div className="mt-5">
              <TechStackTabs />
            </div>
          </div>
        </section>

        <section id="compare" className="py-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-orange-600">
              Why Choose Us
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
              NanoFlows vs Others
            </h2>
          </div>
          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                    Parameter
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider text-orange-600">
                    NanoFlows
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Others
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={row.param} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 text-gray-700">{row.param}</td>
                    <td className="px-4 py-3 text-center">
                      {typeof row.nano === "boolean" ? (
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                          ✓
                        </span>
                      ) : (
                        <span className="font-medium text-green-600">{row.nano}</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {typeof row.others === "boolean" ? (
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-500">
                          ✗
                        </span>
                      ) : (
                        <span className="text-gray-500">{row.others}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="blog" className="py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-orange-600">
                Case Studies
              </p>
              <h2 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
                Real Results, Real Impact
              </h2>
            </div>
            <a
              href="/blog"
              className="inline-flex items-center gap-2 rounded-xl border border-orange-500 px-6 py-3 text-sm font-semibold text-orange-600 transition hover:-translate-y-0.5 hover:bg-orange-50"
            >
              View All →
            </a>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.length > 0 ? (
              posts.map((post) => (
                <article
                  key={post.id}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
                >
                  <SafeBackgroundImage
                    src={normalizeImageUrl(post.imageUrl)}
                    className="aspect-video bg-gray-100 bg-cover bg-center"
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
                    <a
                      href={`/blog/${post.slug}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-600"
                    >
                      Read More →
                    </a>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-full rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center text-gray-500">
                Case studies will appear here once published.
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
