import React, { useState } from "react";
import "./DataTable.css";

const initialData = [
    { id: 1, position: "Начальник отдела", phone: "3253", department: "Отдел 1", name: "Агибалова Елена" },
    { id: 2, position: "Дежурный электромеханик", phone: "340", department: "Отдел 2", name: "Бобер" },
    { id: 3, position: "Касса", phone: "338", department: "Отдел 1", name: "Сахиль" },
    { id: 1, position: "Охрана ё", phone: "1", department: "ЭСОС", name: "Сторож" },
    { id: 5, position: "Охрана й", phone: "112", department: "Отдел 3", name: "Бобер" },
    { id: 6, position: "Специалист по отчетности контрольного центра отдела взимания платы", phone: "7101", department: "КЦ", name: "Крестина Екатерина" },
    { id: 7, position: "Охран а", phone: "222", department: "ЭСОС", name: "Бобер" },
    { id: 8, position: "Подменный дежурный", phone: "3452", department: "ТПОС", name: "Тимаков Роман" },
    { id: 9, position: "дежурный s6", phone: "399", department: "Отдел 3", name: "Бобер" },
    { id: 10, position: "дежурный s1-2", phone: "399", department: "Отдел 1", name: "Ганноцкий Александр" },
    { id: 11, position: "Дежурный s0", phone: "399", department: "ТПОС", name: "Нечепуренко Александр" },
];

const DataTable = () => {
    const [search, setSearch] = useState("");

    const filteredData = initialData.filter(
        (row) =>
            row.position.toLowerCase().includes(search.toLowerCase()) ||
            row.phone.includes(search)
    );

    const departments = [...new Set(initialData.map(row => row.department))];

    return (
        <div className="container">
            <input
                type="text"
                className="search-box"
                placeholder="Поиск..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {departments.map((department) => {
                const departmentData = filteredData.filter(row => row.department === department);

                // Проверяем, есть ли данные в текущем отделе после фильтрации
                if (departmentData.length === 0) return null;

                return (
                    <div className="table" key={department}>
                        <h2>{department}</h2>
                        <table className="first">
                            <thead className="first_head">
                            <tr>
                                <th className="table_th">Должность</th>
                                <th className="table_th">Имя</th>
                                <th className="table_th">Телефон</th>
                            </tr>
                            </thead>
                            <tbody className="first_body">
                            {departmentData.map((row) => (
                                <tr key={row.id}>
                                    <td className="table_td">{row.position}</td>
                                    <td className="table_td">{row.name}</td>
                                    <td className="table_td">{row.phone}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                );
            })}
        </div>
    );
};

export default DataTable;

