"use client";

// Hooks
import { usePathname } from "next/navigation";
import { useState } from "react";

// Components
import { ChevronDown } from "lucide-react";
import Link from "next/link";

// Utils
import { cn } from "@/lib/cn";
import { docsNavigation } from "@/lib/navigation";

// Types
import type { Route } from "next";

export function Sidebar() {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<string[]>(
    docsNavigation.map((section) => section.title)
  );

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <aside className="hide-scrollbar sticky top-24 hidden h-[calc(100vh-5rem)] shrink-0 overflow-y-scroll lg:block">
      <nav className="space-y-6">
        {docsNavigation.map((section) => (
          <div key={section.title} className="space-y-2">
            <button
              onClick={() => toggleSection(section.title)}
              className="flex w-full items-center justify-between text-sm font-semibold hover:text-primary transition-colors">
              {section.title}
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  openSections.includes(section.title) && "rotate-180"
                )}
              />
            </button>
            {openSections.includes(section.title) && (
              <ul className="space-y-1 border-l pl-4">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href as Route}
                      className={cn(
                        "block py-1.5 text-sm transition-colors hover:text-primary",
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
