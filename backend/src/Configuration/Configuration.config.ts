import { SequelizeModuleOptions } from "@nestjs/sequelize";
import * as dotenv from "dotenv";
dotenv.config();

export const config: SequelizeModuleOptions = {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    autoLoadModels: true,
    synchronize: true
}