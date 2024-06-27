import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import '../../Style/Quize.quize.css';

export default function DataQuize({ isOpen, handleData }) {
    const [QuizeHeader, setQuizeHeader] = useState('close');
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [userInput, setUserInput] = useState<string>('');

    useEffect(() => {
        setQuizeHeader(isOpen === true ? 'quize-open' : 'quize-close');
    }, [isOpen]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target.value.replace(/\D/g, '');
        const formattedInput = input.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        setUserInput(formattedInput);
    };

    const handleSubmit = () => {
        const revenue = userInput.replace(/\s/g, '');
        const combinedString = `${selectedOption}${userInput ? `|${revenue}` : ''}`;
        handleData(combinedString);
    };

    const options = [
        { label: 'Ромашка', value: 'Ромашка' },
        { label: 'Лютик', value: 'Лютик' },
        { label: 'Камень', value: 'Камень' },
        { label: 'нет', value: 'none' },
    ];

    return (
        <div className={'Quize ' + QuizeHeader}>
            <div className="Quize-container">
                <Form.Label>Просим вас ответить на пару вопросов</Form.Label>
                <Form.Group controlId="formSelect" className="Quize-Select-Container">
                    <Form.Label>У вас есть МИС ?</Form.Label>
                    <Form.Control as="select" value={selectedOption} onChange={handleChange} className="Quize-Selector">
                        {options.map((option, index) => (
                            <option key={index} value={option.value} className="Quize-Option">
                                {option.label}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="userInput" className="Quize-Input-Container">
                    <Form.Control
                        type="text"
                        placeholder="ваша выручка: "
                        value={userInput}
                        onChange={handleInputChange}
                        className="Quize-Input"
                        required
                    />
                </Form.Group>
                <Button className="Quize-Submit" onClick={handleSubmit}>далее</Button>
            </div>
        </div>
    );
}
