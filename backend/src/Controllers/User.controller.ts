import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CreateUserDto } from "src/DTO/User.dto";
import { User } from "src/Models/User.model";
import { UsersService } from "src/Services/User.service";

@Controller('user')
export class UserController {
    constructor ( private readonly userService: UsersService) {}
    
    @Get('getAll')
    async getAll(): Promise<User[]> {
        return this.userService.getAll();
    }

    @Get('getById/:id')
    async getById(@Param('id') id: number): Promise<User> {
        return this.userService.getById(id);
    }

    @Post('create')
    async create(@Body() createUserDto: CreateUserDto){
        return this.create(createUserDto)
    }

    @Delete('delete/:id')
    async delete(@Param('id') id: number) {
        return this.delete(id)
    }
}