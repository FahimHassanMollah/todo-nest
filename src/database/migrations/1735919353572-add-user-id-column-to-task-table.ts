import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserIdColumnToTaskTable1735919353572 implements MigrationInterface {
    name = 'AddUserIdColumnToTaskTable1735919353572'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`task\` ADD \`user_id\` int NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`task\` DROP COLUMN \`user_id\``);
    }

}
