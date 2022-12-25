import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { getDefaultDocumentNode } from "./lib/deskPreview";

export default defineConfig({
  basePath: "/studio",
  name: "notes",
  title: "sanity-notes",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  plugins: [
    deskTool({ defaultDocumentNode: getDefaultDocumentNode }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
