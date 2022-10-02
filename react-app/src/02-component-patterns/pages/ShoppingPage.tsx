import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import '../styles/custom-styles.css';

import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingcart';


export const ShoppingPage = () => {

  const { shoppingCart, onProductCountChange } = useShoppingCart();

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
                value={ shoppingCart[product.id]?.count || 0 }
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
                    value={ product.count }
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

        {/* <div>
          <code>
            { JSON.stringify( shoppingCart, null, 5 )}
          </code>
        </div> */}
        
    </div>
  )
}
