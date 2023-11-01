import { z } from 'zod';

interface Env {
  DB: D1Database;
}

const Bill = z.object({
  name: z.string(),
  total: z.number(),
});
type Bill = z.infer<typeof Bill>;

export const onRequest: PagesFunction<Env> = async (context) => {
  let result: unknown;
  const resJson = await context.request.json();
  const bill = Bill.parse(resJson);

  try {
    result = await context.env.DB
      .prepare('INSERT INTO bill (name, total) VALUES (?1, ?2)')
      .bind(bill.name, bill.total)
      .run();
  } catch (err) {
    console.error("Failed to create new bill:", err);
    return Response.json({ error: 'Failed to create bill' }, {
      status: 500,
    })
  }

  console.log("Created new bill:", result);
  return new Response(null, {
    status: 200,
  });
}
