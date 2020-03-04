import {MigrationInterface, QueryRunner} from "typeorm";

export class addOrder1583315582323 implements MigrationInterface {
    name = 'addOrder1583315582323'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `catalog_type` ADD `order` int NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `catalog_element` ADD `order` int NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `catalog_element` DROP COLUMN `order`", undefined);
        await queryRunner.query("ALTER TABLE `catalog_type` DROP COLUMN `order`", undefined);
    }

}
