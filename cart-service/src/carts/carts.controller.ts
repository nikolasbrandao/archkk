import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartEntity } from './entities/cart.entity';
import { AddProductToCartDto } from './dto/AddProductToCart.dto';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('carts')
export class CartsController {

    constructor(private readonly cartsService: CartsService) {}

    @Get()
    @ApiOperation({ summary: 'return all carts'})
    findAll(): Promise<CartEntity[]> {
        return this.cartsService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'return one cart'})
    findOne(id: number): Promise<CartEntity> {
        const cart = this.cartsService.findOne(id);

        if (!cart) {
            throw new Error('Cart not found');
        }

        return cart;
    }

    @Delete(':id')
    @ApiOperation({ summary: 'delete one item in cart'})
    @ApiResponse({ status: 200, description: 'Return true or false to confirm operation' })
    async delete(@Param('id') id: number, @Query('productId') productId: number): Promise<boolean> {
        const cart = await this.cartsService.findOne(id);

        if (!cart) {
            throw new Error('Cart not found');
        }

        return await this.cartsService.deleteProductInCart(id, productId);
    }
    
    @Post()
    @ApiOperation({ summary: 'Add Product to Cart'})
    @ApiResponse({ status: 201, description: 'Return all infos cart' })
    async addProductToCart(@Body() addProductDto: AddProductToCartDto) {
        return this.cartsService.addProductToCart(addProductDto);
    }

}
