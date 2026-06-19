import { site } from "@/content/site";
import styles from "./Logo.module.css";

type LogoProps = { variant?: "dark" | "light" };

/** Brand lockup — Concept A: "ANGLAIS AVEC" eyebrow + "Olaide" + lime dot. */
export default function Logo({ variant = "dark" }: LogoProps) {
  return (
    <span className={`${styles.logo} ${variant === "light" ? styles.light : ""}`}>
      <span className={styles.eyebrow}>{site.brand.eyebrow}</span>
      <span className={styles.name}>
        {site.brand.name}
        <span className={styles.dot} />
      </span>
    </span>
  );
}
