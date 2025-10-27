export interface Doc {
  title: string;
  description: string;
  slug: string;
  category: "getting-started" | "hooks" | "utilities";
  order: number;
}

export const docs: Doc[] = [
  {
    title: "Introduction",
    description:
      "A collection of React hooks and TypeScript utilities for modern web development",
    slug: "",
    category: "getting-started",
    order: 1,
  },
  {
    title: "useLocalStorage",
    description:
      "Persist state in localStorage with automatic synchronization across tabs",
    slug: "use-local-storage",
    category: "hooks",
    order: 1,
  },
  {
    title: "useDebounce",
    description:
      "Debounce values to optimize performance and reduce unnecessary updates",
    slug: "use-debounce",
    category: "hooks",
    order: 2,
  },
  {
    title: "useMediaQuery",
    description: "Respond to CSS media queries in your React components",
    slug: "use-media-query",
    category: "hooks",
    order: 3,
  },
  {
    title: "cn",
    description:
      "Intelligently merge Tailwind CSS classes with conflict resolution",
    slug: "cn",
    category: "utilities",
    order: 1,
  },
  {
    title: "formatDate",
    description: "Format dates consistently across your application",
    slug: "format-date",
    category: "utilities",
    order: 2,
  },
];
