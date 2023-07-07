import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCart1688509536416 implements MigrationInterface {
    name = 'CreateCart1688509536416'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.query(`CREATE TABLE "carts" ("shoppingCartId" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" integer NOT NULL, "totalPrice" integer NOT NULL, "totalQuantity" integer NOT NULL, CONSTRAINT "PK_d8597c69f5c9307f6e04bd2bba9" PRIMARY KEY ("shoppingCartId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "carts"`);
    }

}
