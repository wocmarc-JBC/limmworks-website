/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { navLinks, site, whatsappHref } from "../lib/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="LIMM Works home">
          <img src="/brand/limm-mark-gold.svg" alt="" width="37" height="41" />
          <span className="brand-word"><strong><span className="brand-name-limm">LIMM</span> <span className="brand-name-works">Works</span></strong><small>Pte Ltd</small></span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>

        <a className="button button-dark header-cta" href={whatsappHref("Header")}>WhatsApp</a>

        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {navLinks.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            <Link href="/contact">Start project review</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div className="footer-brand">
          <div className="footer-logo" aria-label="LIMM Works Pte Ltd">
            <img src="/brand/limm-mark-gold.svg" alt="" width="42" height="46" />
            <span><strong>LIMM <em>Works</em></strong><small>Pte Ltd</small></span>
          </div>
          <h2>Planned properly.<br />Built with care.</h2>
          <p>Residential, landed and commercial renovation with practical planning, coordination and site execution in Singapore.</p>
        </div>
        <div>
          <h3>Services</h3>
          <Link href="/landed-renovation">Landed renovation</Link>
          <Link href="/landed-aa-works">Landed A&A works</Link>
          <Link href="/condo-renovation">Condo renovation</Link>
          <Link href="/hdb-renovation">HDB renovation</Link>
          <Link href="/kitchen-renovation">Kitchen renovation</Link>
          <Link href="/bathroom-renovation">Bathroom renovation</Link>
          <Link href="/carpentry-storage">Carpentry & storage</Link>
          <Link href="/commercial-renovation">Commercial renovation</Link>
        </div>
        <div>
          <h3>Explore</h3>
          <Link href="/residential">Residential services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/owners-notes">Owner&apos;s Notes</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
        </div>
        <div>
          <h3>Start a review</h3>
          <a href={whatsappHref("Footer")}>{site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <p>Send your floor plan, site photos, rough scope and preferred timeline.</p>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 LIMM Works Pte Ltd</span>
        <span>Singapore</span>
      </div>
    </footer>
  );
}

export function MobileWhatsApp() {
  return <a className="mobile-whatsapp" href={whatsappHref("Mobile sticky CTA")}>WhatsApp your floor plan <span aria-hidden="true">↗</span></a>;
}

export function SectionHeading({ eyebrow, title, text, action }: { eyebrow: string; title: string; text?: string; action?: { label: string; href: string } }) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      <div>
        {text && <p>{text}</p>}
        {action && <Link className="text-link" href={action.href}>{action.label} <span aria-hidden="true">↗</span></Link>}
      </div>
    </div>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
