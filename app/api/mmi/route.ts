import { getMMIs } from "@/service/mmi";

export async function GET(req: Request) {
  const { total, documents: mmis } = await getMMIs();

  return new Response(JSON.stringify({ data: mmis }), { status: 200 });
}
