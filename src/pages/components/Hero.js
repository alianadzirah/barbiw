import React from "react";
import styles from "../../styles/Home.module.css";

function Hero() {
  return (
    <>
      {/*search start here*/}
          <div className={styles.hero_search}>
            <p className={styles.hero_title}>Find Barbie movies here!</p>
            <p className={styles.hero_subtitle}>
            It is literally impossible to be a woman.
            </p>
          </div>
      {/*search end here*/}
    </>
  );
}

export default Hero;
