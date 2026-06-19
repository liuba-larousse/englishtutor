import { site } from "@/content/site";
import { Check, ArrowUpRight } from "./ui/Icons";
import Asterisk from "./ui/Asterisk";
import styles from "./Offers.module.css";

export default function Offers() {
  const { offer, cta } = site;

  return (
    <section className={`section ${styles.wrap}`} id="tarifs">
      <div className="container">
        <div className={styles.head}>
          <p className="eyebrow">{offer.eyebrow}</p>
          <h2 className="h2">{offer.title}</h2>
          <p className="lead">{offer.subtitle}</p>
        </div>

        <div className={styles.card}>
          <Asterisk color="ink" size={64} className={styles.star} />

          <div className={styles.left}>
            <span className={styles.badge}>🎁 {offer.badge}</span>
            <h3 className={styles.name}>{offer.name}</h3>
            <p className={styles.tagline}>{offer.tagline}</p>
            <ul className={styles.features}>
              {offer.features.map((f) => (
                <li key={f}>
                  <Check />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.right}>
            <div className={styles.priceBlock}>
              <span className={styles.price}>{offer.price}</span>
              <span className={styles.unit}>{offer.unit}</span>
            </div>
            <a href={cta.href} className={`btn btn-primary ${styles.cta}`}>
              {cta.label}
              <ArrowUpRight />
            </a>
            <div className={styles.reassurances}>
              {offer.reassurances.map((r) => (
                <span key={r}>{r}</span>
              ))}
            </div>
          </div>
        </div>

        <p className={styles.note}>{offer.note}</p>
      </div>
    </section>
  );
}
