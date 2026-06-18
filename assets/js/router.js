import { getQueryParam } from "./utils.js";
import { SearchClient } from "./searchClient.js";
import { UIRenderer } from "./uiRenderer.js";
import { Logger } from "./logger.js";

export function initHome() {

  const form = document.getElementById("searchForm");
  const input = document.getElementById("searchInput");
  const lucky = document.getElementById("luckyBtn");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    await SearchClient.redirect(input.value);
  });

  lucky.addEventListener("click", async () => {
    await SearchClient.redirect(input.value + " privacy");
  });

  Logger.info("BennaNET home initialized");
}

export function initSearchPage() {

  const query = getQueryParam("q");
  const container = document.getElementById("resultsContainer");
  const input = document.getElementById("topSearchInput");
  const error = document.getElementById("errorBox");

  try {

    if (!query) {
      throw new Error("Missing query");
    }

    input.value = query;

    UIRenderer.renderResults(container, query);

    input.addEventListener("keydown", async (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        await SearchClient.redirect(input.value);
      }
    });

    Logger.info("Search page ready");

  } catch (err) {
    error.classList.remove("hidden");
    error.textContent = "Unable to load search results.";
    Logger.error("Search init failed", err);
  }
}
