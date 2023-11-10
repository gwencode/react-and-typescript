import { useState, PropsWithChildren } from 'react';
import { fetchQuotes, Quote } from './application';

type QuotesProps = {
  setQuotes: React.Dispatch<React.SetStateAction<Quote[]>>;
};

const Quotes = ({ children, setQuotes }: PropsWithChildren<QuotesProps>) => {
  const [count, setCount] = useState(0);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchQuotes(count).then(setQuotes);
  };

  return (
    <section className="flex flex-col gap-8">
      <form onSubmit={handleSubmit}>
        <label htmlFor="number-of-quotes-to-load" className="block">
          Number of Quotes to Load
        </label>
        <div className="flex">
          <input
            id="number-of-quotes-to-load"
            className="w-full"
            type="number"
            min="0"
            max="25"
            value={count}
            onChange={(e) => setCount(e.target.valueAsNumber)}
          />
          <button type="submit">Load Quotes</button>
        </div>
      </form>
      <div className="grid grid-cols-2 gap-4">{children}</div>
    </section>
  );
};

export default Quotes;
