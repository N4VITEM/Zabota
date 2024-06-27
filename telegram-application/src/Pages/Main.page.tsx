import React, { useState } from "react";
import WellcomeCard from "../Components/Wellcome.card.tsx";
import Benefits from "../Components/Benefits.card.tsx";
import { Button } from "react-bootstrap";
import Menu from "../Components/Menu.card.tsx";
import Form from "../Components/Form.card.tsx";

export default function MainPage() {
    const [isFrmOpen, setIsFormOpen] = useState(false);

    function handleForm() {
        setIsFormOpen(!isFrmOpen)
    }

    return (
        <div className="Page">
            <div className="Page-container">
                <WellcomeCard/>
                <Benefits/>
                <h1 className="main-text">
                    Zabota 2.0 — умная система для работы с базой пациентов и увеличения выручки клиники
                </h1>
                <Button className="main-button" onClick={handleForm}>Заполнить форму</Button>
                {isFrmOpen === false ? <Menu/> : <></>}
                <h3>
                    *сервис разработан в рамках тестового задания, автор - Меткалев Иван
                </h3>
            </div>
            <Form isFrmOpen={isFrmOpen} handleForm={handleForm}/>
        </div>
    )
}