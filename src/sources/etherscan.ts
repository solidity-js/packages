import http from "axios";
import { Settings } from "../types";

const BASE_URL = "https://api.etherscan.io/api";

export default async function etherscan(address: string, settings: Settings) {
  const { data } = await http.get(BASE_URL, {
    params: {
      module: "contract",
      action: "getabi",
      address,
      apikey: settings.etherscan.apiKey,
    },
  });

  if (data.message !== "OK") {
    if (data.result === "Contract source code not verified") {
      console.warn(`Contract source code not verified on etherscan.`);
      return [];
    }

    throw new Error(`Etherscan error: ${JSON.stringify(data)}`);
  }

  return JSON.parse(data.result);
}
