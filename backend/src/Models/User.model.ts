import { AllowNull, AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table
export class User extends Model<User> {
    @AutoIncrement
    @PrimaryKey
    @Column({
        type: DataType.INTEGER
    })
    id: number;

    @Column({
        type: DataType.STRING
    })
    UTM: string;

    @Column({
        type: DataType.STRING
    })
    name: string; 

    @Column({
        type: DataType.STRING
    })
    surname: string;

    @AllowNull
    @Column({
        type: DataType.STRING
    })
    thirdname: string;

    @Column({
        type: DataType.STRING
    })
    email: string;

    @Column({
        type: DataType.STRING
    })
    phone: string;

    @Column({
        type: DataType.DATE
    })
    date: Date;

    @Column({
        type: DataType.BOOLEAN
    })
    isMoreThan5M: boolean;

    @Column({
        type: DataType.BOOLEAN
    })
    isMISintegration: boolean;

    @Column({
        type: DataType.STRING
    })
    role: string;

    @Column({
        type: DataType.STRING
    })
    problem: string;

    @Column({
        type: DataType.FLOAT
    })
    revenue: number;

    @Column({
        type: DataType.STRING
    })
    MIS: string;

}