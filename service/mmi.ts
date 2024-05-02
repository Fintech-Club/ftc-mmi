import { env } from "@/env.mjs";
import { databases } from "@/lib/appwrite";

export type MMI = {
  status: "FEAR" | "EXTREME_FEAR" | "GREED" | "EXTREME_GREED" | "NEUTRAL";
  source: string;
  score: number;
};

export async function getMMIs() {
  return await databases.listDocuments(
    env.MMI_DATABASE_ID,
    env.MMI_COLLECTION_ID,
    []
  );
}
