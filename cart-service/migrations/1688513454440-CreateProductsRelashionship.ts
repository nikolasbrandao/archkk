import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProductsRelashionship1688513454440 implements MigrationInterface {
    name = 'CreateProductsRelashionship1688513454440'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("productId" SERIAL NOT NULL, "price" integer NOT NULL, "quantity" integer NOT NULL, "cartShoppingCartId" uuid, CONSTRAINT "PK_7b3b507508cd0f86a5b2e923459" PRIMARY KEY ("productId"))`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_1f460718fe3736a8c7c03e0ec12" FOREIGN KEY ("cartShoppingCartId") REFERENCES "carts"("shoppingCartId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_1f460718fe3736a8c7c03e0ec12"`);
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
