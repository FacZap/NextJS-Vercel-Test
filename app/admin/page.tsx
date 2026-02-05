"use client";

export default function AdminPage() {
  async function createBlogPost() {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL
      ? `https://${process.env.NEXT_PUBLIC_API_URL}`
      : "";

    const response = await fetch(`${baseUrl}/api/v1/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Nuevo Post",
        description: "Descripción del nuevo post",
        content: "Contenido del nuevo post",
        slug: "nuevo-post",
      }),
    });

    const data = await response.json();
    console.log("Respuesta del servidor:", data);
  }

  async function handleCreatePost() {
    await createBlogPost();
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-black mb-6 text-center">
          Admin Page
        </h1>

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
              placeholder="Ingrese el título"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black text-black"
            />
          </div>

          {/* Descripción */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Descripción
            </label>
            <textarea
              rows={2}
              placeholder="Ingrese la descripción"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black text-black"
            />
          </div>

          {/* Contenido */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contenido
            </label>
            <textarea
              rows={5}
              placeholder="Ingrese el contenido del post"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black text-black"
            />
          </div>

          {/* Slug */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Slug (opcional)
            </label>
            <input
              type="text"
              placeholder="Ingrese el slug del post"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black text-black"
            />
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900"
          >
            Crear post
          </button>
        </form>
      </div>
    </div>
  );
}
