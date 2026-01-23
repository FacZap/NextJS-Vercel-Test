import Image from "next/image";
import { BlogPost } from "@/types/blog-post";

const getBlogPosts = async (): Promise<BlogPost[]> => {
  const response = await fetch("http://localhost:3000/api/v1/posts");
  const data = await response.json();
  return data;
};

export default async function Home() {
  const blogPosts = await getBlogPosts();

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans gap-16 dark:bg-black">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Blog Posts</h1>
        <p className="text-lg text-gray-600">Explore our latest blog posts</p>
      </div>
      <div className="flex items-center justify-center gap-16">
        {blogPosts.map((post, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md max-w-sm">
            <h1>{post.title}</h1>
            <h2 style={{ color: "red" }}>{post.description}</h2>
            <p className="text-wrap">
              {post.content.substring(0, 110) + "..."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
