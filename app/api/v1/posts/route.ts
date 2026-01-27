import { BLOG_POSTS } from "@/data/blog-posts";

export async function GET(request: Request): Promise<Response> {
  return new Response(JSON.stringify(BLOG_POSTS));
}
