import type { Metadata } from "next";
import { FiAward, FiBookOpen, FiMapPin } from "react-icons/fi";
import { PageTransition } from "@/components/ui/page-transition";
import education from "@/data/education.json";

export const metadata: Metadata = {
  title: "Education | Shrutik Meshram",
  description: "My academic background and achievements",
  openGraph: {
    title: "Education | Shrutik Meshram",
    description: "My academic background and achievements",
  },
};

export default function Education() {
  const publishedEducation = education.filter((edu) => edu.published);

  return (
    <PageTransition>
      <div className="container max-w-2xl py-12 md:py-20 mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Education
            </h1>
            <p className="text-lg text-muted-foreground">
              My academic journey and achievements.
            </p>
          </div>
        </div>

        {/* Education Cards */}
        <div className="space-y-12">
          {publishedEducation.map((edu) => (
            <div key={edu.id} className="relative pl-8">
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-2 h-2 rounded-full -translate-x-[3px] bg-accent ring-4 ring-accent/20" />

              {/* Vertical line */}
              <div className="absolute left-0 top-4 bottom-0 w-px bg-border" />

              <div className="group">
                {/* Institution */}
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <FiBookOpen className="w-4 h-4 text-accent" />
                      <h2 className="text-lg font-semibold">
                        {edu.institution}
                      </h2>
                    </div>
                    <p className="text-muted-foreground font-medium mt-1">
                      {edu.degree}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
                  <span>{edu.period}</span>
                  <span className="flex items-center gap-1">
                    <FiMapPin className="w-3 h-3" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent">
                    <FiAward className="w-3 h-3" />
                    CGPA: {edu.cgpa}
                  </span>
                </div>

                {/* Highlights */}
                <div className="mb-2">
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                    Highlights
                  </h3>
                  <ul className="space-y-2">
                    {edu.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-muted-foreground text-sm"
                      >
                        <span className="w-1 h-1 rounded-full bg-muted-foreground/50 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
