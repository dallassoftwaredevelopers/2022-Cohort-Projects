import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Navbar from "@/components/Navbar";
import DesktopNavbar from "@/components/DesktopNavbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>GobbleMeal</title>
        <meta name="description" content="Search your favorite holiday meals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.home}>
        <Navbar />
        <DesktopNavbar />
      </main>
    </div>
  );
}
