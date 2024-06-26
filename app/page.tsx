"use client";

import { useQuery } from "@tanstack/react-query";
import MMICard from "@/components/MMICard";
import { STATUS } from "@/lib/types";
import InfoAccordion from "@/components/InfoAccordian";

export default function Home() {
  // const { total, documents: mmis } = await getMMIs();

  const { data } = useQuery({
    queryKey: ["mmis"],
    queryFn: async () => {
      const res = await fetch("/api/mmi");

      console.log(res.json());
      return await res.json();
    },
  });

  console.log(data);

  return (
    <main className="select-none">
      <div className="flex items-center justify-center w-full px-10 py-5 bg-gray-100 dark:bg-gray-900 text-white">
        <Image
          src="/logo5.png"
          alt="VIT Logo"
          width={120}
          height={95}
          style={{ borderRadius: "0%" }}
        />
        <h1 className="text-2xl font-semibold ml-4 mr-5"> FTC MMI Index</h1>
        <Image
          src="/logo2.jpg"
          alt="FTC Logo"
          width={75}
          height={75}
          style={{ borderRadius: "0%" }}
        />
      </div>

      <section className="flex flex-col items-center justify-start min-h-screen w-full bg-gray-100 dark:bg-gray-900 p-4 md:p-8">
        <MMICard
          mmis={([] as any[]).map((mmi) => ({
            status: (mmi as any).status as STATUS,
            source: (mmi as any).source as string,
            score: (mmi as any).score as number,
            $updatedAt: mmi.$updatedAt,
          }))}
        />

        <p className="p-5 text-gray-500 font-semibold">
          This doesn't belong to us and don't make any financial decision based
          on this.
        </p>

        <InfoAccordion />
      </section>
    </main>
  );
}
