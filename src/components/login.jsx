import React from "react";
import styles from "./login.module.css";
const Login = (props) => {
  return (
    <div className={styles.login}>
      <header className={styles.header}>
        <img src="../../images/logo.png" alt="" className={styles.logo} />
        <span className={styles.title}>Business Card Maker</span>
      </header>
      <section className={styles.body}>
        <span>Login</span>
        <button className={styles.google}>Google</button>
        <button className={styles.github}>Github</button>
      </section>
      <footer className={styles.footer}> Code your dream</footer>
    </div>
  );
};

export default Login;
