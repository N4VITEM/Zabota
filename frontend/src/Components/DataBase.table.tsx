import React, { useEffect, useState } from "react";
import getTable from "../Services/DataBase.service.tsx";
import { tableDto } from "../DTO/DataBase.dto";
import Table from "react-bootstrap/Table";

export default function DataBaseTable() {
    const [data, setData] = useState<tableDto[]>([])

    useEffect(() => {
        getTable()
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.log(error)
            });
    }, []);
 
    return (
        <div className="Component">
            {data ? <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>UTM метка</th>
                        <th>имя</th>
                        <th>фамилия</th>
                        <th>отчество</th>
                        <th>email</th>
                        <th>телефон</th>
                        <th>выбранная дата</th>
                        <th>выручка больше 5 млн</th>
                        <th>интеграция МИС</th>
                        <th>роль</th>
                        <th>проблема</th>
                        <th>выручка</th>
                        <th>МИС</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user)=> (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.UTM}</td>
                                <td>{user.name}</td>
                                <td>{user.surname}</td>
                                <td>{user.thirdname}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.date.toString()}</td>
                                <td>{user.isMoreThan5M}</td>
                                <td>{user.isMISintegration}</td>
                                <td>{user.role}</td>
                                <td>{user.problem}</td>
                                <td>{user.revenue}</td>
                                <td>{user.MIS}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table> : <h1>Загрузка...</h1>}
        </div>
    )
}