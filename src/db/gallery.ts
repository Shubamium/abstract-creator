"use server";
import { appendComments, fetchData } from "./sanity";
import { v4 as uuid } from "uuid";
export async function getGallery() {
  const galleryData = await fetchData<any[]>(
    `
		*[_type == 'gallery'] | order(_createdAt asc){
			...,
			comments[] | order(postedAt desc),
		}
	`,
    {
      next: {
        revalidate: 0,
      },
    }
  );

  return galleryData;
}
export async function PostComment(
  id: string,
  name: string,
  color: string,
  message: string
) {
  const replies = await appendComments(id, {
    _type: "comment",
    _key: uuid(),
    name,
    color,
    message,
    postedAt: new Date().toISOString(),
  });
  console.log("comment", replies);

  return replies;
}
