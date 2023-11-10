import { useEffect, useState } from 'react';
import Quotes from './quotes';
import InspirationalQuote from './quote';
import Loading from './loading';

export type Quote = {
  id: number;
  content: string;
  source?: string;
};

export const fetchRandomQuote = async () => {
  const response = await fetch(`/api/quotes/random`);
  return response.json();
};

export const fetchQuotes = async (count: number) => {
  const response = await fetch(`/api/quotes?limit=${count}`);
  return response.json();
};

const Application = () => {
  const [quote, setQuote] = useState<Quote>();

  useEffect(() => {
    fetchRandomQuote().then(setQuote);
  }, []);

  const [quotes, setQuotes] = useState<Quote[]>([]);

  if (!quote) return <Loading />;
  return (
    <main className="mx-auto w-full max-w-2xl py-16">
      <h2 className="mb-8 text-2xl font-bold">Inspirational Random Quote</h2>
      <InspirationalQuote content={quote.content} source={quote.source} />
      <Quotes setQuotes={setQuotes}>
        {quotes.map((quote) => {
          return (
            <InspirationalQuote
              content={quote.content}
              source={quote.source}
              key={quote.id}
            />
          );
        })}
      </Quotes>
    </main>
  );
};

export default Application;
