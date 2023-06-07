import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: import.meta.env.VITE_REACT_APP_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_REACT_APP_SANITY_DATASET,
  apiVersion: import.meta.env.VITE_REACT_APP_SANITY_API_VERSION,
  useCdn: true,
  token: import.meta.env.VITE_REACT_APP_SANITY_TOKEN,
});
const builder: any = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
