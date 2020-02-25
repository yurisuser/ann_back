import {MigrationInterface, QueryRunner} from "typeorm";

export class catalog1582636752743 implements MigrationInterface {
    name = 'catalog1582636752743'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `catalog_type` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `viewName` varchar(191) CHARACTER SET \"utf8mb4\" COLLATE \"utf8mb4_unicode_ci\" NOT NULL, UNIQUE INDEX `IDX_e37a5c355c3b9b706f303a5f47` (`name`), UNIQUE INDEX `IDX_c73cf1d42eb79e1a7a111042b2` (`viewName`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `catalog_element` (`id` int NOT NULL AUTO_INCREMENT, `viewName` varchar(191) CHARACTER SET \"utf8mb4\" COLLATE \"utf8mb4_unicode_ci\" NULL, `img` varchar(255) NOT NULL, `catalogTypeId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `catalog_element` ADD CONSTRAINT `FK_c5cd152398f1f527420a03f69bd` FOREIGN KEY (`catalogTypeId`) REFERENCES `catalog_type`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `catalog_element` DROP FOREIGN KEY `FK_c5cd152398f1f527420a03f69bd`", undefined);
        await queryRunner.query("DROP TABLE `catalog_element`", undefined);
        await queryRunner.query("DROP INDEX `IDX_c73cf1d42eb79e1a7a111042b2` ON `catalog_type`", undefined);
        await queryRunner.query("DROP INDEX `IDX_e37a5c355c3b9b706f303a5f47` ON `catalog_type`", undefined);
        await queryRunner.query("DROP TABLE `catalog_type`", undefined);
    }

}
