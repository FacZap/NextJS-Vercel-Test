"use client";
import { useState } from "react";

export default function AdminPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    slug: "",
  });

  const [isOpen, setIsOpen] = useState(false);

  async function createBlogPost() {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL
      ? `https://${process.env.NEXT_PUBLIC_API_URL}`
      : "";

    const response = await fetch(`${baseUrl}/api/v1/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log("Respuesta del servidor:", data);
  }

  async function handleCreatePost() {
    await createBlogPost();
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-black text-center">
          Admin Page
        </h1>
      </div>

      {/* Panel */}
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
        {/* Dropdown button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center text-xl font-semibold text-gray-800 mb-4"
        >
          <span>Create Post</span>
          <span>{isOpen ? "▲" : "▼"}</span>
        </button>

        {/* Form collapsable */}
        {isOpen && (
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleCreatePost();
            }}
          >
            {/* Título */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Título
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>

            {/* Descripción */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Descripción
              </label>
              <textarea
                rows={2}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>

            {/* Contenido */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contenido
              </label>
              <textarea
                rows={5}
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>

            {/* Slug */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Slug (opcional)
              </label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) =>
                  setFormData({ ...formData, slug: e.target.value })
                }
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900"
            >
              Crear post
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
