import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

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
      
      gsap.to('h2',{y:-10, duration: 0.2, ease:'ease.out' }).then( () => {
          gsap.to('h2', { y:0, duration: 1, ease:'bounce.out' } )
      } )

    }, [counter])
    
  return (
    <>
        <h1>CounterEffect : </h1>
        <h2>{ counter }</h2>
        <button
        onClick={ handleClick }>+ 1</button>

    </>
  )
}
