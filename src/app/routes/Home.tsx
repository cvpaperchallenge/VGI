import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router";

import { Button } from "../../components/ui/button";
import homeData from "../../data/home.json";
import scheduleData from "../../data/schedule.json";
import type { Route } from "./+types/Home";
import { buildMeta } from "@/lib/seo";

export const meta: Route.MetaFunction = () =>
  buildMeta({
    title:
      "LIMIT Workshop @ ICCV 2025 | Representation Learning with Limited Resources",
    description:
      "LIMIT Workshop at ICCV 2025 spotlights resource-efficient representation learning. Join us on October 19 in Honolulu for keynotes, paper presentations, and community updates.",
    path: "/",
    keywords: [
      "ICCV workshop 2025",
      "resource-efficient vision",
      "limited data learning",
    ],
  });

function Home() {
  return (
    <main className="container px-6 py-8 space-y-16 xl:w-6xl">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-primary/10 via-background to-background px-6 py-16 text-center shadow-lg">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="h-full w-full bg-gradient-to-b from-primary/20 via-transparent to-transparent dark:from-primary/30" />
        </div>
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
            <span>held as part of</span>
            <div className="flex flex-wrap items-center justify-center gap-4 rounded-full border bg-background/90 px-6 py-3 shadow-sm backdrop-blur">
              <div className="flex items-center gap-3 -mx-2">
                <img
                  src="/limit-logo-black-wide.png"
                  alt="LIMIT Workshop logo"
                  className="h-14 dark:hidden"
                />
                <img
                  src="/limit-logo-white-wide.png"
                  alt="LIMIT Workshop logo"
                  className="hidden h-14 dark:block"
                />
              </div>
              <span className="text-sm tracking-normal text-muted-foreground">
                at
              </span>
              <div className="flex items-center gap-3 pr-4">
                <img
                  src="/iccv-logo-black.png"
                  alt="ICCV 2025 logo"
                  className="h-10 dark:hidden"
                />
                <img
                  src="/iccv-logo-white.png"
                  alt="ICCV 2025 logo"
                  className="hidden h-10 dark:block"
                />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl tracking-tighter sm:text-5xl md:text-6xl">
              {homeData.title}
            </h1>
            <p className="text-xl text-muted-foreground">{homeData.subtitle}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 text-sm sm:flex-row sm:text-base">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>{homeData.eventInfo.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{homeData.eventInfo.location}</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/call-for-papers">Submit Paper</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/program">Check Program</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">
            About LIMIT Workshop
          </h2>
          <p>
            Modern vision and multimodal models depend on massive datasets and
            heavy compute, magnifying costs, energy use, bias, copyright, and
            privacy risks. The “DeepSeek shock” of January 2025 spotlighted the
            urgency of learning powerful representations under tight resource
            limits. Now in its third edition, our workshop continues to explore
            strategies for robust representation learning when data, labels,
            modalities, parameters, or compute are scarce. We focus on
            techniques such as synthetic and distilled data, self-supervision,
            transfer learning, sparsity, and low-rank adaptation that squeeze
            maximum performance from minimal resources. By uniting
            budget-constrained researchers with industry teams operating under
            strict legal requirements, we aim to catalyze collaborations that
            make the next generation of foundation models more democratic,
            ethical, and sustainable.
          </p>
        </div>
        {/* <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">About LIMIT Workshop</h3>
            <p>{homeData.overview.mission}</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Key Topics</h3>
            <ul className="list-disc pl-5 space-y-2">
              {homeData.overview.keyTopics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </div>
        </div> */}
      </section>

      {/* Important Dates Timeline */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Important Dates
          </h2>
          {/* <p className="text-muted-foreground">
            Key deadlines for your calendar
          </p> */}
        </div>
        <div className="relative border-l border-border pl-6 space-y-8">
          {scheduleData.importantDates.map((date, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[32px] mt-1 h-4 w-4 rounded-full bg-primary"></div>
              <div className="space-y-1">
                <h3 className="font-semibold">{date.title}</h3>
                <p className="text-muted-foreground flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {date.date}
                </p>
                <p className="text-sm">{date.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest News Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">Latest News</h2>
          {/* <p className="text-muted-foreground">Updates and announcements</p> */}
        </div>
        <div className="space-y-4">
          {homeData.latestNews.map((news, index) => (
            <div key={index} className="rounded-lg border bg-card p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="font-semibold">{news.title}</h3>
                  <p className="text-sm text-muted-foreground">{news.date}</p>
                </div>
              </div>
              <p className="mt-2">{news.content}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
