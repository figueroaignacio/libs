import type { Route } from "next";

interface Navigation {
  label: string;
  href: Route;
}

interface DocsNavItem {
  title: string;
  description: string;
  href: string;
}

interface DocsNavigation {
  title: string;
  items: DocsNavItem[];
}

export const navigation: Navigation[] = [
  {
    label: "Documentation",
    href: "/docs" as Route,
  },
  {
    label: "Hooks",
    href: "/docs/hooks" as Route,
  },
  {
    label: "Utilities",
    href: "/docs/utilities" as Route,
  },
];

export const docsNavigation: DocsNavigation[] = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        description:
          "A collection of React hooks and TypeScript utilities for modern web development",
        href: "/docs/introduction",
      },
    ],
  },
  {
    title: "Hooks",
    items: [
      {
        title: "useLocalStorage",
        description:
          "Persist state in localStorage with automatic synchronization across tabs",
        href: "/docs/hooks/use-local-storage",
      },
      {
        title: "useDebounce",
        description:
          "Debounce values to optimize performance and reduce unnecessary updates",
        href: "/docs/hooks/use-debounce",
      },
      {
        title: "useMediaQuery",
        description: "Respond to CSS media queries in your React components",
        href: "/docs/hooks/use-media-query",
      },
    ],
  },
  {
    title: "Utilities",
    items: [
      {
        title: "cn",
        description:
          "Intelligently merge Tailwind CSS classes with conflict resolution",
        href: "/docs/utilities/cn",
      },
      {
        title: "formatDate",
        description: "Format dates consistently across your application",
        href: "/docs/utilities/format-date",
      },
    ],
  },
];
