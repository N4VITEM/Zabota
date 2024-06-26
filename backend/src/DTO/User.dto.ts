export class CreateUserDto {
    id: number;
    UTM: string;
    name: string;
    surname: string;
    thirdname: string;
    email: string;
    phone: string;
    date: Date;
    isMoreThan5M: boolean;
    isMISintegration: boolean;
    role: string;
    problem: string;
    revenue: number;
    MIS: string
}