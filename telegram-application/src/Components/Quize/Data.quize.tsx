import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import '../../Style/Quize.quize.css';

import icon_none from '../../media/icon_MIS_none.png';
import icon_1 from '../../media/icon_MIS_1.png';
import icon_2 from '../../media/icon_MIS_2.png';
import icon_3 from '../../media/icon_MIS_3.png';
import icon_mis from '../../media/icon_MIS.png';

interface Mis {
    id: number;
    label: string;
    text: string;
    img: string;
    selected: boolean;
}

const initialMIS: Mis[] = [
    { id: 1, label: "нет", text: "МИС отсутствует", img: icon_none, selected: false },
    { id: 2, label: "Ромашка", text: "МИС - Ромашка", img: icon_1, selected: false },
    { id: 3, label: "Лютик", text: "МИС - Лютик", img: icon_2, selected: false },
    { id: 4, label: "Камень", text: "МИС - Камень", img: icon_3, selected: false },
    { id: 5, label: "МИС 5", text: "МИС - 5", img: icon_mis, selected: false },
    { id: 6, label: "МИС 6", text: "МИС - 6", img: icon_mis, selected: false },
    { id: 7, label: "МИС 7", text: "МИС - 7", img: icon_mis, selected: false },
    { id: 8, label: "МИС 8", text: "МИС - 8", img: icon_mis, selected: false },
    { id: 9, label: "МИС 9", text: "МИС - 9", img: icon_mis, selected: false }
];

export default function DataQuize({ isOpen, handleData }) {
    const [mis, setMis] = useState<Mis[]>(initialMIS);
    const [QuizeHeader, setQuizeHeader] = useState('close');
    const [userInput, setUserInput] = useState<string>('');
    const [misSelected, setMisSelected] = useState<Mis | undefined>(undefined);
    const [error, setError] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        setQuizeHeader(isOpen ? 'quize-open' : 'quize-close');
    }, [isOpen]);

    useEffect(() => {
        if (misSelected === undefined || userInput.length === 0) {
            error !== undefined ? setError(true) : setError(undefined);
        } else {
            setError(false);
        }
    }, [misSelected, userInput]);

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
            if (error === undefined && (misSelected === undefined || userInput.length === 0)) {
                setError(true);
            } else {
                handleData(
                    parseFloat(userInput.replace(/\s|₽/g, '')),
                    misSelected?.label
                );
            }
        }
    };

    const formatInput = (input: string): string => {
        const digits = input.replace(/\D/g, '');
        const formatted = digits.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return formatted;
    };

    const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value.replace(/\s|₽/g, '');
        const formattedValue = formatInput(rawValue);
        setUserInput(formattedValue);
    };

    return (
        <div className={`Quize ${QuizeHeader}`}>
            <div className="Quize-container">
                <Form.Label>У вас есть МИС?</Form.Label>
                {error === true &&
                    <h3 className="error-text">
                        * пожалуйста выберите вариант
                    </h3>
                }
                <div className="Quize-Select-Container">
                    <h2>пролистайте</h2>
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
                <Form.Group controlId="userInput" className="Quize-Input-Container">
                    <Form.Label>просим вас указать вашу выручку</Form.Label>
                    {error === true &&
                        <h3 className="error-text">
                            * пожалуйста, укажите вашу выручку
                        </h3>
                    }
                    <Form.Control
                        type="text"
                        placeholder="(пример) 5 000 000 ₽"
                        value={userInput}
                        className="Quize-Input"
                        onChange={handleUserInput}
                        required
                    />
                </Form.Group>
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
