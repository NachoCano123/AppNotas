import { Handlers } from "$fresh/server.ts";
import { notas } from "../Types.ts";

export const handler: Handlers = {
  async POST(req) {
    try {
      const formData = await req.formData();
      const title = formData.get("title")?.toString();
      const content = formData.get("content")?.toString();
      const category = formData.get("category")?.toString();

      if (!title || !content || !category) {
        return new Response("Faltan campos requeridos", { status: 400 });
      }

      notas.push({
        id: Date.now(),
        title,
        content,
        category
      });
      
      return new Response(null, {
        status: 303,
        headers: { "Location": "/enviar_nota" },
      });
    // deno-lint-ignore no-unused-vars
    } catch (error) {
      return new Response("Error interno del servidor", { status: 500 });
    }
  },
};