import {MigrationInterface, QueryRunner} from "typeorm";

export class files1584692911975 implements MigrationInterface {
    name = 'files1584692911975'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `files` (`id` int NOT NULL AUTO_INCREMENT, `originalName` varchar(191) CHARACTER SET \"utf8mb4\" COLLATE \"utf8mb4_unicode_ci\" NOT NULL, `name` varchar(255) NOT NULL, UNIQUE INDEX `IDX_fafa88e4e6d0451ec7cfdcf17a` (`originalName`), UNIQUE INDEX `IDX_332d10755187ac3c580e21fbc0` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP INDEX `IDX_332d10755187ac3c580e21fbc0` ON `files`", undefined);
        await queryRunner.query("DROP INDEX `IDX_fafa88e4e6d0451ec7cfdcf17a` ON `files`", undefined);
        await queryRunner.query("DROP TABLE `files`", undefined);
    }

}
