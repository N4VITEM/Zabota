import { Injectable } from "@nestjs/common";
import { where } from "sequelize";
import { CreateUserDto } from "src/DTO/User.dto";
import { User } from "src/Models/User.model";


@Injectable()
export class UsersService {
    async getAll(): Promise<User[]> {
        return User.findAll();
    }

    async getById(ID: number): Promise<User> {
        return User.findOne({
            where: {
                id: ID
            }
        })
    }

    async create(createUserDto: CreateUserDto) {
        User.create(createUserDto)
    }

    async delete(ID: number) {
        User.destroy({
            where: {
                id: ID
            }
        })
    }
}