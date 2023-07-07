import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateSeed1688735956895 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.query(`
            INSERT INTO public.carts
            ("userId", "totalQuantity", "shoppingCartId", "totalPrice")
            VALUES(42, 13586, 8, 580068.04);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.query(`
            DELETE FROM public.carts
            WHERE "shoppingCartId"=8;
        `);
    }

}
