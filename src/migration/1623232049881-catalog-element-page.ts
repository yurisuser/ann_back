import {MigrationInterface, QueryRunner} from "typeorm";

export class catalogElementPage1623232049881 implements MigrationInterface {
    name = 'catalogElementPage1623232049881'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `catalog_element_page` (`id` int NOT NULL AUTO_INCREMENT, `headText` varchar(255) NOT NULL, `img` varchar(255) NOT NULL, `paragraphText` varchar(255) NOT NULL, `spreadsheetId` varchar(255) NOT NULL, `spreadSheetPageNum` int NOT NULL, `catalogElementId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `catalog_element_page` DROP FOREIGN KEY `FK_b22d33eee12c850d6b09f471a8e`", undefined);
    }
}
