import { NextRequest } from "next/server";
import { BLOG_POSTS } from "@/data/blog-posts";

// GET "localhost:3000/api/v1/posts/linkin-park"

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

export async function POST(request: NextRequest): Promise<Response> {
  const data = await request.json();
  // Validar la data
  const { title, description, content } = data;
  let { slug } = data;
  if (!title || !description || !content) {
    return new Response("Invalid data", { status: 400 }); //Me lo generó la IA
  }
  if (!slug) {
    slug = title.toLowerCase().replace(/\s+/g, "-");
  }
  // Crear el post
  const newPost = {
    title,
    description,
    slug,
    content,
    //createdAt: new Date().toISOString(),
    //updatedAt: new Date().toISOString()
  };
  // Guardar el nuevo post en la base de datos
  // await savePost(newPost);
  BLOG_POSTS.push(newPost);
  return new Response(JSON.stringify(newPost), { status: 201 });
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
