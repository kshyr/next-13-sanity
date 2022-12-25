import IFrame from "sanity-plugin-iframe-pane";
import type { DefaultDocumentNodeResolver } from "sanity/desk";

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  if (schemaType === "note") {
    return S.document().views([
      S.view.form(),
      S.view
        .component(IFrame)
        .options({
          url: `${
            process.env.NEXT_PUBLIC_VERCEL_URL || "localhost:3000"
          }/api/preview`,
          defaultSize: "desktop",
          reload: {
            button: true,
          },
        })
        .title("Preview"),
    ]);
  }
};
