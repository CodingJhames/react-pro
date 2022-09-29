import { useState } from "react";
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs) => void;
}



const useProduct = ( { onChange, product }: useProductArgs ) => {

    const [counter, setCounter] = useState(0);

    const increaseBy = ( value: number ) => {

        const newValue = Math.max( counter + value, 0 );
        setCounter( newValue );

        onChange && onChange({ count: newValue, product });
        // ? lo mismo que poner esto:
        /*if ( onChange ) {
            onChange();
        } */
    }

    return {
        counter,
        increaseBy
    }

}

export default useProduct;