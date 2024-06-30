import React, { useEffect, useState } from "react";
import { Button, Form, Placeholder } from "react-bootstrap";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function InformationQuize({ isOpen, handleInformation }) {
    const [QuizeHeader, setQuizeHeader] = useState('close');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [currentUrl, setCurrentUrl] = useState('bot.zabota-web-service.ru');
    const [error, setError] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        setQuizeHeader(isOpen === true ? 'quize-open' : 'quize-close');
        setCurrentUrl('bot.zabota-web-service.ru');
    }, [isOpen]);

    useEffect(()=>{
        if(name.length === 0 || surname.length === 0 || (phone.length === 0 && email.length === 0) || date.length === 0){
            setError(true);
        }
        else {
            setError(false)
        }
    },[name, surname, phone, email, date])

    const handleSubmit = (event) => {
        event.preventDefault();
        if (error === true) {
            console.log('ошибка при отправке формы. Форма пуста')
        } else {
            if (error === undefined && (name.length === 0 || surname.length === 0 || (phone.length === 0 && email.length === 0) || date.length === 0)) {
                setError(true);
            } else {
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
                } 
            }
        }
    };

    return (
        <div className={'Quize ' + QuizeHeader}>
            <div className="Quize-container">
                <Form.Label>Заполните данные и мы проведем презентацию</Form.Label>
                <Form onSubmit={handleSubmit} className="Quize-Input-Container">
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
                        <PhoneInput
                            country={'ru'}
                            value={phone}
                            onChange={(phone) => setPhone(phone)}
                            inputProps={{
                                name: 'phone',
                                required: true,
                                autoFocus: true,
                                className: "Quize-Input phone"
                            }}
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
                    <Button
                    className={error !== true ? 'Quize-Submit active' : 'Quize-Submit'}
                    onClick={handleSubmit}
                >
                    отправить
                </Button>
                </Form>
            </div>
        </div>
    );
}
