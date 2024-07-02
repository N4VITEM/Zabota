import React, { useEffect, useState } from "react";
import getTable from "../Services/DataBase.service.tsx";
import { tableDto } from "../DTO/DataBase.dto";
import { Table } from "react-bootstrap";
import '../Style/DataBase.table.css';
import table_img from '../media/table.jpg';

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

    function handleHeader(segmentation) {
        if (segmentation == 4) { return 'highlight-green' }
        if (segmentation == 3) return 'highlight-yellow';
        if (segmentation == 2) return 'highlight-orange';
        if (segmentation <= 0) return 'highlight-red';
    }

    function handleStatus(segmentation) {
        if (segmentation == 4) { return 'СРОЧНО В РАБОТУ !' }
        if (segmentation == 3) return 'Отправить якорь и проверить';
        if (segmentation == 2) return 'Отправить якорь';
        if (segmentation == 1) return 'проверить через год';
        if (segmentation <= 0) return 'забыть';
    }

    return (
        <div className="Component">
            <div className="Allias">
                <img className="Table-Image" src={table_img} />
            </div>
            <div className="Table-Container">
                {data ? <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>UTM</th>
                            <th>USER</th>
                            <th>SOURCE</th>
                            <th>ФИО</th>
                            <th>клиника</th>
                            <th>email</th>
                            <th>телефон</th>
                            <th>выбранная дата</th>
                            <th>роль</th>
                            <th>больше 10 млн</th>
                            <th>МИС интеграция</th>
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
                                    <td className={`${handleHeader(user.segmentation)}`}>{user.id}</td>
                                    <td className={`${handleHeader(user.segmentation)}`}>{user.UTM}</td>
                                    <td className={`${handleHeader(user.segmentation)}`}>{user.USER}</td>
                                    <td className={`${handleHeader(user.segmentation)}`}>{user.SOURCE}</td>
                                    <td className={`${handleHeader(user.segmentation)}`}>{user.name}</td>
                                    <td className={`${handleHeader(user.segmentation)}`}>{user.clinic}</td>
                                    <td className={`${handleHeader(user.segmentation)}`}>{user.email}</td>
                                    <td className={`${handleHeader(user.segmentation)}`}>{user.phone}</td>
                                    <td className={`${handleHeader(user.segmentation)}`}>{user.date.toString()}</td>
                                    <td className={`${handleHeader(user.segmentation)}`}>{user.role}</td>
                                    <td className={`${handleHeader(user.segmentation)}`}>{user.isMoreThan5M === true ? 'V' : ''}</td>
                                    <td className={`${handleHeader(user.segmentation)}`}>{user.isMISintegration === true ? 'V' : ''}</td>
                                    <td className={`${handleHeader(user.segmentation)}`}>{user.problem}</td>
                                    <td className={`${handleHeader(user.segmentation)}`}>{user.revenue}</td>
                                    <td className={`${handleHeader(user.segmentation)}`}>{user.MIS}</td>
                                    <td className={`${handleHeader(user.segmentation)}`}>{handleStatus(user.segmentation)}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table> : <h1>Загрузка...</h1>}
            </div>
        </div>
    )
}