import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The requested LIMM Works page has moved or is no longer available.",
  robots: { index: false, follow: true },
};

export default function NotFound() { return <section className="not-found"><div className="shell"><span className="eyebrow">Page not found</span><h1>This renovation page has moved or is no longer available.</h1><p>Return to the main service pages or send LIMM Works your project details.</p><div className="hero-actions"><Link className="button button-dark" href="/">Return home</Link><Link className="button button-gold" href="/contact">Start project review</Link></div></div></section>; }
