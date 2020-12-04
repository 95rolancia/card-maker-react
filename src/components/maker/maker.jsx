import React, { useEffect, useState } from "react";
import styles from "./maker.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useHistory } from "react-router-dom";
import CardMaker from "../card_maker/card_maker";
import CardPreview from "../card_preview/card_preview";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "rolancia",
      company: "pnu",
      theme: "Dark",
      title: "FE develpoer",
      email: "95jjangjun@gmail.com",
      message: "go for it",
      fileName: "rolancia",
      fileURL: null,
    },
    {
      id: "2",
      name: "rolancia",
      company: "pnu",
      theme: "Light",
      title: "FE develpoer",
      email: "95jjangjun@gmail.com",
      message: "go for it",
      fileName: "rolancia",
      fileURL: null,
    },
    {
      id: "3",
      name: "rolancia",
      company: "pnu",
      theme: "Colorful",
      title: "FE develpoer",
      email: "95jjangjun@gmail.com",
      message: "go for it",
      fileName: "rolancia",
      fileURL: "rolancia.png",
    },
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };

  return (
    <section className={styles.maker}>
      <Header className={styles.header} onLogout={onLogout} />
      <section className={styles.content}>
        <CardMaker cards={cards} addCard={addCard} />
        <CardPreview cards={cards} />
      </section>
      <Footer />
    </section>
  );
};

export default Maker;
