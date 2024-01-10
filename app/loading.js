'use client'

import React, { useState, useEffect } from "react";
import styles from "./loading.module.scss";

const randomImages = [
  "/faction/미실리스.webp",
  "/faction/어브노말.webp",
  "/faction/엘리시온.webp",
  "/faction/테트라.webp",
  "/faction/필그림.webp"
];

export default function Loading() {
  const [randomImage, setRandomImage] = useState(getRandomImage());

  useEffect(() => {
    setRandomImage(getRandomImage());
  }, []);

  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * randomImages.length);
    return randomImages[randomIndex];
  }

  return (
    <div className={styles.background}>
      <img
        src={randomImage}
        className={styles.img}
      />
    </div>
  );
}