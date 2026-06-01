import type { ReactNode } from "react";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { CTASection } from "./CTASection";

type PageLayoutProps = {
  children: ReactNode;
  showCTA?: boolean;
};

export function PageLayout({ children, showCTA = true }: PageLayoutProps) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      {showCTA && <CTASection />}
      <Footer />
    </>
  );
}
