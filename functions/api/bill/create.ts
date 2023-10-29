interface Env {
  DB: D1Database;
}

const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const onRequest: PagesFunction<Env> = async (context) => {
  let result: unknown;
  const bill: { name: string; total: number; } = await context.request.json();
  console.log(bill);

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
