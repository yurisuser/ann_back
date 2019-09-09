import {MigrationInterface, QueryRunner} from "typeorm";

export class user1568020053821 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP INDEX `IDX_a62473490b3e4578fd683235c5` ON `user`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `login`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `passwordHash`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `role`");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` ADD `role` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `passwordHash` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `login` varchar(255) NOT NULL");
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_a62473490b3e4578fd683235c5` ON `user` (`login`)");
    }

}
