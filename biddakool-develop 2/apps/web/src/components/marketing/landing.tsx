"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ShieldCheck,
  Languages,
  SlidersHorizontal,
  MapPin,
  Menu,
  X,
  Users,
  ClipboardCheck,
  GraduationCap,
  Wallet,
  CalendarDays,
  Bell,
  ChartNoAxesCombined,
  Settings,
  School,
  Building2,
  Landmark,
  Stethoscope,
  BookOpen,
  Presentation,
  LayoutDashboard,
  HeartHandshake,
  Monitor,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Brand } from "@/components/brand";
import { DemoDialog } from "@/components/demo-dialog";
import { ProductPreview } from "@/components/product-preview";
import { navigation, features, institutionTypes, portals, faqs } from "@/lib/marketing-content";

const featureIcons = {
  students: Users,
  attendance: ClipboardCheck,
  exams: GraduationCap,
  fees: Wallet,
  schedule: CalendarDays,
  notices: Bell,
  reports: ChartNoAxesCombined,
  settings: Settings,
};
const institutionIcons = [School, Building2, Landmark, Stethoscope, BookOpen, Presentation];
const portalIcons = {
  admin: LayoutDashboard,
  teacher: Presentation,
  student: GraduationCap,
  guardian: HeartHandshake,
};

export function Landing({ year }: { year: number }) {
  const [demoOpen, setDemoOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePortal, setActivePortal] = useState(0);
  const portal = portals[activePortal] ?? portals[0];
  const PortalIcon = portalIcons[portal.icon];
  return (
    <div className="marketing-site">
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" aria-label="Biddakool home">
            <Brand />
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map(([label, id]) => (
              <a href={`#${id}`} key={id}>
                {label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <Button variant="ghost" asChild className="signin-link">
              <Link href="/login">
                Sign in <ArrowUpRight />
              </Link>
            </Button>
            <Button variant="hero" className="header-demo" onClick={() => setDemoOpen(true)}>
              Request a demo <ArrowRight />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="mobile-menu-toggle"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navigation.map(([label, id]) => (
              <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>
                {label}
                <ArrowUpRight size={16} />
              </a>
            ))}
            <Link href="/login">
              Sign in <ArrowUpRight size={16} />
            </Link>
            <Button
              onClick={() => {
                setMenuOpen(false);
                setDemoOpen(true);
              }}
            >
              Request a demo <ArrowRight />
            </Button>
          </nav>
        )}
      </header>
      <main>
        <section className="hero">
          <div className="container hero-inner">
            <span className="hero-eyebrow">
              <span className="bangladesh-dot" /> BUILT FOR BANGLADESH. BUILT FOR YOUR INSTITUTION.
            </span>
            <h1>
              Empowering{" "}
              <span className="hero-highlight">
                Education.
                <svg viewBox="0 0 480 20" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M4 14 Q220 -2 476 10" />
                </svg>
              </span>
            </h1>
            <p className="hero-description">
              Less administration. More possibilities.
              <br />
              One connected platform to run your institution — and bring
              <br className="desktop-break" /> your staff, students, and guardians closer together.
            </p>
            <div className="hero-buttons">
              <Button variant="hero" size="lg" onClick={() => setDemoOpen(true)}>
                Request a demo <ArrowRight />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#features">
                  Explore features <ArrowUpRight />
                </a>
              </Button>
            </div>
            <div className="hero-reassurance">
              <span>
                <Check size={14} /> Designed for your institution
              </span>
              <span>
                <Check size={14} /> Bangla & English
              </span>
              <span>
                <Check size={14} /> Secure by design
              </span>
            </div>
            <div className="product-stage">
              <ProductPreview />
            </div>
          </div>
        </section>
        <section id="institutions" className="institution-section">
          <div className="container">
            <div className="institution-heading">
              <span className="eyebrow">ONE PLATFORM. EVERY KIND OF INSTITUTION.</span>
              <p>Different institutions. The same commitment to education.</p>
            </div>
            <div className="institution-grid">
              {institutionTypes.map((name, i) => {
                const Icon = institutionIcons[i] ?? School;
                return (
                  <div className="institution-item" key={name}>
                    <Icon strokeWidth={1.5} />
                    <span>{name}</span>
                  </div>
                );
              })}
            </div>
            <p className="institution-note">
              Configured for the way you work. Not a different product for every institution.
            </p>
          </div>
        </section>
        <section id="features" className="section features-section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">YOUR EVERYDAY, SIMPLIFIED</span>
              <h2>
                All the moving parts.
                <br />
                <span className="text-muted-foreground">One connected platform.</span>
              </h2>
              <p>
                From a student’s first day to their final results,
                <br className="desktop-break" /> Biddakool keeps everything working together.
              </p>
            </div>
            <div className="features-grid">
              {features.map((f) => {
                const Icon = featureIcons[f.icon];
                return (
                  <article className="feature-item" key={f.title}>
                    <span className={`icon-tile tone-${f.tone}`}>
                      <Icon strokeWidth={1.7} />
                    </span>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                    <ArrowUpRight className="feature-arrow" size={18} />
                  </article>
                );
              })}
            </div>
          </div>
        </section>
        <section id="portals" className="section portals-section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">CONNECTED PEOPLE. BETTER EDUCATION.</span>
              <h2>A place for everyone.</h2>
              <p>The right information. The right access. A simpler day for every role.</p>
            </div>
            <div className="portal-tabs" role="tablist" aria-label="Role portals">
              {portals.map((p, i) => {
                const Icon = portalIcons[p.icon];
                return (
                  <Button
                    key={p.title}
                    variant="ghost"
                    role="tab"
                    id={`portal-tab-${i}`}
                    aria-selected={activePortal === i}
                    aria-controls="portal-panel"
                    className={`portal-tab ${i === activePortal ? "active" : ""}`}
                    onClick={() => setActivePortal(i)}
                    onKeyDown={(event) => {
                      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
                        event.preventDefault();
                        const next = (i + (event.key === "ArrowRight" ? 1 : 3)) % 4;
                        setActivePortal(next);
                        document.getElementById(`portal-tab-${next}`)?.focus();
                      }
                    }}
                  >
                    <Icon size={18} />
                    {p.title}
                  </Button>
                );
              })}
            </div>
            <div
              id="portal-panel"
              className="portal-panel"
              role="tabpanel"
              aria-labelledby={`portal-tab-${activePortal}`}
            >
              <div className="portal-copy">
                <span className="portal-label">
                  <PortalIcon size={16} />
                  {portal.title.toUpperCase()} PORTAL
                </span>
                <h3>{portal.label}</h3>
                <p>{portal.text}</p>
                <ul>
                  {portal.tasks.map((task) => (
                    <li key={task}>
                      <span>
                        <Check size={13} />
                      </span>
                      {task}
                    </li>
                  ))}
                </ul>
                <Button variant="link" onClick={() => setDemoOpen(true)}>
                  Explore it in a demo <ArrowRight />
                </Button>
              </div>
              <div className="portal-visual">
                <div className="portal-visual-heading">
                  <span className="icon-tile tone-blue">
                    <PortalIcon />
                  </span>
                  <span>
                    <strong>{portal.title} workspace</strong>
                    <small>Everything you need, in one place.</small>
                  </span>
                  <span className="sample-label">SAMPLE</span>
                </div>
                {portal.tasks.map((task, i) => (
                  <div className="portal-task" key={task}>
                    <span className={`icon-tile tone-${["blue", "green", "gold"][i]}`}>
                      {i === 0 ? <Users /> : i === 1 ? <ClipboardCheck /> : <CalendarDays />}
                    </span>
                    <span>
                      <strong>{task}</strong>
                      <small>
                        {["Your latest overview", "Ready when you are", "Stay up to date"][i]}
                      </small>
                    </span>
                    <ArrowUpRight size={18} />
                  </div>
                ))}
                <div className="portal-visual-footer">
                  <ShieldCheck size={15} /> Access tailored to your role
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section why-section">
          <div className="container">
            <div className="why-heading">
              <div>
                <span className="eyebrow">LOCAL ROOTS. THOUGHTFUL TECHNOLOGY.</span>
                <h2>
                  Not just built for education.
                  <br />
                  Built for <span className="text-primary">your education.</span>
                </h2>
              </div>
              <p>
                A platform that understands the way
                <br className="desktop-break" /> institutions in Bangladesh really work.
              </p>
            </div>
            <div className="why-grid">
              {[
                {
                  icon: ShieldCheck,
                  title: "Your data stays yours",
                  text: "Isolated institution data and role-based access keep information where it belongs.",
                },
                {
                  icon: Languages,
                  title: "বাংলা or English. Your choice.",
                  text: "A bilingual experience that feels familiar to your staff, students, and guardians.",
                },
                {
                  icon: SlidersHorizontal,
                  title: "Your institution, your setup",
                  text: "Configure academic years, terms, programs, and workflows around your needs.",
                },
                {
                  icon: MapPin,
                  title: "Bangladesh comes first",
                  text: "Local academic structures, fee workflows, and cash collection. Not an afterthought.",
                },
              ].map((item) => (
                <article key={item.title}>
                  <item.icon strokeWidth={1.6} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="how-it-works" className="section how-section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">A SIMPLE START</span>
              <h2>Your next chapter, in three steps.</h2>
              <p>We’ll help you get from “what if” to up and running.</p>
            </div>
            <div className="steps-grid">
              {[
                {
                  icon: Monitor,
                  title: "Let’s meet your institution",
                  text: "Request a demo. We’ll show you the platform and talk about what your institution needs.",
                },
                {
                  icon: SlidersHorizontal,
                  title: "We make it yours",
                  text: "We configure your academic years, programs, and users — with your team, not without them.",
                },
                {
                  icon: Sparkles,
                  title: "Bring everyone together",
                  text: "Your staff, students, and guardians start using their portals. A more connected day begins.",
                },
              ].map((step, i) => (
                <article className="step" key={step.title}>
                  <div className="step-top">
                    <span className="step-number">0{i + 1}</span>
                    <step.icon strokeWidth={1.5} />
                    {i < 2 && <ArrowRight className="step-arrow" />}
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="faq" className="section faq-section">
          <div className="container faq-layout">
            <div>
              <span className="eyebrow">A FEW THINGS YOU MIGHT BE WONDERING</span>
              <h2>
                Good questions.
                <br />
                Clear answers.
              </h2>
              <p>Want to talk through something else?</p>
              <Button variant="link" onClick={() => setDemoOpen(true)}>
                Let’s have a conversation <ArrowRight />
              </Button>
            </div>
            <div className="faq-list">
              {faqs.map(([q, a]) => (
                <details key={q}>
                  <summary>
                    {q}
                    <span className="faq-plus">+</span>
                  </summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section className="final-cta">
          <div className="container">
            <span className="eyebrow">MORE TIME FOR WHAT MATTERS</span>
            <h2>
              Your institution’s next chapter
              <br />
              starts with a conversation.
            </h2>
            <p>Let’s explore what Biddakool can do for you.</p>
            <Button variant="light" size="lg" onClick={() => setDemoOpen(true)}>
              Request a demo <ArrowRight />
            </Button>
            <span className="cta-note">No commitment. Just possibilities.</span>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <div>
              <Link href="/" aria-label="Biddakool home">
                <Brand />
              </Link>
              <p>
                One platform. A more connected institution.
                <br />
                Empowering education, across Bangladesh.
              </p>
              <span className="footer-location">
                <MapPin size={14} /> Made for Bangladesh
              </span>
            </div>
            <div>
              <h3>Explore</h3>
              {navigation.slice(0, 3).map(([label, id]) => (
                <a key={id} href={`#${id}`}>
                  {label}
                </a>
              ))}
            </div>
            <div>
              <h3>Get started</h3>
              <a href="#how-it-works">How it works</a>
              <a href="#faq">FAQ</a>
              <Link href="/login">
                Sign in <ArrowUpRight size={13} />
              </Link>
            </div>
            <div>
              <h3>Let’s connect</h3>
              <Button variant="link" onClick={() => setDemoOpen(true)}>
                Request a demo <ArrowUpRight />
              </Button>
              <a href="mailto:contact@biddakool.example">contact@biddakool.example</a>
              <span className="contact-placeholder">Placeholder contact address</span>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {year} Biddakool. All rights reserved.</span>
            <span>
              <ShieldCheck size={14} /> Thoughtfully built. Secure by design.
            </span>
          </div>
        </div>
      </footer>
      <DemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
}
