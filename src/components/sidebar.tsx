"use client";

import { cn } from "@/lib/cn";
import { docs } from "@/lib/content";
import { ChevronDown } from "lucide-react";
import { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  {
    title: "Getting Started",
    items: docs
      .filter((doc) => doc.category === "getting-started")
      .sort((a, b) => (a.order || 0) - (b.order || 0))
      .map((doc) => ({
        title: doc.title,
        href: `/docs/${doc.slug}`,
      })),
  },
  {
    title: "React Hooks",
    items: docs
      .filter((doc) => doc.category === "hooks")
      .sort((a, b) => (a.order || 0) - (b.order || 0))
      .map((doc) => ({
        title: doc.title,
        href: `/docs/${doc.slug}`,
      })),
  },
  {
    title: "TypeScript Utilities",
    items: docs
      .filter((doc) => doc.category === "utilities")
      .sort((a, b) => (a.order || 0) - (b.order || 0))
      .map((doc) => ({
        title: doc.title,
        href: `/docs/${doc.slug}`,
      })),
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<string[]>([
    "Getting Started",
    "React Hooks",
    "TypeScript Utilities",
  ]);

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <aside className="hide-scrollbar sticky top-24 hidden h-[calc(100vh-5rem)] shrink-0 overflow-y-scroll lg:block">
      <nav className="space-y-6">
        {navigation.map((section) => (
          <div key={section.title} className="space-y-2">
            <button
              onClick={() => toggleSection(section.title)}
              className="flex items-center justify-between w-full text-sm font-semibold hover:text-primary transition-colors">
              {section.title}
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform",
                  openSections.includes(section.title) && "rotate-180"
                )}
              />
            </button>
            {openSections.includes(section.title) && (
              <ul className="space-y-1 pl-4 border-l">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href as Route}
                      className={cn(
                        "block py-1.5 text-sm hover:text-primary transition-colors",
                        pathname === item.href
                          ? "text-primary font-medium"
                          : "text-muted-foreground"
                      )}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
