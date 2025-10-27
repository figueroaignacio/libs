export const dynamic = "force-dynamic";

// Content
import { docs } from "@/content";

// Utils
import { getDocBySlug } from "@/lib/get-docs";
import { notFound } from "next/navigation";

// Components
import { MDXContent } from "@/components/mdx/mdx-content";
import { Toc } from "@/components/toc";

// Types
import type { Metadata } from "next";

type DocPageProps = {
  slug: string[];
};

async function getDocFromParams({ params }: { params: Promise<DocPageProps> }) {
  const parameters = await params;
  const slug = parameters.slug?.join("/") || "";

  return getDocBySlug(slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<DocPageProps>;
}): Promise<Metadata> {
  const doc = await getDocFromParams({ params });

  if (!doc) {
    return {};
  }

  return {
    title: doc.title,
    description: doc.description,
  };
}

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  if (!Array.isArray(docs)) {
    console.error("docs is not an array!", typeof docs);
    return [];
  }

  return docs
    .filter((doc) => doc.slugAsParams && doc.published)
    .map((doc) => ({
      slug: doc.slugAsParams.split("/").filter(Boolean),
    }));
}

export default async function DocPage({
  params,
}: {
  params: Promise<DocPageProps>;
}) {
  const doc = await getDocFromParams({ params });

  if (!doc || !doc.published) {
    notFound();
  }

  const tocContent = Array.isArray(doc.toc?.content) ? doc.toc.content : [];
  const currentPath = `/docs${doc.slugAsParams ? `/${doc.slugAsParams}` : ""}`;

  return (
    <>
      <article className="flex flex-col lg:px-36 mt-6 min-w-0 w-full">
        <div className="lg:hidden">{/* <MobileToc toc={tocContent} /> */}</div>

        <div className="border-border mb-5 flex items-start justify-between border-b pb-5">
          <div className="space-y-3">
            <h1 className="text-2xl font-bold">{doc.title}</h1>
            <p className="text-muted-foreground max-w-lg">{doc.description}</p>
          </div>
          {/* <DocsNavigationButtons currentPath={currentPath} /> */}
        </div>
        <div className="flex-1 min-w-0">
          {doc.body ? <MDXContent code={doc.body} /> : <div>Error</div>}
        </div>
        {/* <div>
          <DocsPagination currentPath={currentPath} />
        </div> */}
      </article>

      {/* Desktop TOC (tercera columna) */}
      <div className="hidden lg:block">
        <Toc toc={tocContent} />
      </div>
    </>
  );
}
