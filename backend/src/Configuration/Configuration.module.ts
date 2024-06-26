import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { config } from "./Configuration.config";

@Module({
    imports: [
        ConfigModule.forRoot(),
        SequelizeModule.forRoot(config)
    ],
    controllers: [],
    providers: []
})
export class Configuration {}