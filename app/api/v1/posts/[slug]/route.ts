import { BLOG_POSTS } from "@/data/blog-posts";

// GET "localhost:3000/api/v1/posts/linkin-park"

export async function GET(
  request: NextRequest,
  context: { params: { slug: string } },
): Promise<Response> {
  const params = await context.params;
  const slug = params.slug;
  for (let i = 0; i < BLOG_POSTS.length; i++) {
    if (slug == BLOG_POSTS[i].slug) {
      return new Response(JSON.stringify(BLOG_POSTS[i]));
    }
  }
}
