import { site } from "@/content/site";
import styles from "./Goals.module.css";

// Pre-set rotations/colors so the scatter is deterministic (no hydration drift).
const SCATTER = [
  { rot: -8, accent: "lime", top: "6%", left: "18%" },
  { rot: 5, accent: "blue", top: "20%", left: "44%" },
  { rot: -4, accent: "blue", top: "30%", left: "10%" },
  { rot: 7, accent: "lime", top: "40%", left: "40%" },
  { rot: -10, accent: "lime", top: "52%", left: "22%" },
  { rot: 6, accent: "blue", top: "62%", left: "48%" },
  { rot: -6, accent: "blue", top: "70%", left: "12%" },
  { rot: 4, accent: "lime", top: "82%", left: "34%" },
  { rot: -3, accent: "blue", top: "90%", left: "8%" },
] as const;

export default function Goals() {
  const { goals } = site;

  return (
    <section className={`section ${styles.wrap}`} id="objectifs">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.cloud} aria-hidden="true">
            {goals.tags.map((tag, i) => {
              const s = SCATTER[i % SCATTER.length];
              return (
                <span
                  key={tag}
                  className={`${styles.tag} ${
                    s.accent === "lime" ? "pill-lime" : "pill-blue"
                  }`}
                  style={{
                    top: s.top,
                    left: s.left,
                    transform: `rotate(${s.rot}deg)`,
                  }}
                >
                  {tag}
                </span>
              );
            })}
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
