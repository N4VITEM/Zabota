import React from "react";
import '../Style/Wellcome.card.css'
import img_background from '../media/background.jpg';

export default function WellcomeCard() {
    return(
        <div className="Wellcome">
            <img src={img_background} alt="img"/>
        </div>
    )
}