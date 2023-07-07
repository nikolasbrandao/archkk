import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateCartTable1688516728463 implements MigrationInterface {
    name = 'UpdateCartTable1688516728463'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_1f460718fe3736a8c7c03e0ec12"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "cartShoppingCartId"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "cartShoppingCartId" integer`);
        await queryRunner.query(`ALTER TABLE "carts" DROP CONSTRAINT "PK_d8597c69f5c9307f6e04bd2bba9"`);
        await queryRunner.query(`ALTER TABLE "carts" DROP COLUMN "shoppingCartId"`);
        await queryRunner.query(`ALTER TABLE "carts" ADD "shoppingCartId" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "carts" ADD CONSTRAINT "PK_d8597c69f5c9307f6e04bd2bba9" PRIMARY KEY ("shoppingCartId")`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_1f460718fe3736a8c7c03e0ec12" FOREIGN KEY ("cartShoppingCartId") REFERENCES "carts"("shoppingCartId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_1f460718fe3736a8c7c03e0ec12"`);
        await queryRunner.query(`ALTER TABLE "carts" DROP CONSTRAINT "PK_d8597c69f5c9307f6e04bd2bba9"`);
        await queryRunner.query(`ALTER TABLE "carts" DROP COLUMN "shoppingCartId"`);
        await queryRunner.query(`ALTER TABLE "carts" ADD "shoppingCartId" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "carts" ADD CONSTRAINT "PK_d8597c69f5c9307f6e04bd2bba9" PRIMARY KEY ("shoppingCartId")`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "cartShoppingCartId"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "cartShoppingCartId" uuid`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_1f460718fe3736a8c7c03e0ec12" FOREIGN KEY ("cartShoppingCartId") REFERENCES "carts"("shoppingCartId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
