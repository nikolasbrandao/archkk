import { Entity, PrimaryGeneratedColumn, Column, OneToMany,  } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity({name: 'carts'})
export class CartEntity {
    @PrimaryGeneratedColumn('increment', {type: 'int'})
    shoppingCartId: number;
    
    @Column()
    userId: number;

    @Column('decimal', {precision: 12, scale: 2})
    totalPrice: number;

    @Column()
    totalQuantity: number;

    @OneToMany( () => ProductEntity, product => product.cart, { cascade: true, eager: true })
    products: ProductEntity[];
}