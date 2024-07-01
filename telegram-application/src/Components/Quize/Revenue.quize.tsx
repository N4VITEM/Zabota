import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import '../../Style/Quize.quize.css';

import icon_money from '../../media/icon_money.png';

interface Mis {
    id: number;
    label: string;
    text: string;
    value: number;
    img: string;
    selected: boolean;
}

const initialMIS: Mis[] = [
    { id: 1, label: "до 1 млн. ₽", text: "выручка до 1 млн. ₽", value: -99, img: icon_money, selected: false },
    { id: 2, label: "от 1 до 5 млн. ₽", text: "выручка от 1 до 5 млн. ₽", value: -99, img: icon_money, selected: false },
    { id: 3, label: "от 5 до 10 млн. ₽", text: "выручка от 1 до 5 млн. ₽", value: 1, img: icon_money, selected: false },
    { id: 4, label: "свыше 10 млн. ₽", text: "выручка свыше 10 млн. ₽", value: 2, img: icon_money, selected: false },
];

export default function RevenueQuize({ isOpen, handleRevenue }) {
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
               handleRevenue(
                    misSelected?.label,
                    misSelected?.value
                );
            }
        }
    };
    return (
        <div className={`Quize ${QuizeHeader}`}>
            <div className="Quize-container">
                <Form.Label>Какая у вас выручка за год в ₽?</Form.Label>
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
