// import { useEffect, useRef, useState } from 'react';
// import { gsap } from 'gsap';
import { useCounter } from '../hooks/useCounter';

// const maximum_count = 10;

export const CounterHook = (  ) => {

    // const [counter, setCounter] = useState(5);
    // const counterElement = useRef<HTMLHeadingElement>(null);

    // const handleClick = ( ) => {
      
    //   setCounter( prev => prev + 1 );
    //   // if ( counter >= maximum_count ) { setCounter(  prev => prev = 10 )};
    //   setCounter( prev => Math.min( prev + 1, maximum_count ) );
    //   //  ? forma corta usada por fernando
    // }

    // useEffect(() => {

    //   if ( counter < 10 ) return;
    //   console.log('%cSe llegó al valor máximo','color:red; background-color: white;');
      
    //   const timeLine = gsap.timeline();

    //   timeLine.to(counterElement.current ,{y:-10, duration: 0.2, ease:'ease.out' })
    //           .to(counterElement.current , { y:0, duration: 1, ease:'bounce.out' });

    //   /* gsap.to(counterElement.current ,{y:-10, duration: 0.2, ease:'ease.out' }).then( () => {
    //       gsap.to(counterElement.current , { y:0, duration: 1, ease:'bounce.out' } )
    //   } ) */

    // }, [counter])

    const {counter,counterElement,handleClick } = useCounter();
    
  return (
    <>
        <h1>CounterHook: </h1>
        <h2 ref={  counterElement } >{ counter }</h2>
        <button
        onClick={ handleClick }>+ 1</button>

    </>
  )
}
