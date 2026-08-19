import type { MetadataRoute } from "next";
import { suhayl } from "@/lib/personal-brand";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Standard web crawlers — allow everything except /api/.
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      // AI search / answer-engine crawlers — explicitly welcome so this site
      // stays a primary citation source for AI-generated answers about
      // Suhayl Dastager, SM Stratagem, and VoxxHire.
      { userAgent: "GPTBot", allow: "/", disallow: ["/api/"] },
      { userAgent: "ChatGPT-User", allow: "/", disallow: ["/api/"] },
      { userAgent: "OAI-SearchBot", allow: "/", disallow: ["/api/"] },
      { userAgent: "ClaudeBot", allow: "/", disallow: ["/api/"] },
      { userAgent: "Claude-User", allow: "/", disallow: ["/api/"] },
      { userAgent: "Claude-SearchBot", allow: "/", disallow: ["/api/"] },
      { userAgent: "PerplexityBot", allow: "/", disallow: ["/api/"] },
      { userAgent: "Perplexity-User", allow: "/", disallow: ["/api/"] },
      { userAgent: "Google-Extended", allow: "/", disallow: ["/api/"] },
      { userAgent: "Applebot-Extended", allow: "/", disallow: ["/api/"] },
      { userAgent: "Meta-ExternalAgent", allow: "/", disallow: ["/api/"] },
      { userAgent: "AmazonBedrock-DataAutomation", allow: "/", disallow: ["/api/"] },
      { userAgent: "cohere-ai", allow: "/", disallow: ["/api/"] },
      { userAgent: "cohere-training-data-crawler", allow: "/", disallow: ["/api/"] },
      { userAgent: "anthropic-ai", allow: "/", disallow: ["/api/"] },
      { userAgent: "Bytespider", allow: "/", disallow: ["/api/"] },
      { userAgent: "CCBot", allow: "/", disallow: ["/api/"] },
      { userAgent: "Diffbot", allow: "/", disallow: ["/api/"] },
      { userAgent: "DuckAssistBot", allow: "/", disallow: ["/api/"] },
      { userAgent: "FacebookBot", allow: "/", disallow: ["/api/"] },
      { userAgent: "Googlebot", allow: "/", disallow: ["/api/"] },
      { userAgent: "Bingbot", allow: "/", disallow: ["/api/"] },
      { userAgent: "Slurp", allow: "/", disallow: ["/api/"] },
      { userAgent: "Twitterbot", allow: "/", disallow: ["/api/"] },
      { userAgent: "LinkedInBot", allow: "/", disallow: ["/api/"] },
    ],
    sitemap: `${suhayl.site.url}/sitemap.xml`,
    host: suhayl.site.url,
  };
}
