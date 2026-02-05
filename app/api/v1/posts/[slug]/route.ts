import { NextRequest } from "next/server";
import { BLOG_POSTS } from "@/data/blog-posts";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
): Promise<Response> {
  // En Next 16 params es un Promise
  const { slug } = await params;

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return new Response("Post not found", { status: 404 });
  }

  return new Response(JSON.stringify(post), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

// export async function GET(
//   request: NextRequest,
//   context: { params: <{ slug: string }> },
// ): Promise<Response> {
//   const params = await context.params;
//   const slug = params.slug;
// for (let i = 0; i < BLOG_POSTS.length; i++) {
//   if (slug == BLOG_POSTS[i].slug) {
//     return new Response(JSON.stringify(BLOG_POSTS[i]));
//   }
// }
//}
