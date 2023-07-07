import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber, Min } from 'class-validator'

export class AddProductToCartDto {
    @ApiProperty({
        example: 42,
        description: 'The id of the user',
    })
    @IsNotEmpty()
    @IsNumber()
    readonly userId: number;
    
    @ApiProperty({
        example: 4242,
        description: 'The id of the product',
    })
    @IsNotEmpty()
    @IsNumber()
    readonly productId: number;

    @ApiProperty({
        example: 422,
        description: 'The quantity of the product',
    })
    @IsNumber()
    @Min(1)
    readonly quantity: number;

    @ApiProperty({
        example: 42.42,
        description: 'The price of the product',
    })
    @IsNumber({ maxDecimalPlaces: 2 })
    @Min(0.01)
    readonly price: number;
}