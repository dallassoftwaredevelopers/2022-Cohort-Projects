import React from "react";
import styles from "./EmailSignup.module.scss";

const EmailSignup = () => {
  return (
    <div className={styles.email__container}>
      <div className={styles.title}>
        <h1>
          Deliciousness
          <br />
          to your inbox
        </h1>
      </div>
      <div className={styles.subtitle}>
        <p>
          Receive the best Thanksgiving <br />
          food recipes every week!
        </p>
      </div>
      <div className={styles.email}>
        <div className={styles.email__input}>
          <input type="email" placeholder="Email Address" />
          <button>Join</button>
        </div>
        <p>
          By joining our newsletter you agree to our{" "}
          <a href="#">Terms & Conditions</a>
        </p>
      </div>
    </div>
  );
};

export default EmailSignup;
