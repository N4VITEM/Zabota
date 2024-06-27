import axios from "axios"
import { tableDto } from "../DTO/DataBase.dto"

export default function getTable(): Promise<tableDto[]> {
    console.log(`${process.env.REACT_APP_URL}/user/getAll`)
    return axios.get(`${process.env.REACT_APP_URL}/user/getAll`).then((response)=> response.data).catch((err) => console.log(err))
}