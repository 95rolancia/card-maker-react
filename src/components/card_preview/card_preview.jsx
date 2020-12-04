import React from "react";
import Card from "../card/card";
import styles from "./card_preview.module.css";
const CardPreview = ({ cards }) => {
  return (
    <section className={styles.cardPreview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.cards}>
        {Object.keys(cards).map((key) => (
          <Card key={key} card={cards[key]} />
        ))}
      </ul>
    </section>
  );
};

export default CardPreview;
