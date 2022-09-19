import { useReducer } from 'react';

interface CounterState {
    counter:  number;
    previous: number;
    changes:  number;
}

const initialState: CounterState = {
    counter: 10,
    previous: 15,
    changes: 20,
};

type CounterAction = 
  | { type: 'IncreaseBy', payload: { value: number } }
  | { type: 'reset' };

const counterReducer = ( state: CounterState, action: CounterAction ): CounterState => {

    switch (action.type) {
      case 'reset':
          return {
            counter: 0,
            previous: 0,
            changes: 0,
            }
        break;
    
      default:
        return state;
    }
}


export const CounterReducerComponent = (  ) => {

    const [{counter}, dispatch] = useReducer( counterReducer ,initialState);

    const handleClick = ( ) => {
        // setCounter( prev => prev + 1 );
        dispatch( {type:'reset'} )
    }

  return (
    <>
        <h1>Counter Reducer: { counter }</h1>
        <button
        onClick={ handleClick }>Reset</button>

    </>
  )
}