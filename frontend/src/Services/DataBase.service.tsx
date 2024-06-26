import axios from "axios"
//import * as dotenv from "dotenv"
import { tableDto } from "../DTO/DataBase.dto"
//dotenv.config()

export default function getTable(): Promise<tableDto[]> {
    return axios.get(`${process.env.url}/user/getAll`).then((response)=> response.data).catch((err) => console.log(err))
}