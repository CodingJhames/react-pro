import { useEffect, useState } from 'react';

const maximum_count = 10;
export const CounterEffect = (  ) => {

    const [counter, setCounter] = useState(5);

    const handleClick = ( ) => {
      
      setCounter( prev => prev + 1 );
      // if ( counter >= maximum_count ) { setCounter(  prev => prev = 10 )};
      setCounter( prev => Math.min( prev + 1, maximum_count ) );
      //  ? forma corta usada por fernando
    }

    useEffect(() => {

      if ( counter < 10 ) return;
      console.log('%cSe llegó al valor máximo','color:red; background-color: white;');

    }, [counter])
    
  return (
    <>
        <h1>CounterEffect : { counter }</h1>
        <button
        onClick={ handleClick }>+ 1</button>

    </>
  )
}
