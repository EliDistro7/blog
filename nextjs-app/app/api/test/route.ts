// app/api/test/route.ts
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

export async function GET() {
  const query = groq`*[_type == "post"][0]{title}`;
  const post = await client.fetch(query);
  return Response.json({ post });
}