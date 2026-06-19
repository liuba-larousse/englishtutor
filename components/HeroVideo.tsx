"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "./ui/Icons";
import styles from "./Hero.module.css";

type HeroVideoProps = {
  image: string;
  alt: string;
  youtubeId: string;
  label: string;
  duration: string;
};

export default function HeroVideo({
  image,
  alt,
  youtubeId,
  label,
  duration,
}: HeroVideoProps) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className={styles.video}>
        <iframe
          className={styles.iframe}
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={label}
          allow="autoplay; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className={styles.video}
      onClick={() => setPlaying(true)}
      aria-label={`${label} (${duration})`}
    >
      <Image
        src={image}
        alt={alt}
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
        {label}
        <span className={styles.duration}>{duration}</span>
      </span>
    </button>
  );
}
