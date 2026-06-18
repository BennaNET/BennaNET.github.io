import { CONFIG } from "./config.js";
import { encodeQuery } from "./utils.js";
import { Logger } from "./logger.js";

export class SearchClient {

  static async redirect(query) {
    try {
      if (!query || !query.trim()) {
        throw new Error("Empty search query");
      }

      const encoded = encodeQuery(query);

      const url = CONFIG.SEARCH_ENDPOINT + encoded;

      Logger.info("Redirecting", url);

      window.location.href = url;

    } catch (err) {
      Logger.error("Search redirect failed", err);
      throw err;
    }
  }
}
