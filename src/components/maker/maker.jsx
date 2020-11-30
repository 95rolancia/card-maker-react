import React, { useEffect } from "react";
import styles from "./maker.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useHistory } from "react-router-dom";
import CardMaker from "./card_maker/card_maker";
import CardPreview from "./card_preview/card_preview";

const Maker = ({ authService }) => {
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
  return (
    <section className={styles.maker}>
      <Header className={styles.header} onLogout={onLogout} />
      <section className={styles.content}>
        <CardMaker />
        <CardPreview />
      </section>
      <Footer />
    </section>
  );
};

export default Maker;
