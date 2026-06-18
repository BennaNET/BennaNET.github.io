export class UIRenderer {

  static renderResults(container, query) {
    container.innerHTML = "";

    const results = this.mock(query);

    for (const r of results) {
      const div = document.createElement("div");
      div.className = "result";

      div.innerHTML = `
        <a href="${r.url}" target="_blank">${r.title}</a>
        <p>${r.snippet}</p>
      `;

      container.appendChild(div);
    }
  }

  static mock(query) {
    return Array.from({ length: 10 }).map((_, i) => ({
      title: `BennaNET result ${i + 1} for "${query}"`,
      url: `https://example.org/search?q=${encodeURIComponent(query)}&i=${i}`,
      snippet: `Simulated privacy-safe result preview for ${query}`
    }));
  }
}
