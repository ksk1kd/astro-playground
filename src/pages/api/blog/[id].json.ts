export const prerender = false;

import type { APIRoute } from "astro";

export const GET: APIRoute = ({ params }) => {
  const id = params.id;
  const exist = Number(id) < 10;

  if (!exist) {
    return new Response(null, {
      status: 404,
      statusText: "Not found",
    });
  }

  const data = {
    id,
    title: `Post ${id}`,
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}