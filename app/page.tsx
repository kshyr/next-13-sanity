import Image from "next/image";
import styles from "./page.module.css";
import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";
import PreviewSuspense from "../components/PreviewSuspense";
import Notes from "../components/Notes";
import PreviewNotes from "../components/PreviewNotes";
const query = groq`*[_type == "note"]`;

export default async function Home() {
  if (previewData()) {
    return (
      <PreviewSuspense fallback={<h1>Loading...</h1>}>
        <PreviewNotes query={query} />
      </PreviewSuspense>
    );
  }

  const notes = await client.fetch(query);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Notes notes={notes} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
