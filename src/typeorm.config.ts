import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { Task } from './task/entities/task.entity';
import { config } from 'dotenv';
config({
    path: `.env.${process.env.NODE_ENV}`,
});
const configService = new ConfigService();
console.log(process.env.DATABASE_USERNAME);

export default new DataSource({
    type: 'mysql',
    host: configService.get<string>('DATABASE_HOST'),
    port: configService.get<number>('DATABASE_PORT'),
    username: configService.get<string>('DATABASE_USERNAME'),
    password: configService.get('DATABASE_PASSWORD') || '',
    database: configService.get<string>('DATABASE_NAME'),
    // entities: [__dirname + '/**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/database/migrations/**/*{.ts,.js}'],
    entities: [Task],
    synchronize: true,
    logging: true,
});
