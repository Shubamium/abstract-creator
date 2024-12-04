import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "hs3nvd1d",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

const config = {
  next: {
    revalidate: 5,
  },
};
export function fetchData<T>(grocQuery: string, options?: any) {
  return client.fetch<T>(grocQuery, {}, { ...config, ...options });
}
export function createData(type: string, data: any) {
  return client.create({
    _type: type,
    ...data,
  });
}

export async function appendReplies(_id: string, data: any) {
  return client
    .patch(_id)
    .setIfMissing({ replies: [] })
    .append("replies", [data])
    .commit();
}
export async function appendComments(_id: string, data: any) {
  return client
    .patch(_id)
    .setIfMissing({ comments: [] })
    .append("comments", [data])
    .commit();
}
