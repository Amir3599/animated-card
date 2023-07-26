"use client";
import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import styles from "./AnimatedCard.module.css";

const AnimatedCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const rotateCard = () => {
    setIsFlipped((prev) => !prev);
  };

  useEffect(() => {
    gsap.set(".card", { transformPerspective: 1000 });

    gsap.to(".card", {
      rotationY: 180,
      duration: 0.6,
      ease: "power2.inOut",
      paused: !isFlipped,
    });
  }, [isFlipped]);

  const onMoreBtn = (e) => {
    e.stopPropagation();
    // handle navigation to more details
  };

  return (
    <div className={styles.container} onClick={rotateCard}>
      <div className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}>
        <div className={styles.front}>
          <h1>Animated-Card</h1>
          <p>
            This an React component named AnimatedCard that created by GSAP
            animation library ...
          </p>
          <button type="button" className={styles.moreBtn} onClick={onMoreBtn}>
            more
          </button>
        </div>
        <div className={styles.back}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
            doloribus distinctio illo aliquid deleniti minus ut, magnam
            reprehenderit debitis vero hic porro aut ducimus. Quidem voluptates
            nemo amet illum saepe alias placeat id provident aperiam! Deleniti
            reiciendis pariatur quibusdam odio eligendi numquam voluptatem
            expedita assumenda! Quis quam ab laborum expedita ipsam ullam amet
            porro tenetur pariatur. Saepe, deserunt? Quod cumque dicta ipsam ab
            ducimus eligendi natus voluptate porro deleniti labore fugiat at
            magni sint, quam, autem eos nemo aut. Tempora?
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;
