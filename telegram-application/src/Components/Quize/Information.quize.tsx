import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function InformationQuize({ isOpen, handleInformation }) {
    const [QuizeHeader, setQuizeHeader] = useState('close');
    const [name, setName] = useState('');
    const [clinic, setClinic] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [currentUrl, setCurrentUrl] = useState('bot.zabota-web-service.ru');
    const [error, setError] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        setQuizeHeader(isOpen === true ? 'quize-open' : 'quize-close');
        setCurrentUrl('bot.zabota-web-service.ru');
    }, [isOpen]);

    useEffect(() => {
        if (name.length === 0 || clinic.length === 0 || (phone.length === 0 && email.length === 0) || date.length === 0) {
            setError(true);
        }
        else {
            setError(false)
        }
    }, [name, phone, email, date])

    const handleSubmit = (event) => {
        event.preventDefault();
        if (error === true) {
            console.log('ошибка при отправке формы. Форма пуста')
        } else {
            if (error === undefined && (name.length === 0 || clinic.length === 0 || (phone.length === 0 && email.length === 0) || date.length === 0)) {
                setError(true);
            } else {
                if (name && clinic && phone && email && date) {
                    const formData = {
                        name,
                        clinic,
                        phone,
                        email,
                        date,
                        currentUrl
                    };
                    handleInformation(formData.name, formData.clinic, formData.email, formData.phone, formData.date, formData.currentUrl);
                }
            }
        }
    };

    return (
        <div className={'Quize ' + QuizeHeader}>
            <div className="Quize-container">
                <Form.Label>Заполните данные и мы проведем презентацию</Form.Label>
                <Form onSubmit={handleSubmit} className="Quize-Input-Container">
                    {error && (
                        <h3 className="error-text">
                            * заполните все обязательные поля
                        </h3>
                    )}
                    <Form.Group controlId="formName" className="mb-1">
                        <Form.Control
                            type="text"
                            placeholder="как к вам обращаться?"
                            className={error === true && name.length === 0 ? 'Quize-Input input-error' : 'Quize-Input'}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formClinic" className="mb-1">
                        <Form.Control
                            type="text"
                            placeholder="название вашей клиники"
                            className={error === true && clinic.length === 0 ? 'Quize-Input input-error' : 'Quize-Input'}
                            value={clinic}
                            onChange={(e) => setClinic(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formPhone" className="mb-1">
                        <PhoneInput
                            country={'ru'}
                            value={phone}
                            onChange={(phone) => setPhone(phone)}
                            inputProps={{
                                name: 'phone',
                                required: true,
                                className: error === true && phone.length === 0 ? 'Quize-Input phone input-error' : 'Quize-Input phone'
                            }}
                        />
                    </Form.Group>
                    <Form.Group controlId="formEmail" className="mb-1">
                        <Form.Control
                            type="email"
                            placeholder="ваш Email"
                            className={error === true && email.length === 0 ? 'Quize-Input input-error' : 'Quize-Input'}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <h3>Выберите дату для презентации</h3>
                    <Form.Group controlId="formDate" className="mb-1">
                        <Form.Control
                            type="date"
                            placeholder="выберите дату"
                            className={error === true && date.length === 0 ? 'Quize-Input input-error' : 'Quize-Input'}
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <input type="hidden" name="currentUrl" value={currentUrl} />
                </Form>
                <Button
                    className={error !== true ? 'Quize-Submit active' : 'Quize-Submit'}
                    onClick={handleSubmit}
                >
                    отправить
                </Button>
            </div>
        </div>
    );
}
