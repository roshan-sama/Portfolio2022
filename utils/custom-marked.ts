import { marked, Tokens } from "marked";

const escapeAttr = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

// https://marked.js.org/using_pro#renderer
marked.use({
  renderer: {
    link(this: any, { href, title, tokens }: Tokens.Link) {
      const text = this.parser.parseInline(tokens);
      const titleAttr = title ? ` title="${escapeAttr(title)}"` : "";
      return `<a${titleAttr} target="_blank" href="${escapeAttr(
        href
      )}" rel="noopener noreferrer">${text}</a>`;
    },
  },
});

export default marked;
