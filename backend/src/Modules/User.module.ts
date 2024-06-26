import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UserController } from "src/Controllers/User.controller";
import { User } from "src/Models/User.model";
import { UsersService } from "src/Services/User.service";

@Module({
    imports: [ SequelizeModule.forFeature([User])],
    controllers: [UserController],
    providers: [UsersService]
})
export class UserModule {}