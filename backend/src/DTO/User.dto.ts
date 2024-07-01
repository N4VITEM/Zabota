export class CreateUserDto {
    id: number;
    UTM: string;
    name: string;
    clinic: string;
    email: string;
    phone: string;
    date: Date;
    isMoreThan5M: boolean;
    isMISintegration: boolean;
    role: string;
    problem: string;
    revenue: string;
    MIS: string;
    segmentation: number;
}