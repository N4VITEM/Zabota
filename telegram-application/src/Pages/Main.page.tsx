import React, { useEffect, useState } from "react";
import WellcomeCard from "../Components/Wellcome.card.tsx";
import Benefits from "../Components/Benefits.card.tsx";
import { Button } from "react-bootstrap";
import Menu from "../Components/Menu.card.tsx";
import Form from "../Components/Form.card.tsx";
import RoleQuize from "../Components/Quize/Role.quize.tsx";
import RoleSelection from "../Components/Quize/RoleSelection.quize.tsx";

export default function MainPage() {
    const [isFrmOpen, setIsFormOpen] = useState(false);
    const [role, setRole] = useState('');

    function handleForm() {
        setIsFormOpen(!isFrmOpen)
    }

    function handleRole(select) {
        setRole(select)
    }


    useEffect(()=>{
        setIsFormOpen(role.length !== 0 ? true : false)
    }, [role])

    return (
        <div className="Page">
            <div className="Page-container">
                <WellcomeCard/>
                <Benefits/>
                <h1 className="main-text">
                    укажите вашу роль
                </h1>
                {isFrmOpen === false ? <RoleSelection handleRole={handleRole}/> : <></>}
            </div>
            <Form isFrmOpen={isFrmOpen} handleForm={handleForm} Role={role}/>
        </div>
    )
}

/*{isFrmOpen === false ?<Button className="main-button" onClick={handleForm}>Заполнить форму</Button>: <></>}
                {isFrmOpen === false ? <Menu/> : <></>}
                {isFrmOpen === false ? <h3>
                    *сервис разработан в рамках тестового задания, автор - Меткалев Иван
                </h3>: <></> }*/