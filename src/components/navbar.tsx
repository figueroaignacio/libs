// Componetns
import Link from "next/link";
import { Logo } from "./logo";

// Types
import { navigation } from "@/lib/navigation";
import { HeaderActions } from "./header-actions";

export function Navbar() {
  return (
    <header className="sticky hidden lg:block top-0 z-50 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
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
        <HeaderActions />
      </div>
    </header>
  );
}
