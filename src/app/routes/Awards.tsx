import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import awardsData from "../../data/awards.json";
import type { Route } from "./+types/Awards";
import { buildMeta } from "@/lib/seo";

export const meta: Route.MetaFunction = () =>
  buildMeta({
    title: "Awards | LIMIT Workshop @ ICCV 2025",
    description:
      "Celebrate the LIMIT Workshop award recipients, honoring outstanding contributions across accepted papers at ICCV 2025.",
    path: "/awards",
    keywords: [
      "LIMIT Workshop awards",
      "Best Paper LIMIT",
      "ICCV 2025 workshop awards",
      "LIMIT accepted papers",
    ],
  });

function Awards() {
  return (
    <main className="container px-6 py-8 space-y-12 xl:w-6xl">
      <section className="space-y-4 text-center">
        {/* <div className="flex justify-center">
          <AwardIcon className="h-12 w-12 text-primary" />
        </div> */}
        <h1 className="text-3xl sm:text-4xl tracking-tighter">
          {awardsData.title}
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {awardsData.subtitle}
        </p>
        {/* <p className="text-muted-foreground max-w-3xl mx-auto">
          {awardsData.intro}
        </p> */}
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Best Paper Award
          </h2>
        </div>
        <div className="grid gap-6 grid-cols-1">
          {awardsData.awards.map((award) => (
            <Card
              key={award.paperTitle}
              className="relative flex w-full flex-col overflow-hidden rounded-3xl border bg-gradient-to-br from-primary/10 via-background to-background py-12 text-center shadow-lg"
            >
              <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="h-full w-full bg-gradient-to-b from-primary/20 via-transparent to-transparent dark:from-primary/30" />
              </div>
              <CardHeader className="relative z-10 items-center gap-6 px-8 text-center justify-items-center">
                <div className="flex flex-col items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
                  <span>{award.category ?? "Limit Workshop Award"}</span>
                </div>
                <CardTitle className="mx-auto max-w-3xl text-2xl leading-tight tracking-tight sm:text-3xl">
                  {award.paperLink ? (
                    <a
                      href={award.paperLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                    >
                      {award.paperTitle}
                    </a>
                  ) : (
                    award.paperTitle
                  )}
                </CardTitle>
                <CardDescription className="mx-auto max-w-2xl text-base text-muted-foreground/90">
                  {award.authors}
                </CardDescription>
              </CardHeader>
              <CardFooter className="relative z-10 mt-auto flex flex-col items-center gap-6 px-8 pt-6">
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
                  <span className="text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
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
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Awards;
