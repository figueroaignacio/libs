// Components
import { ArrowRight, Code2 } from "lucide-react";
import Link from "next/link";
import { Features } from "../components/features";
import { Hero } from "../components/hero";
import { Button } from "../components/ui/button";

// Types
import type { Route } from "next";

export default function HomePage() {
  const actions = [
    {
      label: "Get Started",
      icon: <ArrowRight />,
      href: "/docs" as Route,
      variant: "secondary" as const,
    },
    {
      label: "View Examples",
      icon: <Code2 />,
      href: "/hooks/use-mounted" as Route,
      variant: "outline" as const,
    },
  ];

  return (
    <div className="min-h-svh bg-grid-pattern flex justify-center items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Hero />
          <div className="flex flex-wrap gap-4 justify-center">
            {actions.map((action) => (
              <Link href={action.href} key={action.href}>
                <Button variant={action.variant} size="sm" className="gap-2">
                  {action.label}
                  {action.icon}
                </Button>
              </Link>
            ))}
          </div>
          <Features />
        </div>
      </div>
    </div>
  );
}
