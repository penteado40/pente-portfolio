"use client";

import Image from "next/image";
import { ArrowSquareOutIcon as ArrowSquareOut, GithubLogoIcon as GithubLogo } from "@phosphor-icons/react";
import { useLanguage } from "@/lib/i18n";
import { devContent, type Project } from "@/lib/content";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";

function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  const { t } = useLanguage();

  return (
    <div className="hover-lift flex flex-col overflow-hidden rounded-2xl border border-border">
      {project.image && (
        <div className={`relative ${featured ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
          <Image
            src={project.image}
            alt=""
            fill
            className="object-cover"
            sizes={featured ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
          />
        </div>
      )}
      <div className="flex flex-1 flex-col justify-between gap-4 p-6">
        <div>
          <h3 className={featured ? "text-xl font-medium" : "text-lg font-medium"}>
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4 text-sm font-medium text-accent">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:underline"
            >
              <GithubLogo size={16} weight="bold" aria-hidden />
              {t("common.sourceCode")}
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:underline"
            >
              <ArrowSquareOut size={16} weight="bold" aria-hidden />
              {t("common.liveDemo")}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const { t, language } = useLanguage();
  const { projects } = devContent[language];
  const [featured, ...rest] = projects;

  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl border-t border-border px-4 py-16 sm:px-6 md:py-24 lg:px-8"
    >
      <SectionHeading title={t("dev.projects.title")} />

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
        {featured && (
          <ScrollReveal className="md:col-span-2">
            <ProjectCard project={featured} featured />
          </ScrollReveal>
        )}
        {rest.map((project, index) => (
          <ScrollReveal key={project.title} delay={index * 0.06}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
