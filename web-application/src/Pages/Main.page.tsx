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
                    <p>Посмотрите как наша система может помочь Вам в бизнесе.</p>
                    <p>Для начала выберите вашу роль</p>
                </h1>
                {isFrmOpen === false ? <RoleSelection handleRole={handleRole}/> : <></>}
            </div>
            <Form isFrmOpen={isFrmOpen} handleForm={handleForm} Role={role}/>
        </div>
    )
}