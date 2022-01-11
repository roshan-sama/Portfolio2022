interface QuoteType {
  quote: string;
  attribution?: string;
  linl?: string;
}
const QuotesList: QuoteType[] = [
  {
    quote: "You aren't doing it wrong, if no one knows what you're doing", //https://www.youtube.com/watch?v=DxGkxcXhL1Q
  },
  {
    quote: "Never trust a computer you can&apos;t throw out a window", //https://www.youtube.com/watch?v=DxGkxcXhL1Q
    attribution: "Steve Wozniak"
  },
];

export default QuotesList;
