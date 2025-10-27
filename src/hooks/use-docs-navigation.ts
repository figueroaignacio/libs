import { docsNavigation } from "@/lib/navigation";

type NavItem = {
  title: string;
  href: string;
};

export function useDocsNavigation(currentPath: string) {
  const allItems: NavItem[] = docsNavigation.flatMap(
    (section) => section.items
  );
  const currentIndex = allItems.findIndex((item) => item.href === currentPath);

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: currentIndex > 0 ? allItems[currentIndex - 1] : null,
    next:
      currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : null,
  };
}
