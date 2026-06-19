"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { ArrowUpRight } from "./ui/Icons";
import styles from "./Nav.module.css";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <a href="#top" className={styles.logo} aria-label={site.brand.name}>
          {site.brand.name}
          <span className={styles.logoDot} />
        </a>

        <nav className={styles.navDesktop} aria-label="Navigation principale">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <button className={styles.lang} type="button" aria-label="Langue : français">
            FR
          </button>
          <a href={site.cta.href} className={`btn btn-primary ${styles.cta}`}>
            {site.cta.short}
            <ArrowUpRight />
          </a>
          <button
            className={styles.burger}
            type="button"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span data-open={open} />
            <span data-open={open} />
            <span data-open={open} />
          </button>
        </div>
      </div>

      {open && (
        <div className={styles.mobileMenu}>
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.mobileLink}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.cta.href}
            className={`btn btn-lime ${styles.mobileCta}`}
            onClick={() => setOpen(false)}
          >
            {site.cta.label}
            <ArrowUpRight />
          </a>
        </div>
      )}
    </header>
  );
}
