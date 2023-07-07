import { IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    
    @IsNotEmpty()
    @IsNumber()
    @IsInt()
    productID: number;

    @IsNotEmpty()
    @IsNumber()
    price: number;

}
