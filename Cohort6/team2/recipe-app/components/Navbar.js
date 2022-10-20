import styles from "@/styles/Navbar.module.scss";
import { GrFacebook, GrTwitter, GrInstagram, GrSearch } from "react-icons/gr";
import { Button } from "@mui/material";
import { useState } from "react";

const Navbar = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className={styles.main}>
      <div className={styles.navbar}>
        <div className={styles.leftSocials}>
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
        <div className={styles.rightSearch}>
          <GrSearch
            size={20}
            className={styles.searchIcon}
            onClick={() => {
              setHover(!hover);
            }}
          />
          <input
            className={hover ? styles.showSearch : styles.hideSearch}
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
    </div>
  );
};

export default Navbar;
