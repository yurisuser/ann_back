import {MigrationInterface, QueryRunner} from "typeorm";

export class init1572021183924 implements MigrationInterface {
    name = 'init1572021183924'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `role` (`id` int NOT NULL AUTO_INCREMENT, `role` varchar(255) NOT NULL, UNIQUE INDEX `IDX_367aad98203bd8afaed0d70409` (`role`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `login` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `firstName` varchar(255) NULL, `patronymic` varchar(255) NULL, `lastName` varchar(255) NULL, `registrationDate` datetime NULL, `roleId` int NULL, UNIQUE INDEX `IDX_a62473490b3e4578fd683235c5` (`login`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_c28e52f758e7bbc53828db92194` FOREIGN KEY (`roleId`) REFERENCES `role`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_c28e52f758e7bbc53828db92194`", undefined);
        await queryRunner.query("DROP INDEX `IDX_a62473490b3e4578fd683235c5` ON `user`", undefined);
        await queryRunner.query("DROP TABLE `user`", undefined);
        await queryRunner.query("DROP INDEX `IDX_367aad98203bd8afaed0d70409` ON `role`", undefined);
        await queryRunner.query("DROP TABLE `role`", undefined);
    }

}
