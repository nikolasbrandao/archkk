import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateProductType1688521383617 implements MigrationInterface {
    name = 'UpdateProductType1688521383617'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "productId" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "products_productId_seq"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "products_productId_seq" OWNED BY "products"."productId"`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "productId" SET DEFAULT nextval('"products_productId_seq"')`);
    }

}
