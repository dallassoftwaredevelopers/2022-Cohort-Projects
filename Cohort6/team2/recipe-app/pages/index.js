import Head from "next/head";
import styles from "../styles/Home.module.scss";
import ImageSlider from "@/components/ImageSlider/ImageSlider";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gobble Meal</title>
        <meta name="description" content="Search your favorite holiday meals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.home}>
        <ImageSlider />
      </main>
    </div>
  );
}
