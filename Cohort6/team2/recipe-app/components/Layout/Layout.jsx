import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={styles.layout__container}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
