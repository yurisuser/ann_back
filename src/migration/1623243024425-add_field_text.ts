import {MigrationInterface, QueryRunner} from "typeorm";

export class addFieldText1623243024425 implements MigrationInterface {
    name = 'addFieldText1623243024425'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `catalog_element_page` ADD `text` varchar(255) NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `catalog_element_page` DROP COLUMN `text`", undefined);
    }

}
