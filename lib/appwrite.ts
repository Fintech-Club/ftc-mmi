import { env } from "@/env.mjs";

import sdk from "node-appwrite";

// Init SDK
const client = new sdk.Client();

const databases = new sdk.Databases(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject(env.APPWRITE_PROJECT_ID) // Your project ID
  .setKey(env.APPWRITE_API_KEY); // Your secret API key

export { client, databases };
