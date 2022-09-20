import { counterReducer } from '../state/counterReducer';


export type CounterAction = 
| { type: 'increaseBy', payload: { value: number } }
| { type: 'reset' };

/* export const doReset = ():CounterAction => {
    return {
        type: 'reset'
    }
} */

export const doReset = ():CounterAction => ({type: 'reset'}) 
// ? refactorización del actioncreator hecha por Fernando

export const doIncreaseBy = ( value: number ):CounterAction => ({ 
    type: 'increaseBy', 
    payload:{ 
        value 
    }  
});