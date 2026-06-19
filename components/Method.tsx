import Image from "next/image";
import { site } from "@/content/site";
import Asterisk from "./ui/Asterisk";
import Reveal from "./ui/Reveal";
import styles from "./Method.module.css";

export default function Method() {
  const { method } = site;

  return (
    <section className={`section ${styles.wrap}`} id="methode">
      <div className="container">
        <div className={styles.head}>
          <p className="eyebrow">La méthode</p>
          <h2 className="h2">{method.title}</h2>
          <p className="lead">{method.subtitle}</p>
        </div>

        <div className={styles.grid}>
          <ol className={styles.steps}>
            {method.steps.map((step, i) => (
              <Reveal as="li" key={step.n} delay={i * 90} className={styles.step}>
                <span className={styles.num}>{step.n}</span>
                <div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepText}>{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <div className={styles.media}>
            <Image
              src={method.image}
              alt={method.imageAlt}
              fill
              sizes="(max-width: 880px) 100vw, 520px"
              className={styles.photo}
            />
          </div>
        </div>

        <div className={styles.banner}>
          <Asterisk color="lime" size={88} className={styles.bannerStarA} />
          <Asterisk color="lime" size={64} className={styles.bannerStarB} />
          <p>{method.banner}</p>
        </div>
      </div>
    </section>
  );
}
