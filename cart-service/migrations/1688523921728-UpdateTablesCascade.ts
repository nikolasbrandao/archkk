import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateTablesCascade1688523921728 implements MigrationInterface {
    name = 'UpdateTablesCascade1688523921728'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_1f460718fe3736a8c7c03e0ec12"`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_1f460718fe3736a8c7c03e0ec12" FOREIGN KEY ("cartShoppingCartId") REFERENCES "carts"("shoppingCartId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_1f460718fe3736a8c7c03e0ec12"`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_1f460718fe3736a8c7c03e0ec12" FOREIGN KEY ("cartShoppingCartId") REFERENCES "carts"("shoppingCartId") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
