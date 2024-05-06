import { getMMIs } from "@/service/mmi";
import Image from "next/image";
import MMICard from "@/components/MMICard";

export default async function Home() {
  const { total, documents: mmis } = await getMMIs();

  return (
    <main>
      <h1>FTC MMI Index</h1>
      <MMICard />
      <div>{JSON.stringify(mmis)}</div>
    </main>
  );
}
