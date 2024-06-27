import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import '../../Style/Quize.quize.css';

export default function ProblemQuize({ isOpen, handleProblem }) {
    const [QuizeHeader, setQuizeHeader] = useState('close');
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [userInput, setUserInput] = useState<string>('');

    useEffect(() => {
        setQuizeHeader(isOpen === true ? 'quize-open' : 'quize-close');
    }, [isOpen]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValues = Array.from(event.target.selectedOptions, (option: HTMLOptionElement) => option.value);
        setSelectedOptions(selectedValues);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(event.target.value);
    };

    const handleSubmit = () => {
        const selectedOptionsString = selectedOptions.join('|');
        const combinedString = `${selectedOptionsString}${userInput ? `|${userInput}` : ''}`;
        handleProblem(combinedString);
    };

    const options = [
        { label: 'НЕвовлечённость персоналa', value: 'НЕвовлечённость персонала', describe: 'Сотрудники не вовлечены в процесс. Нужно постоянно напоминать администраторам, чтобы собирали отзывы, обзванивали пациентов, напоминали о записи, приглашали на профосмотры.' },
        { label: 'Низкая возвращаемость', value: 'Низкая возвращаемость', describe: 'Пациенты не остаются после бесплатных консультаций, не понимают почему' },
        { label: 'проблема 3', value: 'проблема 3' },
        { label: 'проблема 4', value: 'проблема 4' }
    ];

    return (
        <div className={'Quize ' + QuizeHeader}>
            <div className="Quize-container">
                <Form.Group controlId="formMultiSelect" className="Quize-Button-Container">
                    <Form.Label>Выберите вашу проблему</Form.Label>
                    <Form.Control as="select" multiple value={selectedOptions} onChange={handleChange} className="Quize-Selector">
                        {options.map((option, index) => (
                            <option key={index} value={option.value} className="Quize-Option">
                                {option.label}:
                                {option.describe}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="userInput" className="Quize-Input-Container">
                    <Form.Control type="text" placeholder="или можете указать свой вариант " value={userInput} onChange={handleInputChange} className="Quize-Input" />
                </Form.Group>
                <Button className="Quize-Submit" onClick={handleSubmit}>далее</Button>
            </div>
        </div>
    );
}
