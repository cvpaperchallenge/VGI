import { Calendar, MapPin, ExternalLink, FileText } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

import programData from "../../data/program.json";
import scheduleData from "../../data/schedule.json";
import type { Route } from "./+types/Program";
import { buildMeta } from "@/lib/seo";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const meta: Route.MetaFunction = () =>
  buildMeta({
    title: "Program | LIMIT Workshop @ ICCV 2025",
    description:
      "Explore the LIMIT Workshop program at ICCV 2025, featuring the detailed agenda, invited speakers, and accepted oral and poster papers on efficient learning from limited resources.",
    path: "/program",
    keywords: ["workshop agenda", "invited speakers", "accepted papers"],
  });

function Program() {
  return (
    <main className="container px-6 py-8 space-y-12 xl:w-6xl">
      {/* Header */}
      <section className="space-y-4 text-center">
        <h1 className="text-3xl sm:text-4xl tracking-tighter">
          {programData.title}
        </h1>
        {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {programData.subtitle}
        </p> */}
      </section>

      {/* Submission Section */}
      {/* <section className="space-y-6">
        <div className="rounded-lg border bg-card p-6">
          <div className="space-y-4">
            <p>
              The workshop program is currently being prepared and will be made
              available shortly.
            </p>
          </div>
        </div>
      </section> */}

      {/* Workshop Program - Day 1 */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Workshop Program
          </h2>
          <p className="text-muted-foreground flex items-center gap-2">
            <Calendar className="h-4 w-4" />{" "}
            {scheduleData.workshopProgram.day1.date}
            <MapPin className="h-4 w-4 ml-4" />{" "}
            {scheduleData.workshopProgram.day1.location}
          </p>
        </div>
        <ScrollArea className="w-[80dvw] md:w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Time</TableHead>
                <TableHead>Session</TableHead>
                <TableHead className="hidden md:table-cell">
                  Presenter
                </TableHead>
                <TableHead className="hidden md:table-cell w-[140px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {scheduleData.workshopProgram.day1.schedule.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.time}</TableCell>
                  <TableCell>{item.session}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {item.presenter || ""}
                  </TableCell>
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

      {/* Keynote Speakers */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Invited Speakers
          </h2>
          {/* <p className="text-muted-foreground">
            Distinguished researchers and industry leaders
          </p> */}
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {programData.invitedSpeakers.map((speaker, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{speaker.name}</CardTitle>
                <CardDescription>{speaker.affiliation}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="aspect-square bg-muted rounded-md flex items-center justify-center">
                    {/* <span className="text-muted-foreground">Speaker Photo</span> */}
                    <img
                      src={speaker.photo}
                      alt={`Photo of ${speaker.name}`}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                  {/* <h3 className="font-semibold">{speaker.title}</h3>
                  <p className="text-sm text-muted-foreground">{speaker.bio}</p> */}
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

      {/* Accepted Papers */}
      {/* <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Accepted Papers
          </h2>
          <p className="text-muted-foreground">
            Research papers accepted for presentation at the workshop
          </p>
        </div>
        <div className="flex-col justify-items-center w-full">
          <Tabs defaultValue="oral" className="w-[90dvw] sm:w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="oral">Oral Presentations</TabsTrigger>
              <TabsTrigger value="poster">Poster Presentations</TabsTrigger>
            </TabsList>
            <TabsContent value="oral" className="space-y-4 pt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Paper Title</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Authors
                    </TableHead>
                    <TableHead className="w-[100px]">Links</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {programData.acceptedPapers.oral.map((paper) => (
                    <TableRow key={paper.id}>
                      <TableCell className="font-medium">
                        {paper.title}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {paper.authors}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          {paper.links.paper && (
                            <Button variant="ghost" size="icon" asChild>
                              <a
                                href={paper.links.paper}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <FileText className="h-4 w-4" />
                                <span className="sr-only">Paper</span>
                              </a>
                            </Button>
                          )}
                          {paper.links.video && (
                            <Button variant="ghost" size="icon" asChild>
                              <a
                                href={paper.links.video}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <Video className="h-4 w-4" />
                                <span className="sr-only">Video</span>
                              </a>
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="poster" className="space-y-4 pt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Paper Title</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Authors
                    </TableHead>
                    <TableHead className="w-[100px]">Links</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {programData.acceptedPapers.poster.map((paper, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        {paper.title}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {paper.authors}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          {paper.links.paper && (
                            <Button variant="ghost" size="icon" asChild>
                              <a
                                href={paper.links.paper}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <FileText className="h-4 w-4" />
                                <span className="sr-only">Paper</span>
                              </a>
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </div>
      </section> */}

      {/* Important Dates Timeline */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Accepted Papers [
            <a
              href="https://openreview.net/group?id=thecvf.com/ICCV/2025/Workshop/LIMIT"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary"
            >
              Link
            </a>
            ]{" "}
          </h2>
        </div>
        <div className="relative border-border space-y-2">
          <h3 className="text-2xl sm:text-3xl tracking-tighter">
            Oral Presentations (15:50 - 16:30)
          </h3>
          <p className="">
            Oral presenters have 10 minutes including questions. Oral presenters
            are also required to present at the poster session.
          </p>
        </div>
        <div className="relative border-border space-y-8">
          {programData.acceptedPapers.oral.map((paper, index) => (
            <div key={index} className="relative">
              <div className="space-y-1">
                <div className="flex items-start gap-2">
                  <h3 className="font-semibold">
                    {paper.id}. {paper.title}
                  </h3>
                  {paper.links?.paper && (
                    <a
                      href={paper.links.paper}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 text-primary hover:text-primary/80"
                      aria-label={`Open PDF for ${paper.title}`}
                    >
                      <FileText className="h-4 w-4" />
                    </a>
                  )}
                  {paper.posterBoard && (
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      Poster Board {paper.posterBoard}
                    </span>
                  )}
                </div>
                {/* <p className="text-muted-foreground flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {date.date}
                </p> */}
                <p className="text-sm">{paper.authors}</p>
              </div>
            </div>
          ))}
          {/* {scheduleData.importantDates.map((date, index) => (
            <div key={index} className="relative">
              <div className="space-y-1">
                <h3 className="font-semibold">{date.title}</h3>
                <p className="text-muted-foreground flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {date.date}
                </p>
                <p className="text-sm">{date.description}</p>
              </div>
            </div>
          ))} */}
        </div>
        <div className="relative border-border space-y-2">
          <h3 className="text-2xl sm:text-3xl tracking-tighter">
            Poster Session (16:40 - 18:00)
          </h3>
          <p className="">
            Posters will be 84&quot; x 42&quot; = 213 cm x 107cm (WxH, aspect
            ratio 2:1, landscape format). You may use the{" "}
            <a
              href="https://drive.google.com/drive/u/0/folders/1hb-kDlEeu61wxAPuuHrwhvq69puqgtPS"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary"
            >
              ICCV LOGO
            </a>{" "}
            on your poster. Refer from:{" "}
            <a
              href="https://iccv.thecvf.com/Conferences/2025/PosterPrinting"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary"
            >
              ICCV official website
            </a>
            . Please display your poster on the assigned poster board number in{" "}
            <span className="font-semibold">Exhibit Hall II</span>.
          </p>
        </div>
        <div className="relative border-border space-y-8">
          {programData.acceptedPapers.poster.map((paper, index) => (
            <div key={index} className="relative">
              <div className="space-y-1">
                <div className="flex items-start gap-2">
                  <h3 className="font-semibold">
                    {paper.id}. {paper.title}
                  </h3>
                  {paper.links?.paper && (
                    <a
                      href={paper.links.paper}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 text-primary hover:text-primary/80"
                      aria-label={`Open PDF for ${paper.title}`}
                    >
                      <FileText className="h-4 w-4" />
                    </a>
                  )}
                  {paper.posterBoard && (
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      Poster Board {paper.posterBoard}
                    </span>
                  )}
                </div>
                {/* <p className="text-muted-foreground flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {date.date}
                </p> */}
                <p className="text-sm">{paper.authors}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Accepted Papers */}
      {/* <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Accepted Papers
          </h2>
          <p className="text-muted-foreground">
            Research papers accepted for presentation at the workshop
          </p>
        </div>
        <div className="flex-col justify-items-center w-full">
          <Tabs defaultValue="oral" className="w-[90dvw] sm:w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="oral">Oral Presentations</TabsTrigger>
              <TabsTrigger value="poster">Poster Presentations</TabsTrigger>
            </TabsList>
            <TabsContent value="oral" className="space-y-4 pt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Paper Title</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Authors
                    </TableHead>
                    <TableHead className="w-[100px]">Links</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {programData.acceptedPapers.oral.map((paper) => (
                    <TableRow key={paper.id}>
                      <TableCell className="font-medium">
                        {paper.title}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {paper.authors}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          {paper.links.paper && (
                            <Button variant="ghost" size="icon" asChild>
                              <a
                                href={paper.links.paper}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <FileText className="h-4 w-4" />
                                <span className="sr-only">Paper</span>
                              </a>
                            </Button>
                          )}
                          {paper.links.video && (
                            <Button variant="ghost" size="icon" asChild>
                              <a
                                href={paper.links.video}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <Video className="h-4 w-4" />
                                <span className="sr-only">Video</span>
                              </a>
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="poster" className="space-y-4 pt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Paper Title</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Authors
                    </TableHead>
                    <TableHead className="w-[100px]">Links</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {programData.acceptedPapers.poster.map((paper, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        {paper.title}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {paper.authors}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          {paper.links.paper && (
                            <Button variant="ghost" size="icon" asChild>
                              <a
                                href={paper.links.paper}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <FileText className="h-4 w-4" />
                                <span className="sr-only">Paper</span>
                              </a>
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </div>
      </section> */}

      {/* Panel Discussion */}
      {/* <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Panel Discussion
          </h2>
          <p className="text-muted-foreground">
            Challenges and Opportunities in ML
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>{programData.panelDiscussion.title}</CardTitle>
            <CardDescription>
              {programData.panelDiscussion.time}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>{programData.panelDiscussion.description}</p>
              <h3 className="font-semibold">Panelists</h3>
              <ul className="list-disc pl-5 space-y-2">
                {programData.panelDiscussion.panelists.map(
                  (panelist, index) => (
                    <li key={index}>{panelist}</li>
                  ),
                )}
              </ul>
              <h3 className="font-semibold">Moderator</h3>
              <p>{programData.panelDiscussion.moderator}</p>
            </div>
          </CardContent>
        </Card>
      </section> */}

      {/* Session Structure */}
      {/* <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Session Structure
          </h2>
          <p className="text-muted-foreground">
            Organization of paper presentations by topic
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {programData.sessionStructure.map((session, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{session.title}</CardTitle>
                <CardDescription>{session.time}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {session.description}
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {session.papers.map((paper, paperIndex) => (
                    <li key={paperIndex}>{paper}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section> */}
    </main>
  );
}

export default Program;
