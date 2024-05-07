import { getMMIs } from "@/service/mmi";
import Image from "next/image";
import MMICard from "@/components/MMICard";
import { MMI, STATUS } from "@/lib/types";
import InfoAccordion from "@/components/InfoAccordian";

export default async function Home() {
  const { total, documents: mmis } = await getMMIs();

  console.log(mmis);

  return (
    <main className="select-none">
      <div className="flex items-center justify-center w-full px-10 py-5 bg-gray-100 dark:bg-gray-900 text-white">
        <h1 className="text-2xl font-semibold">FTC MMI Index</h1>
      </div>

      <section className="flex flex-col items-center justify-start min-h-screen w-full bg-gray-100 dark:bg-gray-900 p-4 md:p-8">
        <MMICard
          mmis={mmis.map((mmi) => ({
            status: (mmi as any).status as STATUS,
            source: (mmi as any).source as string,
            score: (mmi as any).score as number,
            $updatedAt: mmi.$updatedAt,
          }))}
        />

        <InfoAccordion />
      </section>
    </main>
  );
}
