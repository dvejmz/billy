interface Env {
  DB: D1Database;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const ps = context.env.DB.prepare('SELECT * from bill');
  const data = await ps.all();

  return Response.json(data);
}
