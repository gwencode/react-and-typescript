import { useReducer, useState } from 'react';

const intialState = {
  count: 0,
  draftCount: 0,
};

type Action = {
  type: 'increment' | 'decrement' | 'reset' | 'update';
};

type ActionWithPayload = {
  type: 'change';
  payload: number;
};

const reducer = (state = intialState, action: Action | ActionWithPayload) => {
  const { count, draftCount } = state;
  if (action.type === 'increment') {
    return { count: count + 1, draftCount };
  }

  if (action.type === 'decrement') {
    return { count: count - 1, draftCount };
  }

  if (action.type === 'reset') {
    return { count: 0, draftCount };
  }

  if (action.type === 'update') {
    const newCount = draftCount;
    return { count: newCount, draftCount: 0 };
  }

  if (action.type === 'change' && action.payload) {
    const newDraftCount = action.payload;
    return { count, draftCount: newDraftCount };
  }

  return state;
};

const Counter = (): JSX.Element => {
  // const [count, setCount] = useState(0);
  // const [inputCount, setInputCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, intialState);

  // const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   // console.log(e.target.value);
  //   setInputCount(e.target.valueAsNumber);
  // };

  return (
    <section className="flex w-2/3 flex-col items-center gap-8 border-4 border-primary-500 bg-white p-8 shadow-lg">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">{state.count}</p>
      <div className="flex gap-2">
        <button onClick={() => dispatch({ type: 'decrement' })}>
          ➖ Decrement
        </button>
        <button onClick={() => dispatch({ type: 'reset' })}>🔁 Reset</button>
        <button onClick={() => dispatch({ type: 'increment' })}>
          ➕ Increment
        </button>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch({ type: 'update' });
          }}
        >
          <input
            type="number"
            value={state.draftCount}
            onChange={(e) =>
              dispatch({ type: 'change', payload: e.target.valueAsNumber })
            }
          />
          <button type="submit">Update Counter</button>
        </form>
      </div>
    </section>
  );
};

export default Counter;
