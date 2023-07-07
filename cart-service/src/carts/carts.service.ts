import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartEntity } from './entities/cart.entity';
import { Repository } from 'typeorm';
import { AddProductToCartDto } from './dto/AddProductToCart.dto';
import * as currency from 'currency.js';
import dataSource from 'src/db/data-source-cli';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class CartsService {

    constructor(
        @InjectRepository(CartEntity)
        private readonly cartRepository: Repository<CartEntity>,
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository<ProductEntity>,
    ) {}

    async findAll(): Promise<CartEntity[]> {
        return await this.cartRepository.find();
    }
    
    async findOne(id: number): Promise<CartEntity> {
        return await this.cartRepository.findOne({ where : { shoppingCartId: id }});
    }

    async addProductToCart(productToCart: AddProductToCartDto): Promise<CartEntity> {
        let cart = await this.cartRepository.findOne({ where: { userId: productToCart.userId} });
        const totalPrice = currency(productToCart.price).multiply(productToCart.quantity).value;

        if (cart) {
            cart = this.upsertProductsInCart(cart, productToCart);
            cart.totalQuantity = +cart.totalQuantity + +productToCart.quantity;
            cart.totalPrice = currency(cart.totalPrice).add(totalPrice).value;
        } else {
            cart = this.cartRepository.create({
                userId: productToCart.userId,
                totalQuantity: productToCart.quantity,
                totalPrice,
                products: [productToCart],
            });
        }
        return await this.cartRepository.save(cart);
    }

    private upsertProductsInCart(cart: CartEntity, productToCart: AddProductToCartDto): CartEntity {
        const index = cart.products.findIndex(product => product.productId === productToCart.productId);

        if (index > -1) cart.products[index] = productToCart;
        else cart.products.push(productToCart);
        
        return cart;
    }

    async deleteProductInCart(cartId: number, productId: number): Promise<boolean> {
        const result = await this.productRepository
                .createQueryBuilder()
                .delete()
                .where('productId = :productId', { productId })
                .andWhere('cartShoppingCartId = :cartId', { cartId })
                .execute();
        return result.affected > 0;
    }
}
