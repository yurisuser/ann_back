import {MigrationInterface, QueryRunner} from "typeorm";

export class galery1585821593044 implements MigrationInterface {
    name = 'galery1585821593044'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `galery_type` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `viewName` varchar(191) CHARACTER SET \"utf8mb4\" COLLATE \"utf8mb4_unicode_ci\" NOT NULL, `order` int NOT NULL, UNIQUE INDEX `IDX_559f8a5b7bc5ae3f9e257c9970` (`name`), UNIQUE INDEX `IDX_b7632ed401c7cf82f6cfb38063` (`viewName`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `galery_element` (`id` int NOT NULL AUTO_INCREMENT, `viewName` varchar(191) CHARACTER SET \"utf8mb4\" COLLATE \"utf8mb4_unicode_ci\" NULL, `img` varchar(255) NOT NULL, `order` int NOT NULL, `galeryTypeId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `galery_element` ADD CONSTRAINT `FK_6ae4c6378559bbb2c0470cf9f62` FOREIGN KEY (`galeryTypeId`) REFERENCES `galery_type`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `galery_element` DROP FOREIGN KEY `FK_6ae4c6378559bbb2c0470cf9f62`", undefined);
        await queryRunner.query("DROP TABLE `galery_element`", undefined);
        await queryRunner.query("DROP INDEX `IDX_b7632ed401c7cf82f6cfb38063` ON `galery_type`", undefined);
        await queryRunner.query("DROP INDEX `IDX_559f8a5b7bc5ae3f9e257c9970` ON `galery_type`", undefined);
        await queryRunner.query("DROP TABLE `galery_type`", undefined);
    }

}
