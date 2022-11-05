import styles from "./Navbar.module.scss";
import { GrFacebook, GrTwitter, GrInstagram, GrSearch } from "react-icons/gr";
import { Button } from "@mui/material";
import { useState } from "react";
import LogoImage from "@/assets/gobble_logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className={styles.main}>
      <div className={styles.navbar}>
        <div className={styles.socialsContainer}>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <GrFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <GrTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <GrInstagram size={24} />
          </a>
        </div>
        <div className={styles.searchContainer}>
          <GrSearch
            size={20}
            className={styles.searchIcon}
            onClick={() => {
              setClicked(!clicked);
            }}
          />
          <input
            className={clicked ? styles.showSearch : styles.hideSearch}
            placeholder="Search"
          />
          <Button
            variant="outlined"
            sx={{ color: "black", borderColor: "black", borderRadius: "5px" }}
          >
            Login
          </Button>
        </div>
      </div>
      <div className={styles.desktop}>
        <Image
          src={LogoImage}
          alt="Logo"
          layout="fixed"
          width="300"
          height="300"
        />
        <div className={styles.desktop_Bar}>
          <ul>
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/recipes">RECIPES</Link>
            </li>
            <li>
              <Link href="/blog">BLOG</Link>
            </li>
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
