import { site } from "@/content/site";
import Reveal from "./ui/Reveal";
import { ArrowUpRight } from "./ui/Icons";
import styles from "./TrustStats.module.css";

export default function TrustStats() {
  const { stats, trust } = site;

  return (
    <section className={`section ${styles.wrap}`}>
      <div className="container">
        <div className={styles.stats}>
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className={styles.stat}>
              <span className={styles.value}>{s.value}</span>
              <span className={styles.label}>{s.label}</span>
            </Reveal>
          ))}
        </div>

        <div className={styles.trust}>
          <p className={styles.trustTitle}>{trust.title}</p>
          <div className={styles.badges}>
            {trust.badges.map((b) => (
              <span key={b} className="pill">
                {b}
              </span>
            ))}
          </div>
          <a
            href={trust.linkHref}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {trust.linkLabel}
            <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}
