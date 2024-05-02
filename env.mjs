import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    APPWRITE_PROJECT_ID: z.string(),
    APPWRITE_API_KEY: z.string(),
    MMI_COLLECTION_ID: z.string(),
    MMI_DATABASE_ID: z.string(),
  },
  client: {},
  // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
  runtimeEnv: {
    APPWRITE_PROJECT_ID: process.env.APPWRITE_PROJECT_ID,
    APPWRITE_API_KEY: process.env.APPWRITE_API_KEY,
    MMI_COLLECTION_ID: process.env.MMI_COLLECTION_ID,
    MMI_DATABASE_ID: process.env.MMI_DATABASE_ID,
  },
});
