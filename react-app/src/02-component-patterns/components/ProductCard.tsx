
import useProduct from '../hooks/useProduct';
import React, { createContext, ReactElement } from 'react';
import {  onChangeArgs, Product, ProductContextProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps );
const { Provider } = ProductContext; 

// interface ProductButtonsProps {
//     counter: number;
//     increaseBy: ( value: number ) => void;
// }


export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number; 
}


export const ProductCard = ({children, product, className, style, onChange, value  }: Props ) => {

    const { counter,increaseBy } = useProduct( { onChange,product, value });

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
        }}>
            <div className={ `${styles.productCard} ${ className }` } 
            style={ style }>    
            { children }
            {/*             
            <ProductImage img={product.img} />
            <img className={ styles.productImg }  src={noImage} alt='Coffee Mug'/> 
            
            <ProductTitle title={product.title } />
            <ProductButtons counter={ counter } increaseBy={ increaseBy} /> */}
            
            </div>
        </Provider>
        
    )
}

