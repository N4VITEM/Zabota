import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import '../../Style/Quize.quize.css'
import icon from '../../media/icon_4.png';

export default function SuccessQuize({isOpen}) {
    const [QuizeHeader, setQuizeHeader] = useState('close')

    useEffect(()=>{
        setQuizeHeader(isOpen === true ? 'quize-open' : 'quize-close')
    }, [isOpen])

    return (
        <div className={'Quize '+ QuizeHeader}>
            <div className="Quize-container">
                <Form.Label>Данные успешно отправленны!</Form.Label>
                <img src={icon} alt="img" className="Success-img"/>
                <Form.Label>Благодарим за уделенное время! </Form.Label>
            </div>
        </div>
    )
}