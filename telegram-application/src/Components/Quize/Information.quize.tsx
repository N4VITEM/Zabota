import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function InformationQuize({ isOpen, handleInformation }) {
    const [QuizeHeader, setQuizeHeader] = useState('close');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [currentUrl, setCurrentUrl] = useState('telegram');

    useEffect(() => {
        setQuizeHeader(isOpen === true ? 'quize-open' : 'quize-close');
        setCurrentUrl('telegram');
    }, [isOpen]);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (name && surname && patronymic && phone && email && date) {
            const formData = {
                name,
                surname,
                patronymic,
                phone,
                email,
                date,
                currentUrl
            };
            handleInformation(formData.name, formData.surname, formData.patronymic, formData.email, formData.phone, formData.date, formData.currentUrl);
        } else {
            alert("Пожалуйста, заполните все поля.");
        }
    };

    return (
        <div className={'Quize ' + QuizeHeader}>
            <div className="Quize-container">
                <Form.Label>Заполните данные и мы проведем презентацию</Form.Label>
                <Form onSubmit={handleFormSubmit} className="Quize-Input-Container">
                    <Form.Group controlId="formName" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="ваше Имя"
                            className="Quize-Input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formSurname" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="ваша Фамилия"
                            className="Quize-Input"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formPatronymic" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="ваше Отчество"
                            className="Quize-Input"
                            value={patronymic}
                            onChange={(e) => setPatronymic(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formPhone" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="ваш телефон"
                            className="Quize-Input"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formEmail" className="mb-3">
                        <Form.Control
                            type="email"
                            placeholder="ваш Email"
                            className="Quize-Input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formDate" className="mb-3">
                        <Form.Control
                            type="date"
                            placeholder="выберите дату"
                            className="Quize-Input"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <input type="hidden" name="currentUrl" value={currentUrl} />
                    <Button type="submit" className="Quize-Submit">далее</Button>
                </Form>
            </div>
        </div>
    );
}
