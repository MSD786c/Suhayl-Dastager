import type { MetadataRoute } from "next";
import { suhayl } from "@/lib/personal-brand";
import { projects, ugcCaseStudies, ugcReels } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = suhayl.site.url;
  const now = new Date();

  // Static routes with weighted priorities. Home page sits at 1.0.
  // Identity-defining pages (founder, ugc, work) are 0.9.
  // Supporting pages (about, contact, resume, archive) are 0.7.
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${base}/founder`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/ugc`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/work`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${base}/resume`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/archive`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // Project case studies - these are the primary deep links for AEO/GEO
  // citation in "what did Suhayl build" answers. Image fields make the
  // entries eligible for Google image sitemap behaviour.
  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
    images: p.image ? [`${base}${p.image}`] : undefined,
  }));

  // UGC case studies - these carry brand-name keyword weight and live
  // showreel data, so they get a slightly higher weight than project archive.
  const ugcRoutes: MetadataRoute.Sitemap = ugcCaseStudies.map((c) => ({
    url: `${base}/ugc/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [...staticRoutes, ...projectRoutes, ...ugcRoutes];
}
