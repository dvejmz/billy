import { z } from 'zod';

const BillDbRow = z.object({
  id: z.number(),
  name: z.string(),
  total: z.number(),
});

type BillDbRow = z.infer<typeof BillDbRow>;

interface Env {
  DB: D1Database;
}

const mapBills = (data: any[]): BillDbRow[] => (data.map(b => BillDbRow.parse(b)));

export const onRequest: PagesFunction<Env> = async (context) => {
  const ps = context.env.DB.prepare('SELECT * from bill');
  const data = await ps.all();

  let bills = [];

  try {
    bills = mapBills(data.results);
  } catch (err) {
    console.error('Failed to map Bill rows from database', err);
    return new Response(JSON.stringify({ error: 'Failed to retrieve bill data'}), { status: 500 });
  }

  console.log(bills);

  return Response.json(bills);
}
