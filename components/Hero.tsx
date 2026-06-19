import Image from "next/image";
import { site } from "@/content/site";
import { ArrowUpRight, Play } from "./ui/Icons";
import Asterisk from "./ui/Asterisk";
import styles from "./Hero.module.css";

export default function Hero() {
  const { hero, cta, ctaSecondary } = site;

  return (
    <section className={styles.hero} id="top">
      <div className={`container ${styles.grid}`}>
        {/* Left — lime panel */}
        <div className={styles.left}>
          <Asterisk color="ink" size={46} className={styles.leftStar} />
          <p className={styles.eyebrow}>{hero.eyebrow}</p>
          <h1 className={styles.title}>
            {hero.titleLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className={styles.subtitle}>{hero.subtitle}</p>

          <div className={styles.actions}>
            <a href={cta.href} className={`btn btn-primary ${styles.actionBtn}`}>
              {cta.label}
              <ArrowUpRight />
            </a>
            <a href={ctaSecondary.href} className={`btn btn-ghost ${styles.actionBtn}`}>
              {ctaSecondary.label}
            </a>
          </div>

          <div className={styles.heroCard}>
            <div className={styles.heroCardTags}>
              {hero.card.tags.map((t) => (
                <span key={t} className="pill">
                  {t}
                </span>
              ))}
            </div>
            <h3 className={styles.heroCardTitle}>{hero.card.title}</h3>
            <p className={styles.heroCardText}>{hero.card.text}</p>
          </div>
        </div>

        {/* Right — video placeholder */}
        <div className={styles.right}>
          <a
            href={hero.video.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.video}
            aria-label={`${hero.video.label} (${hero.video.duration})`}
          >
            <Image
              src={hero.image}
              alt={hero.imageAlt}
              fill
              priority
              sizes="(max-width: 980px) 100vw, 600px"
              className={styles.poster}
            />
            <span className={styles.scrim} />
            <span className={styles.playBtn}>
              <Play />
            </span>
            <span className={styles.videoLabel}>
              {hero.video.label}
              <span className={styles.duration}>{hero.video.duration}</span>
            </span>
          </a>
          <p className={styles.videoCaption}>{hero.video.caption}</p>
        </div>
      </div>
    </section>
  );
}
