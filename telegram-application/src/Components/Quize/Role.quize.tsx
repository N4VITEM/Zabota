import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import '../../Style/Quize.quize.css'

export default function RoleQuize({isOpen, handleRole}) {
    const [QuizeHeader, setQuizeHeader] = useState('close')

    useEffect(()=>{
        setQuizeHeader(isOpen === true ? 'quize-open' : 'quize-close')
    }, [isOpen])

    return (
        <div className={'Quize '+ QuizeHeader}>
            <div className="Quize-container">
                <h1 className="Quize-header">Выберите вашу роль</h1>
                <div className="Quize-Button-Container">
                    <Button className="Quize-Button-Select" onClick={()=>handleRole('Маркетолог')}>Маркетолог</Button>
                    <Button className="Quize-Button-Select" onClick={()=>handleRole('Управляющий')}>Управляющий</Button>
                    <Button className="Quize-Button-Select" onClick={()=>handleRole('Собственник')}>Собственник</Button>
                </div>
            </div>
        </div>
    )
}