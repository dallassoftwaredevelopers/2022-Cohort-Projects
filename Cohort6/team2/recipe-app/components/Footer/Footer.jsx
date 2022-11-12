import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Footer.module.scss";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={styles.footer__container}>
      <div className={styles.top}>
        <div className={styles.top__left}>
          <Image />
          <p>
            "Our mission is to create a platform to bring joy for everyone to
            fully experience the best Thanksgiving"
            <br />
            <br />
            -FCC Cohort#6 Team 2
          </p>
        </div>
        <div className={styles.top__right}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <a href="mailto:bycho1991@gmail.com">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottom__left}>
          &copy;2022 - All Rights Reserved
        </div>
        <div className={styles.bottom__right}>
          <ul>
            <li>
              <a href="https://facebook.com" target="_blank">
                <BsFacebook size={24} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank">
                <BsTwitter size={24} />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank">
                <BsInstagram size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
