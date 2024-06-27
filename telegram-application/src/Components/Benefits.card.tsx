import React from "react";
import icon_1 from "../media/icon_1.png";
import icon_2 from "../media/icon_2.png";
import icon_3 from "../media/icon_3.png";
import icon_4 from "../media/icon_4.png";

import "../Style/Benefits.card.css"

export default function Benefits() {
    return (
        <div className="Benefits">
            <div className="benefit">
                <div className="container">
                    <img src={icon_1} alt="img" />
                    <h1>+20-25%</h1>
                </div>
                <h2>увеличиваются
                    доходы клиники</h2>
            </div>
            <div className="benefit">
                <div className="container">
                    <img src={icon_2} alt="img" />
                    <h1>в 3-5 раз</h1>
                </div>
                <h2>увеличивается количество
                    положительных отзывов</h2>
            </div>
            <div className="benefit">
                <div className="container">
                    <img src={icon_3} alt="img" />
                    <h1>+14-20%</h1>
                </div>
                <h2>растет конверсия
                    в повторный прием</h2>
            </div>
            <div className="benefit">
                <div className="container">
                    <img src={icon_4} alt="img" />
                    <h1>3-4 мес</h1>
                </div>
                <h2>средняя окупаемость внедрения системы</h2>
            </div>
        </div>
    )
}