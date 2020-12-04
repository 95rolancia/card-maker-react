import React, { useEffect, useState } from "react";
import styles from "./maker.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useHistory } from "react-router-dom";
import CardMaker from "../card_maker/card_maker";
import CardPreview from "../card_preview/card_preview";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "rolancia",
      company: "pnu",
      theme: "dark",
      title: "FE develpoer",
      email: "95jjangjun@gmail.com",
      message: "go for it",
      fileName: "rolancia",
      fileURL: null,
    },
    2: {
      id: "2",
      name: "rolancia",
      company: "pnu",
      theme: "light",
      title: "FE develpoer",
      email: "95jjangjun@gmail.com",
      message: "go for it",
      fileName: "rolancia",
      fileURL: null,
    },
    3: {
      id: "3",
      name: "rolancia",
      company: "pnu",
      theme: "colorful",
      title: "FE develpoer",
      email: "95jjangjun@gmail.com",
      message: "go for it",
      fileName: "rolancia",
      fileURL: "rolancia.png",
    },
  });
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

  const createOrupdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header className={styles.header} onLogout={onLogout} />
      <section className={styles.content}>
        <CardMaker
          cards={cards}
          addCard={createOrupdateCard}
          updateCard={createOrupdateCard}
          deleteCard={deleteCard}
        />
        <CardPreview cards={cards} />
      </section>
      <Footer />
    </section>
  );
};

export default Maker;
