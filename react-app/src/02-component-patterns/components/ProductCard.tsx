
import useProduct from '../hooks/useProduct';
import { createContext, ReactElement, useContext } from 'react';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps );
const { Provider } = ProductContext; 

// interface ProductButtonsProps {
//     counter: number;
//     increaseBy: ( value: number ) => void;
// }


export const ProductCard = ({children, product}: ProductCardProps ) => {

    const { counter,increaseBy } = useProduct();

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
        }}>
            <div className={ styles.productCard  }>
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

