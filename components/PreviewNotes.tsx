"use client";

import { usePreview } from "../lib/sanity.preview";
import Notes from "./Notes";

type Props = {
  query: string;
};

export default function PreviewNotes({ query }: Props) {
  const data = usePreview(null, query);
  return <Notes notes={data} />;
}
