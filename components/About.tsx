import Image from "next/image";
import { site } from "@/content/site";
import { Check } from "./ui/Icons";
import Asterisk from "./ui/Asterisk";
import styles from "./About.module.css";

export default function About() {
  const { about } = site;

  return (
    <section className={styles.wrap} id="a-propos">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.media}>
            <Asterisk color="lime" size={84} className={styles.star} />
            <Image
              src={about.image}
              alt={about.imageAlt}
              fill
              sizes="(max-width: 880px) 100vw, 460px"
              className={styles.photo}
            />
          </div>

          <div className={styles.copy}>
            <p className="eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>
              {about.eyebrow}
            </p>
            <p className={styles.message}>{about.message}</p>

            <div className={styles.identity}>
              <span className={styles.name}>{about.name}</span>
              <span className={styles.role}>{about.role}</span>
            </div>

            <p className={styles.bio}>{about.bio}</p>

            <ul className={styles.creds}>
              {about.credentials.map((c) => (
                <li key={c}>
                  <span className={styles.check}>
                    <Check />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
