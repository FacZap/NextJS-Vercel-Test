import { BLOG_POSTS } from "@/data/blogPosts";

export async function GET(request: Request): Promise<Response> {
  return new Response(JSON.stringify(BLOG_POSTS));
}
