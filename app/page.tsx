import { getMMIs } from "@/service/mmi";
import Image from "next/image";

export default async function Home() {
  const { total, documents: mmis } = await getMMIs();

  return (
    <main>
      <h1>FTC MMI Index</h1>

      <div>{JSON.stringify(mmis)}</div>
    </main>
  );
}
