"use client";

// Componetns
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";

// Types
import { navigation } from "@/lib/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="flex h-16 items-center justify-between">
        <Logo />
        <nav className="flex items-center gap-6">
          {navigation.map((nav) => (
            <Link
              href={nav.href}
              key={nav.href}
              className="text-sm font-medium hover:text-primary transition-colors">
              {nav.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
