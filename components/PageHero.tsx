import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/schema/breadcrumb";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
};

export function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="bg-primary py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-white/60">
              {breadcrumbs.map((item, i) => (
                <li key={item.path} className="flex items-center gap-1">
                  {i > 0 && <span aria-hidden>/</span>}
                  {i === breadcrumbs.length - 1 ? (
                    <span className="text-white/80">{item.name}</span>
                  ) : (
                    <Link href={item.path} className="hover:text-white">
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="max-w-4xl text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-3xl text-lg text-white/80 md:text-xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
