import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatePriceType1688517411577 implements MigrationInterface {
    name = 'UpdatePriceType1688517411577'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" numeric(6,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "carts" DROP COLUMN "totalPrice"`);
        await queryRunner.query(`ALTER TABLE "carts" ADD "totalPrice" numeric(6,2) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "carts" DROP COLUMN "totalPrice"`);
        await queryRunner.query(`ALTER TABLE "carts" ADD "totalPrice" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" integer NOT NULL`);
    }

}
