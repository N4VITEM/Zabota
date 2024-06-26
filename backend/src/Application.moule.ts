import { Module } from "@nestjs/common";
import { Configuration } from "./Configuration/Configuration.module";
import { UserModule } from "./Modules/User.module";

@Module({
    imports: [Configuration, UserModule],
    controllers: [],
    providers: []
})
export class Application {}