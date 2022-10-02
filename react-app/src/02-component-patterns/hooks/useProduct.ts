import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs) => void;
    value?: number;
}

const useProduct = ( { onChange, product, value = 0 }: useProductArgs ) => {

    const [counter, setCounter] = useState( value );

    const isControlled = useRef( !!onChange )

    const increaseBy = ( value: number ) => {

        // console.log( 'insControlled', isControlled.current  );

        if ( isControlled.current ) {
            return onChange!({ count: value, product });
        }

        const newValue = Math.max( counter + value, 0 );
        setCounter( newValue );

        onChange && onChange({ count: newValue, product });
        // ? lo mismo que poner esto:
        /*if ( onChange ) {
            onChange();
        } */
    }

    useEffect(() => {
        setCounter( value );
    }, [ value ])
    

    return {
        counter,
        increaseBy
    }

}

export default useProduct;