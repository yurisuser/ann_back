import {MigrationInterface, QueryRunner} from "typeorm";

export class cyrillic1572720551688 implements MigrationInterface {
    name = 'cyrillic1572720551688'
//https://tableplus.com/blog/2018/08/mysql-how-to-rename-or-change-data-type-of-a-column.html
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `firstName`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `firstName` varchar(191) CHARACTER SET \"utf8mb4\" COLLATE \"utf8mb4_unicode_ci\" NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `patronymic`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `patronymic` varchar(191) CHARACTER SET \"utf8mb4\" COLLATE \"utf8mb4_unicode_ci\" NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `lastName`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `lastName` varchar(191) CHARACTER SET \"utf8mb4\" COLLATE \"utf8mb4_unicode_ci\" NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `lastName`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `lastName` varchar(255) NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `patronymic`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `patronymic` varchar(255) NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `firstName`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `firstName` varchar(255) NULL", undefined);
    }

}
