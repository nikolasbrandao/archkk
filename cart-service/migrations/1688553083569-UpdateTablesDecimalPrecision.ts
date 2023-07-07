import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateTablesDecimalPrecision1688553083569 implements MigrationInterface {
    name = 'UpdateTablesDecimalPrecision1688553083569'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "price" TYPE numeric(12,2)`);
        await queryRunner.query(`ALTER TABLE "carts" ALTER COLUMN "totalPrice" TYPE numeric(12,2)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "carts" ALTER COLUMN "totalPrice" TYPE numeric(6,2)`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "price" TYPE numeric(6,2)`);
    }

}
