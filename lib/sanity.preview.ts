"use client";

import { definePreview } from "next-sanity/preview";
import { projectId, dataset } from "./sanity.client";

function onPublicAccessOnly() {
  throw new Error("You need to be signed in to access this resource");
}

if (!projectId || !dataset) {
  throw new Error(
    "Missing Sanity project ID or dataset name. Check your env vars."
  );
}

export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
});
