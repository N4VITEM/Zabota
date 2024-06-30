import React, { useEffect, useState } from "react";
import getTable from "../Services/DataBase.service.tsx";
import { tableDto } from "../DTO/DataBase.dto";
import { Table } from "react-bootstrap";
import '../Style/DataBase.table.css';

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

    function handleHeader(isMISintegration, isMoreThan5M) {
        if (isMISintegration === true && isMoreThan5M === true) { return 'highlight-green' }
        if (isMISintegration === false && isMoreThan5M === true) return 'highlight-yellow';
        if (isMISintegration === true && isMoreThan5M === false) return 'highlight-orange';
        if (isMISintegration === false && isMoreThan5M === false) return 'highlight-red';
    }

    function handleStatus(isMoreThan5M, isMISintegration) {
        if (isMISintegration === true && isMoreThan5M === true) { return 'СРОЧНО В РАБОТУ !' }
        if (isMISintegration === false && isMoreThan5M === true) return 'Отправить якорь';
        if (isMISintegration === true && isMoreThan5M === false) return 'проверить через год';
        if (isMISintegration === false && isMoreThan5M === false) return 'забыть';
    }

    return (
        <div className="Component">
            {data ? <Table striped >
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
                        <th>выручка больше 10 млн</th>
                        <th>интеграция МИС</th>
                        <th>роль</th>
                        <th>проблема</th>
                        <th>выручка</th>
                        <th>МИС</th>
                        <th>Сегментирование</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user) => (
                            <tr key={user.id}>
                                <td className={`${handleHeader(user.isMISintegration, user.isMoreThan5M)}`}>{user.id}</td>
                                <td className={`${handleHeader(user.isMISintegration, user.isMoreThan5M)}`}>{user.UTM}</td>
                                <td className={`${handleHeader(user.isMISintegration, user.isMoreThan5M)}`}>{user.name}</td>
                                <td className={`${handleHeader(user.isMISintegration, user.isMoreThan5M)}`}>{user.surname}</td>
                                <td className={`${handleHeader(user.isMISintegration, user.isMoreThan5M)}`}>{user.thirdname}</td>
                                <td className={`${handleHeader(user.isMISintegration, user.isMoreThan5M)}`}>{user.email}</td>
                                <td className={`${handleHeader(user.isMISintegration, user.isMoreThan5M)}`}>{user.phone}</td>
                                <td className={`${handleHeader(user.isMISintegration, user.isMoreThan5M)}`}>{user.date.toString()}</td>
                                <td className={`${handleHeader(user.isMISintegration, user.isMoreThan5M)}`}>{user.isMoreThan5M === true ? 'V' : '-'}</td>
                                <td className={`${handleHeader(user.isMISintegration, user.isMoreThan5M)}`}>{user.isMISintegration === true ? 'V' : '-'}</td>
                                <td className={`${handleHeader(user.isMISintegration, user.isMoreThan5M)}`}>{user.role}</td>
                                <td className={`${handleHeader(user.isMISintegration, user.isMoreThan5M)}`}>{user.problem}</td>
                                <td className={`${handleHeader(user.isMISintegration, user.isMoreThan5M)}`}>{user.revenue}</td>
                                <td className={`${handleHeader(user.isMISintegration, user.isMoreThan5M)}`}>{user.MIS}</td>
                                <td className={`${handleHeader(user.isMISintegration, user.isMoreThan5M)}`}>{handleStatus(user.isMoreThan5M, user.isMISintegration)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table> : <h1>Загрузка...</h1>}
        </div>
    )
}