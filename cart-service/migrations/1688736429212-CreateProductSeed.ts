import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateProductSeed1688736429212 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.query(`
            INSERT INTO public.products
            ("productId", quantity, "cartShoppingCartId", price)
            VALUES(4244, 2, 8, 1000.00);
            INSERT INTO public.products
            ("productId", quantity, "cartShoppingCartId", price)
            VALUES(1234, 2, 8, 22.32);
        `);
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.query(`
            DELETE FROM public.products
            WHERE "productId"=4244;
            DELETE FROM public.products
            WHERE "productId"=1234;
        `);
    }

}
