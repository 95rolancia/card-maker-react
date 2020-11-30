import React from "react";
import styles from "./card_preview.module.css";
const CardPreview = (props) => {
  return (
    <section className={styles.cardPreview}>
      <h1 className={styles.title}>Card Preview</h1>
    </section>
  );
};

export default CardPreview;
