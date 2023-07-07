import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { DTOTemplate } from "src/template/dto.template";

@Schema({ timestamps: true, })
export class Product extends DTOTemplate{

    @Prop({ required: true, unique: true, })
    productID: number;

    @Prop({ required: true, })
    price: number;

}

export type ProductDocument = Product & Document;
export const ProductSchema = SchemaFactory.createForClass(Product);
