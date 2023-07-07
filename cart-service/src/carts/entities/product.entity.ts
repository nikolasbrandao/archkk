import { Entity, Column, ManyToOne, Relation, PrimaryColumn, JoinColumn,  } from "typeorm";
import { CartEntity } from "./cart.entity";

@Entity({name: 'products'})
export class ProductEntity {
    @PrimaryColumn({type: 'int'})
    productId: number;

    @Column('decimal', {precision: 12, scale: 2})
    price: number;

    @Column()
    quantity: number;

    @ManyToOne(() => CartEntity, cart => cart.products)
    cart?: Relation<CartEntity>;
}
