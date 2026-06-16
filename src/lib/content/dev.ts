import type { Language } from "@/lib/i18n";
import type { DevContent } from "./types";

// TODO: replace with Felipe's real bio, skills, and projects.
const en: DevContent = {
  bio: [
    "I'm a systems developer focused on backend services, APIs, and the tooling that keeps teams shipping. I care most about code that is easy to reason about a year after it was written.",
    "Recent work spans payment processing, internal developer platforms, and observability tooling, mostly in TypeScript and Go, deployed on cloud infrastructure I also help maintain.",
  ],
  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "Go", "Python", "SQL"],
    },
    {
      category: "Backend",
      items: ["Node.js", "PostgreSQL", "Redis", "REST & gRPC APIs"],
    },
    {
      category: "Infrastructure",
      items: ["Docker", "AWS", "GitHub Actions", "Terraform"],
    },
    {
      category: "Practices",
      items: ["Testing & TDD", "Observability", "Code review", "System design"],
    },
  ],
  projects: [
    {
      title: "Ledger reconciliation service",
      description:
        "A service that reconciles payment provider records against internal ledgers nightly, flagging mismatches before they become support tickets.",
      tech: ["TypeScript", "PostgreSQL", "Docker"],
      repoUrl: "https://github.com/penteado40/ledger-reconciler",
      image: "https://picsum.photos/seed/pente-project-ledger/1200/800",
    },
    {
      title: "Internal CLI for deploy previews",
      description:
        "A CLI that spins up isolated preview environments per pull request, used by the team to review changes before merging.",
      tech: ["Go", "AWS", "GitHub Actions"],
      repoUrl: "https://github.com/penteado40/preview-cli",
      image: "https://picsum.photos/seed/pente-project-cli/1200/800",
    },
    {
      title: "Metrics dashboard for batch jobs",
      description:
        "A lightweight dashboard surfacing run times, failure rates, and queue depth for scheduled jobs, replacing a spreadsheet that nobody trusted.",
      tech: ["TypeScript", "Next.js", "Redis"],
      repoUrl: "https://github.com/penteado40/batch-metrics",
      demoUrl: "https://batch-metrics.example.com",
      image: "https://picsum.photos/seed/pente-project-metrics/1200/800",
    },
  ],
};

const pt: DevContent = {
  bio: [
    "Sou desenvolvedor de sistemas com foco em servicos de backend, APIs e nas ferramentas que mantem times entregando software. O que mais me importa e codigo facil de entender um ano depois de escrito.",
    "Os trabalhos recentes envolvem processamento de pagamentos, plataformas internas para desenvolvedores e ferramentas de observabilidade, principalmente em TypeScript e Go, em infraestrutura na nuvem que tambem ajudo a manter.",
  ],
  skills: [
    {
      category: "Linguagens",
      items: ["TypeScript", "Go", "Python", "SQL"],
    },
    {
      category: "Backend",
      items: ["Node.js", "PostgreSQL", "Redis", "APIs REST e gRPC"],
    },
    {
      category: "Infraestrutura",
      items: ["Docker", "AWS", "GitHub Actions", "Terraform"],
    },
    {
      category: "Praticas",
      items: ["Testes e TDD", "Observabilidade", "Code review", "Design de sistemas"],
    },
  ],
  projects: [
    {
      title: "Servico de reconciliacao de extratos",
      description:
        "Servico que reconcilia registros do processador de pagamentos com os extratos internos todas as noites, sinalizando divergencias antes que virem chamados de suporte.",
      tech: ["TypeScript", "PostgreSQL", "Docker"],
      repoUrl: "https://github.com/penteado40/ledger-reconciler",
      image: "https://picsum.photos/seed/pente-project-ledger/1200/800",
    },
    {
      title: "CLI interna para ambientes de preview",
      description:
        "CLI que cria ambientes isolados de preview para cada pull request, usada pelo time para revisar mudancas antes do merge.",
      tech: ["Go", "AWS", "GitHub Actions"],
      repoUrl: "https://github.com/penteado40/preview-cli",
      image: "https://picsum.photos/seed/pente-project-cli/1200/800",
    },
    {
      title: "Painel de metricas de jobs em lote",
      description:
        "Painel simples que mostra tempo de execucao, taxa de falhas e tamanho da fila de jobs agendados, substituindo uma planilha em que ninguem confiava.",
      tech: ["TypeScript", "Next.js", "Redis"],
      repoUrl: "https://github.com/penteado40/batch-metrics",
      demoUrl: "https://batch-metrics.example.com",
      image: "https://picsum.photos/seed/pente-project-metrics/1200/800",
    },
  ],
};

export const devContent: Record<Language, DevContent> = { en, pt };
