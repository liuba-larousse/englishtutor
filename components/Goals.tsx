import { site } from "@/content/site";
import styles from "./Goals.module.css";

// Deterministic tilt/colour per tag (index-based — no hydration drift).
const ROTATIONS = [-4, 3, -2, 4, -3, 2, -3, 4, -2, 3, -4, 2];

export default function Goals() {
  const { goals } = site;

  return (
    <section className={`section ${styles.wrap}`} id="objectifs">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.cloud}>
            {goals.tags.map((tag, i) => (
              <span
                key={tag}
                className={`${styles.tag} ${i % 2 === 0 ? "pill-lime" : "pill-blue"}`}
                style={{ transform: `rotate(${ROTATIONS[i % ROTATIONS.length]}deg)` }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className={styles.copy}>
            <h2 className={`h2 ${styles.title}`}>{goals.title}</h2>
            <p className="lead">{goals.text}</p>
            <p className={styles.text2}>{goals.text2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
