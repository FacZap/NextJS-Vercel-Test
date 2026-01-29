import { BlogPost } from "@/types/blog-posts";

async function getBlogPost(slug: string): Promise<BlogPost> {
  const response = await fetch(`http://localhost:3000/api/v1/posts/${slug}`);
  const data = await response.json();
  return data;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const blogPost: BlogPost = await getBlogPost(slug);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans gap-16 dark:bg-black">
      <h2>{blogPost.title}</h2>
      <pre>{JSON.stringify(blogPost, null, 2)}</pre>
    </div>
  );
}
