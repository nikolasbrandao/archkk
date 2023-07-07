import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product, ProductDocument } from './entities/product.entity';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsService {

  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<ProductDocument>,
  ) {}

  create(createProductDto: CreateProductDto): Promise<ProductDocument> {
    const product = new this.productModel({ ...createProductDto, _id: new Types.ObjectId(createProductDto.productID) });
    return product.save();
  }

  findAll(): Promise<ProductDocument[]> {
    return this.productModel.find().exec();
  }

  async findOne(productID: number) {
    return await this.productModel.findOne({productID}).exec();
  }

}
