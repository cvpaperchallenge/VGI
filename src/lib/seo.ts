import type { MetaDescriptor } from "react-router";

const SITE_URL = "https://iccv2025-limit-workshop.limitlab.xyz";
const DEFAULT_IMAGE = `${SITE_URL}/limit-logo-white-wide.png`;
const DEFAULT_IMAGE_ALT =
  "LIMIT Workshop at ICCV 2025 wordmark on a dark gradient background";
const SITE_NAME = "LIMIT Workshop @ ICCV 2025";
const DEFAULT_DESCRIPTION =
  "Official site for the ICCV 2025 LIMIT Workshop on representation learning with very limited data, labels, modalities, and compute.";
const DEFAULT_KEYWORDS = [
  "LIMIT Workshop",
  "ICCV 2025",
  "representation learning",
  "resource-constrained AI",
  "LIMIT Lab",
  "efficient machine learning",
];

type SeoConfig = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  type?: string;
  keywords?: string[];
};

const normalizePath = (path?: string) => {
  if (!path || path === "/") {
    return "";
  }

  return path.startsWith("/") ? path : `/${path}`;
};

export function buildMeta(config: SeoConfig = {}): MetaDescriptor[] {
  const {
    title = SITE_NAME,
    description = DEFAULT_DESCRIPTION,
    path,
    image = DEFAULT_IMAGE,
    imageAlt = DEFAULT_IMAGE_ALT,
    type = "website",
    keywords = [],
  } = config;

  const canonicalPath = normalizePath(path);
  const url = `${SITE_URL}${canonicalPath}`;
  const keywordSet = new Set([
    ...DEFAULT_KEYWORDS,
    ...keywords.filter((keyword) => keyword.trim().length > 0),
  ]);
  const keywordContent = Array.from(keywordSet).join(", ");

  const descriptors: MetaDescriptor[] = [
    { title },
    { name: "description", content: description },
    ...(keywordContent ? [{ name: "keywords", content: keywordContent }] : []),
    { property: "og:type", content: type },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:image:alt", content: imageAlt },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
    { name: "twitter:image:alt", content: imageAlt },
    { tagName: "link", rel: "canonical", href: url },
  ];

  return descriptors;
}

export const seoDefaults = {
  SITE_NAME,
  SITE_URL,
  DEFAULT_DESCRIPTION,
  DEFAULT_IMAGE,
  DEFAULT_IMAGE_ALT,
  DEFAULT_KEYWORDS,
};
