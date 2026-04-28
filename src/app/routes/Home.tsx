import {
  Calendar,
  Mail,
  MapPin,
  ExternalLink,
  FileText,
  Info,
} from "lucide-react";
import { SiSlack } from "react-icons/si";
import { Link, useLocation } from "react-router";
import { useEffect } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import homeData from "../../data/home.json";

import programData from "../../data/program.json";
import scheduleData from "../../data/schedule.json";
import organizersData from "../../data/organizers.json";
import supportersData from "../../data/supporters.json";
import contactData from "../../data/contact.json";
import callForPapersData from "../../data/callForPapers.json";
import type { Route } from "./+types/Home";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { buildMeta } from "@/lib/seo";

export const meta: Route.MetaFunction = () =>
  buildMeta({
    title:
      "VGI Workshop @ CVPR 2026 | Visual General Intelligence -Vision Research Toward the AGI Era-",
    description:
      "VGI Workshop at CVPR 2026 spotlights resource-efficient representation learning. Join us on October 19 in Honolulu for keynotes, paper presentations, and community updates.",
    path: "/",
    keywords: ["CVPR workshop 2026", "visual general intelligence"],
  });

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const element = document.querySelector(location.hash);
    element?.scrollIntoView({ behavior: "smooth" });
  }, [location.hash]);

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
              {/* <div className="flex items-center gap-3 -mx-2">
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
              </span> */}
              <div className="flex items-center gap-3 pl-4 pr-4">
                <img
                  src="/cvpr-logo-black.png"
                  alt="CVPR 2026 logo"
                  className="h-10 dark:hidden"
                />
                <img
                  src="/cvpr-logo-white.png"
                  alt="CVPR 2026 logo"
                  className="hidden h-10 dark:block"
                />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl tracking-tighter sm:text-5xl md:text-6xl">
              {homeData.title}
            </h1>
            <p className="text-2xl tracking-tight sm:text-3xl md:text-4xl">
              {homeData.tagline}
            </p>
            <p className="text-lg text-muted-foreground">{homeData.subtitle}</p>
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
            <Button variant="outline" size="lg" asChild>
              <Link to="/#program">Check Program</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section id="news" className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl tracking-tighter">Latest News</h2>
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

      {/* Overview Section */}
      <section id="about" className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl tracking-tighter">About VGI Workshop</h2>
          <p>
            Artificial General Intelligence (AGI) is often described as AI
            capable of replicating human intelligence across all aspects of
            cognition. It is increasingly evident that visual intelligence will
            play a fundamental role in the emergence of AGI. Accordingly,
            sustained discussion and systematic preparation toward this goal are
            crucial within the CVPR community.
          </p>
          <p>
            A central question we pose is whether the pursuit of visual
            intelligence, referred to here as Visual General Intelligence (VGI),
            should be viewed as a natural extension of existing vision research,
            or whether it demands a radical leap or paradigm shift. In
            particular, it is essential to explore how vision research should be
            conducted for the next generation of AI systems, especially along
            directions that reduce dependence on language-centric supervision
            and reasoning, in contrast to the heavy reliance seen in current
            Vision-Language Models (VLMs) and Multimodal LLMs (MLLMs).
          </p>
        </div>
        {/* Broader impact */}
        <div className="space-y-2">
          <h3 className="text-2xl tracking-tighter">Broader impact</h3>
          <p>
            As AGI research continues to advance, the role of visual
            intelligence becomes increasingly significant. The CVPR community is
            uniquely positioned to shape this trajectory by defining how visual
            perception, reasoning, and learning contribute to general
            intelligence.
          </p>
          <p>
            This workshop aims to foster critical discussion on the long-term
            implications of VGI, including its technical foundations, ethical
            considerations, and societal impact. By examining whether current
            vision paradigms are sufficient or whether fundamentally new
            perspectives are required, we hope to guide the development of
            responsible, robust, and vision-centric pathways toward AGI.
          </p>
        </div>
        {/* Topics of Interest */}
        <div className="space-y-2">
          <h3 className="text-2xl tracking-tighter">Topics of Interest</h3>
          <p>
            The VGI Workshop focuses on the following topics across the diverse
            domains represented by the organizers:
          </p>
          <div className="space-y-2">
            <ul className="list-disc pl-5 space-y-1">
              {callForPapersData.topics.core.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl tracking-tighter">
            Workshop Program
          </h2>
        </div>
        <ScrollArea className="w-[80dvw] md:w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Time</TableHead>
                <TableHead>Session</TableHead>
                <TableHead>Presenter</TableHead>
                <TableHead className="hidden md:table-cell w-[140px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {scheduleData.workshopProgram.day1.schedule.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.time}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>{item.session}</div>
                      {item.title && (
                        <div className="text-sm text-muted-foreground italic">
                          {item.title}
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{item.presenter || ""}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {item.slides ? (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={item.slides} target="_blank" rel="noreferrer">
                          <FileText className="mr-2 h-4 w-4" />
                          Slides
                        </a>
                      </Button>
                    ) : (
                      <span className="text-muted-foreground text-sm"></span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>

      {/* Invited Speakers Section */}
      <section id="speakers" className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl tracking-tighter">
            Invited Speakers
          </h2>
        </div>
        <div className="flex items-start gap-4 rounded-lg border bg-card p-6">
          <Info className="h-6 w-6 shrink-0 text-primary" />
          <p>
            The list of invited speakers is not yet finalized. Some speakers
            have given tentative confirmation, and additional speakers may be
            announced in the future. Please check back for updates.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programData.invitedSpeakers.map((speaker, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{speaker.name}</CardTitle>
                <CardDescription>{speaker.affiliation}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="aspect-square bg-muted rounded-md flex items-center justify-center">
                    <img
                      src={speaker.photo}
                      alt={`Photo of ${speaker.name}`}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex gap-2"
                  asChild
                >
                  <a href={speaker.website} target="_blank" rel="noreferrer">
                    View Profile <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Organizers */}
      <section id="organizers" className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl tracking-tighter">Organizers</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {organizersData.organizers.map((chair, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{chair.name}</CardTitle>
                <CardDescription>{chair.affiliation}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="aspect-square bg-muted rounded-md flex items-center justify-center">
                    <img
                      src={chair.photo}
                      alt={`Photo of ${chair.name}`}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex gap-2"
                  asChild
                >
                  <a href={chair.website} target="_blank" rel="noreferrer">
                    Website <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Supporters */}
      <section id="supporters" className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl tracking-tighter">Supporters</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {supportersData.supporters.map((supporter, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{supporter.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="aspect-square bg-white dark:bg-white rounded-md flex items-center justify-center">
                    <img
                      src={supporter.logo}
                      alt={`Logo of ${supporter.name}`}
                      className="object-contain w-full h-full p-4"
                      loading="lazy"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex gap-2"
                  asChild
                >
                  <a href={supporter.website} target="_blank" rel="noreferrer">
                    Website <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Information */}
      <section id="contact" className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl tracking-tighter">
            Contact Information
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contactData.contactInfo.map((info, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {info.icon === "Mail" && <Mail className="h-5 w-5" />}
                  {info.icon === "MapPin" && <MapPin className="h-5 w-5" />}
                  {info.icon === "SiSlack" && <SiSlack className="h-5 w-5" />}
                  {info.type}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {info.description}
                </p>
                {info.value && (
                  <p className="font-medium mt-2">
                    {info.type === "Email" ? (
                      <a
                        href={`mailto:${info.value}`}
                        className="hover:text-primary"
                      >
                        {info.value}
                      </a>
                    ) : (
                      info.value.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < info.value.split("\n").length - 1 && <br />}
                        </span>
                      ))
                    )}
                  </p>
                )}
                {info.socialLinks && (
                  <div className="flex gap-4 mt-2">
                    {info.socialLinks.map((link, linkIndex) => (
                      <Button
                        key={linkIndex}
                        variant="outline"
                        size="sm"
                        className="flex gap-2"
                        asChild
                      >
                        <a href={link.url} target="_blank" rel="noreferrer">
                          {link.icon === "SiSlack" && (
                            <SiSlack className="h-4 w-4" />
                          )}
                          {link.name}
                        </a>
                      </Button>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
