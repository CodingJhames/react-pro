import { useReducer } from 'react';
import { CounterState } from './interfaces/interfaces';
import { counterReducer } from './state/counterReducer';

/* interface CounterState {
    counter:  number;
    previous: number;
    changes:  number;
} */

/* type CounterAction = 
  | { type: 'increaseBy', payload: { value: number } }
  | { type: 'reset' }; */

/* const counterReducer = ( state: CounterState, action: CounterAction ): CounterState => {

    switch (action.type) {
      case 'reset':
          return {
            counter:  0,
            previous: 0,
            changes:  0,
            };
      case 'increaseBy':
          return {
            counter: state.counter + action.payload.value,
            previous: state.counter,
            changes: state.changes + 1, 
              
          };

        break;
    
      default:
        return state;
    }
} */

const initialState: CounterState = {
  counter: 0,
  previous:0,
  changes: 0,
};


export const CounterReducerComponent = (  ) => {

    const [ counterState, dispatch] = useReducer( counterReducer,initialState);

    const handleReset = ( ) => {
        // setCounter( prev => prev + 1 );
        dispatch( {type:'reset'} )
    }

    const increaseBy = ( value: number ) => {
      dispatch( { type:'increaseBy', payload: { value } } )
    }

  return (
    <>
        <h1>Counter Reducer Segmentado: </h1>
        <pre>
          {JSON.stringify( counterState, null, 2 )}
        </pre>
        <button
        onClick={ () => increaseBy( + 1 ) }>+ 1</button>
        <button
        onClick={ () => increaseBy( + 5) }>+ 5</button>
        <button
        onClick={ () => increaseBy(+ 10) }>+ 10</button>
        <button
        onClick={ handleReset }>Reset</button>
    </>
  )
}
