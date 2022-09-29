import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import '../styles/custom-styles.css';
import { Product } from '../interfaces/interfaces';
import { useState } from 'react';


const product1 = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

const product2 = {
    id: '2',
      title: 'Coffee Mug - Meme',
      img: './coffee-mug2.png'
}

const products: Product[] = [ product1, product2 ];

interface ProducInCart extends Product {
  count: number,
}

export const ShoppingPage = () => {

  const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProducInCart}>({});

  const onProductCountChange = ( {count, product }: { count: number, product: Product } ) => {
    // console.log('onProductCountChange', count, product );

    setShoppingCart( oldShoppingCart => {

      if( count === 0 ) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return {
          ...rest
        }
      }
      return {
        ...oldShoppingCart,
        [ product.id ]: {...product, count }
      }
    } )
  }

  /* const [shoppingCart, setShoppingCart] = useState({
    '1': { ...product1, count: 10 },
    '2': { ...product2, count: 10 },
  }) */
  
  return (
    <div >
        <h1>Shopping Store</h1>
        <hr />

        <div style={{
            display:'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>

        {/* <ProductCard product={product} >
            <ProductCard.Image />
            <ProductCard.Title title={'Chepito'}/>
            <ProductCard.Buttons increaseBy={ function ( value: number ): void  {
              throw new Error('Function not implemented.');
            }}
            counter={0} />
        </ProductCard> */}

        {/* <ProductCard 
            product={product1} 
            className='bg-dark text-white'>
            <ProductCard.Image className='custom-image'/>
            <ProductCard.Title className='text-bold'/>
            <ProductCard.Buttons className='custom-buttons'/>
        </ProductCard>
         */}

          {
            products.map( product => (
              <ProductCard 
                key={ product.id }
                product={product }
                className='bg-dark text-white'
                onChange={  onProductCountChange }
                >
                <ProductImage className='custom-image'/>
                <ProductTitle className='text-bold'/>
                <ProductButtons className='custom-buttons'/>
              </ProductCard>
            ) ) 
          }

        </div>

        <div className='shopping-cart'>

              {
                Object.entries( shoppingCart).map( ( [ key, product] )  => ( 
                  <ProductCard
                    key={ key }
                    product={ product }
                    className='bg-dark text-white'
                    style={{ width:'100px' }}
                    // onChange={ () => onProductCountChange() }
                    >
                    <ProductImage className='custom-image'/>
                    <ProductButtons 
                      className='custom-buttons'
                      style={{
                        display: 'flex',
                        justifyContent: 'center',  
                      }}/>
                  </ProductCard>
                ) )
              }
              
              
        </div>

        <div>
          <code>
            { JSON.stringify( shoppingCart, null, 5 )}
          </code>
        </div>
        
    </div>
  )
}
