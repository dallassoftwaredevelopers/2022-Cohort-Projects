import styles from "@/styles/DesktopNavbar.module.scss";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import Link from "next/link";

const DesktopNavbar = () => {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <Image src={Logo} alt="Logo" layout="fixed" width="200" height="200" />
      </div>

      <div className={styles.navlinks}>
        <div className={styles.navlinks__link}>
          <Link href="/">Home</Link>
        </div>
        <div className={styles.navlinks__link}>
          <Link href="/">Recipe</Link>
        </div>
        <div className={styles.navlinks__link}>
          <Link href="/">Blog</Link>
        </div>
        <div className={styles.navlinks__link}>
          <Link href="/">About</Link>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;
