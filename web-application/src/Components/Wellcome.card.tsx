import React from "react";
import '../Style/Wellcome.card.css'
import img_background from '../media/background.png';

export default function WellcomeCard() {
    return(
        <div className="Wellcome">
            <img src={img_background} alt="img"/>
            <h1 className="Wellcome-text">
                <p>Zabota 2.0 - умная система</p>
                <p>для работы с базой пациентов</p>
                <p>и увеличения выручки клиники</p>
            </h1>
        </div>
    )
}