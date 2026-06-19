import { site } from "@/content/site";
import { ArrowUpRight } from "./ui/Icons";
import styles from "./Footer.module.css";

export default function Footer() {
  const { footer, brand, nav, cta } = site;
  const year = 2026;

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <span className={styles.logo}>{brand.name}</span>
            <p className={styles.tagline}>{footer.tagline}</p>
            <a href={cta.href} className={`btn btn-lime ${styles.cta}`}>
              {cta.label}
              <ArrowUpRight />
            </a>
          </div>

          <nav className={styles.linksCol} aria-label="Navigation pied de page">
            <h4>Navigation</h4>
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className={styles.linksCol}>
            <h4>Liens utiles</h4>
            {footer.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            © {year} {brand.name}. Tous droits réservés.
          </span>
          <div className={styles.legal}>
            {footer.legalLinks.map((l) => (
              <a key={l.label} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
