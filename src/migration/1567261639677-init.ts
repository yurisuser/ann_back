import {MigrationInterface, QueryRunner} from "typeorm";

export class init1567261639677 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `login` varchar(255) NOT NULL, `passwordHash` varchar(255) NOT NULL, UNIQUE INDEX `IDX_a62473490b3e4578fd683235c5` (`login`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP INDEX `IDX_a62473490b3e4578fd683235c5` ON `user`");
        await queryRunner.query("DROP TABLE `user`");
    }

}
