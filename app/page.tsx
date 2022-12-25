import styles from "./page.module.css";
import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";
import PreviewSuspense from "../components/PreviewSuspense";
import Notes from "../components/Notes";
import PreviewNotes from "../components/PreviewNotes";
import Link from "next/link";

const query = groq`*[_type == "note"]`;

export default async function Home() {
  if (previewData()) {
    return (
      <PreviewSuspense fallback={<h1>Loading...</h1>}>
        <PreviewNotes query={query} />
        <Link href="/api/exit-preview">Exit preview</Link>
      </PreviewSuspense>
    );
  }

  const notes = await client.fetch(query);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Notes notes={notes} />
      </main>
    </div>
  );
}
