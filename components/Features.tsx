import { site } from "@/content/site";
import Reveal from "./ui/Reveal";
import styles from "./Features.module.css";

export default function Features() {
  const { audiences, audiencesIntro } = site;

  return (
    <section className={`section ${styles.wrap}`} id="pour-qui">
      <div className="container">
        <div className={styles.head}>
          <p className="eyebrow">{audiencesIntro.eyebrow}</p>
          <h2 className="h2">{audiencesIntro.title}</h2>
          <p className="lead">{audiencesIntro.text}</p>
        </div>

        <div className={styles.grid}>
          {audiences.map((a, i) => (
            <Reveal
              as="article"
              key={a.category}
              delay={i * 90}
              className={`${styles.card} ${styles[a.accent]}`}
            >
              <span className={styles.icon} aria-hidden="true">
                {a.icon}
              </span>
              <p className={styles.category}>{a.category}</p>
              <h3 className={styles.title}>{a.title}</h3>
              <p className={styles.text}>{a.text}</p>
              <div className={styles.tags}>
                {a.tags.map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
