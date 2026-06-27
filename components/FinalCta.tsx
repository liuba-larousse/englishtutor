import { site } from "@/content/site";
import Asterisk from "./ui/Asterisk";
import { ArrowUpRight } from "./ui/Icons";
import styles from "./FinalCta.module.css";

export default function FinalCta() {
  const { contact } = site;

  return (
    <section className={styles.wrap} id="contact">
      <div className="container">
        <div className={styles.card}>
          <Asterisk color="ink" size={70} className={styles.starA} />

          <h2 className={styles.title}>{contact.title}</h2>
          <p className={styles.subtitle}>{contact.subtitle}</p>

          <button
            type="button"
            data-cal-link="olaide-olaniyan-y6kinu/30min"
            data-cal-config='{"layout":"month_view"}'
            className={`btn btn-primary ${styles.book}`}
          >
            {contact.bookLabel}
          </button>

          <div className={styles.reassurances}>
            {contact.reassurances.map((r) => (
              <span key={r} className={styles.chip}>
                {r}
              </span>
            ))}
          </div>

          <a
            href={contact.preplyHref}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.preply}
          >
            {contact.preplyLabel}
            <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}
