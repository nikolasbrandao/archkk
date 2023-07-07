import { ProductEntity } from "../../products/entities/product.entity";

export class CartEntity {
    shoppingCartId: number;
    
    userId: number;

    totalPrice: number;

    totalQuantity: number;

    products: ProductEntity[];
}