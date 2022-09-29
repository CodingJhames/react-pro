
import { Props as ProductcardProps } from "../components/ProductCard";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductButtonProps } from "../components/ProductButtons ";


/* export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
}
 */

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: ( value: number ) => void;
    product: Product;

}

export interface ProductCardHOCProps {
    ({ children, product }: ProductcardProps ): JSX.Element,
    Title:   (Props: ProductTitleProps ) => JSX.Element,
    Image:   (Props: ProductImageProps ) => JSX.Element,
    Buttons: (Props: ProductButtonProps ) => JSX.Element,
}

export interface onChangeArgs {
    product: Product;
    count: number
}
