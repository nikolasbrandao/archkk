import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CartsService } from './carts.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AddProductToCartDto } from './dto/AddProductToCart.dto';

@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @ApiOperation({ summary: 'Add Product to Cart'})
  @ApiResponse({ status: 201, description: 'Return all infos cart' })
  @Post()
  addProductToCart(@Body() addProductDto: AddProductToCartDto) {
      return this.cartsService.addProductToCart(addProductDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartsService.findOne(+id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'delete one item in cart'})
  @ApiResponse({ status: 200, description: 'Return true or false to confirm operation' })
  async delete(@Param('id') id: number, @Query('productId') productId: number) {
      return await this.cartsService.remove(id, productId);
  }
}
