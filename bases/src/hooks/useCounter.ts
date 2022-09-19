import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

// const maximum_count = 10;

export const useCounter = ({ maxCount = 1}) => {

    const [counter, setCounter] = useState(5);
    const elementToAnimate = useRef<HTMLHeadingElement>(null);

    const timeLine = useRef(gsap.timeline());

    const handleClick = ( ) => {
      
      setCounter( prev => prev + 1 );
      // if ( counter >= maximum_count ) { setCounter(  prev => prev = 10 )};
      setCounter( prev => Math.min( prev + 1, maxCount ) );
      //  ? forma corta usada por fernando
    }

    useLayoutEffect(() => {

        if( !elementToAnimate.current ) return;

        timeLine.current.to(elementToAnimate.current ,{y:-10, duration: 0.2, ease:'ease.out' })
                        .to(elementToAnimate.current , { y:0, duration: 1, ease:'bounce.out' })
                        .pause()

    }, [])

    useEffect(() => {
        // if( counter < maxCount ) return;
        timeLine.current.play(0);

    //   if ( counter < 10 ) return;
    //   console.log('%cSe llegó al valor máximo','color:red; background-color: white;');
      
    //   const timeLine = gsap.timeline();

    //   timeLine.current.to(counterElement.current ,{y:-10, duration: 0.2, ease:'ease.out' })
    //           .to(counterElement.current , { y:0, duration: 1, ease:'bounce.out' });

      /* gsap.to(counterElement.current ,{y:-10, duration: 0.2, ease:'ease.out' }).then( () => {
          gsap.to(counterElement.current , { y:0, duration: 1, ease:'bounce.out' } )
      } ) */

    }, [counter])
    
    
    return {
        counter,
        elementToAnimate,
        handleClick,
    }


}

