import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import '../../Style/Quize.quize.css';

import icon_none from '../../media/icon_MIS_none.png';
import icon_1 from '../../media/icon_MIS_1.png';
import icon_2 from '../../media/icon_MIS_2.png';
import icon_3 from '../../media/icon_MIS_3.png';

interface Mis {
    id: number;
    label: string;
    text: string;
    value: number;
    img: string;
    selected: boolean;
}

const initialMIS: Mis[] = [
    { id: 1, label: "нет", text: "МИС отсутствует", value: 0, img: icon_none, selected: false },
    { id: 2, label: "Ромашка", text: "МИС - Ромашка", value: 2, img: icon_1, selected: false },
    { id: 3, label: "Лютик", text: "МИС - Лютик", value: 2, img: icon_2, selected: false },
    { id: 4, label: "Камень", text: "МИС - Камень", value: 0, img: icon_3, selected: false },
];

export default function DataQuize({ isOpen, handleData }) {
    const [mis, setMis] = useState<Mis[]>(initialMIS);
    const [QuizeHeader, setQuizeHeader] = useState('close');
    const [misSelected, setMisSelected] = useState<Mis | undefined>(undefined);
    const [error, setError] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        setQuizeHeader(isOpen ? 'quize-open' : 'quize-close');
    }, [isOpen]);

    useEffect(() => {
        if (misSelected === undefined) {
            error !== undefined ? setError(true) : setError(undefined);
        } else {
            setError(false);
        }
    }, [misSelected]);

    const toggleSelection = (id: number) => {
        setMis(prevMis =>
            prevMis.map(mis =>
                mis.id === id ? { ...mis, selected: !mis.selected } : mis
            )
        );
        if (misSelected?.id === id) {
            setMisSelected(undefined);
        } else {
            setMisSelected(mis[id - 1]);
        }
    };

    const handleSubmit = () => {
        if (error === true) {
            console.log('ошибка при отправке формы. Форма пуста');
        } else {
            if (error === undefined && misSelected === undefined) {
                setError(true);
            } else {
                handleData(
                    misSelected?.label,
                    misSelected?.value
                );
            }
        }
    };

    return (
        <div className={`Quize ${QuizeHeader}`}>
            <div className="Quize-container">
                <Form.Label>Какая у вас Медицинская Информационная Система?</Form.Label>
                {error === true &&
                    <h3 className="error-text">
                        * пожалуйста выберите вариант
                    </h3>
                }
                <div className="Quize-Select-Container">
                    <div className="Selects">
                        {mis.map(mis => (
                            <div
                                key={mis.id}
                                className={`Select-Body ${misSelected?.id === mis.id ? 'selected' : ''}`}
                                onClick={() => toggleSelection(mis.id)}
                            >
                                {misSelected?.id !== mis.id ? (
                                    <div className="Select-Body-Container">
                                        <img src={mis.img} alt={mis.label} />
                                        <h1>{mis.label}</h1>
                                    </div>
                                ) : (
                                    <h2>{mis.text}</h2>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <Button
                    className={error !== true && error !== undefined ? 'Quize-Submit active' : 'Quize-Submit'}
                    onClick={handleSubmit}
                >
                    далее
                </Button>
            </div>
        </div>
    );
}
