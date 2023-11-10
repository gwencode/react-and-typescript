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
  const [count, setCount] = useState(0);
  const [quotes, setQuotes] = useState<Quote[]>([]);

  const handleCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(e.target.valueAsNumber);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // fetch quotes and then console.log data return from fetchQuotes
    const data = await fetchQuotes(count);
    setQuotes(data);
  };

  return (
    <main className="mx-auto w-full max-w-2xl py-16">
      <Quotes count={count} onChange={handleCount} onSubmit={handleSubmit}>
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
