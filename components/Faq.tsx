"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { ChevronDown } from "./ui/Icons";
import styles from "./Faq.module.css";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className={`section ${styles.wrap}`} id="faq">
      <div className={`container ${styles.inner}`}>
        <div className={styles.head}>
          <p className="eyebrow">FAQ</p>
          <h2 className="h2">{site.faq.title}</h2>
        </div>

        <ul className={styles.list}>
          {site.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className={styles.item}>
                <button
                  type="button"
                  className={styles.question}
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}>
                    <ChevronDown />
                  </span>
                </button>
                <div
                  className={styles.answer}
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className={styles.answerInner}>
                    <p>{item.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
