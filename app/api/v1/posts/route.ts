// Diferencia entre NextRequest y Request???
//import { NextRequest } from "next/server";
import { BLOG_POSTS } from "@/data/blog-posts";

// FUNCION DE ESTO??
export async function GET(request: Request): Promise<Response> {
  return new Response(JSON.stringify(BLOG_POSTS));
}

export async function POST(request: Request): Promise<Response> {
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
