import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Holiday Meals</title>
        <meta name="description" content="Search your favorite holiday meals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.home}>
        <h1>Hello World</h1>
      </main>
    </div>
  );
}
