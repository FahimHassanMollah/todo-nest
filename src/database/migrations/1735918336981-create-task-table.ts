import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTaskTable1735918336981 implements MigrationInterface {
    name = 'CreateTaskTable1735918336981'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`task\` (\`id\` int NOT NULL AUTO_INCREMENT, \`task\` varchar(255) NOT NULL, \`is_completed\` tinyint NOT NULL, \`created_at\` varchar(255) NOT NULL, \`updated_at\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`task\``);
    }

}
