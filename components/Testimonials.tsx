import { site } from "@/content/site";
import Reveal from "./ui/Reveal";
import { ArrowUpRight } from "./ui/Icons";
import styles from "./Testimonials.module.css";

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials() {
  const { testimonials } = site;

  return (
    <section className={`section ${styles.wrap}`} id="temoignages">
      <div className="container">
        <div className={styles.head}>
          <p className="eyebrow">Témoignages</p>
          <h2 className="h2">{testimonials.title}</h2>
          <p className="lead">{testimonials.subtitle}</p>
          <a
            href={testimonials.preplyHref}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.preply}
          >
            {testimonials.preplyLabel}
            <ArrowUpRight />
          </a>
        </div>

        <div className={styles.grid}>
          {testimonials.items.map((t, i) => (
            <Reveal
              as="article"
              key={t.name}
              delay={i * 90}
              className={styles.card}
            >
              <div className={styles.stars} aria-label="5 sur 5">
                {"★★★★★"}
              </div>
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.author}>
                <span className={styles.avatar}>{initials(t.name)}</span>
                <span>
                  <strong className={styles.name}>{t.name}</strong>
                  <span className={styles.role}>{t.role}</span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className={styles.summary}>
          <div className={styles.summaryRating}>
            <span className={styles.summaryNum}>{testimonials.summary.rating}</span>
            <span className={styles.summaryStars}>{testimonials.summary.stars}</span>
          </div>
          <div className={styles.summaryMeta}>
            <span>{testimonials.summary.reviews}</span>
            <span className={styles.dot}>·</span>
            <span>{testimonials.summary.lessons}</span>
          </div>
          <a
            href={testimonials.summary.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-primary ${styles.summaryCta}`}
          >
            {testimonials.summary.ctaLabel}
            <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}
