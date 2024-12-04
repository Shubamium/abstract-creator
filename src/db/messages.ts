"use server";

import { appendReplies, createData, fetchData } from "./sanity";
import { v4 as uuid } from "uuid";
export async function SendMessage(
  name: string,
  email: string,
  messages: string,
  color: string
) {
  await createData("messages", {
    name,
    email,
    message: messages,
    color,
  });
}

export async function GetMessages() {
  const data = await fetchData<any[]>(
    `
		*[_type == 'messages'] | order(_createdAt desc){
			...
		}
	`,
    {
      next: {
        revalidate: 0,
      },
    }
  );
  return data;
}

export async function PostReply(id: string, name: string, message: string) {
  const replies = await appendReplies(id, {
    _type: "reply",
    _key: uuid(),
    name,
    messages: message,
  });
  console.log(replies);

  return replies;
}
