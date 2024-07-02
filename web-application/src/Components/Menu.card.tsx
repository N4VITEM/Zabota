import React from "react";

import icon_menu_1 from "../media/icon_menu_1.png";
import icon_menu_2 from "../media/icon_menu_2.png";
import icon_menu_3 from "../media/icon_menu_3.png";
import icon_menu_4 from "../media/icon_menu_4.png";

import "../Style/Menu.card.css"

export default function Menu() {
    return(
        <div className="Menu">
            <div className="Option">
                <img src={icon_menu_1} alt="img"/>
                <h1>Записался на прем</h1>
            </div>
            <div className="Option">
                <img src={icon_menu_2} alt="img"/>
                <h1>Пришел на прием</h1>
            </div>
            <div className="Option">
                <img src={icon_menu_3} alt="img"/>
                <h1>Записался на повтоный прием</h1>
            </div>
            <div className="Option">
                <img src={icon_menu_4} alt="img"/>
                <h1>пришел на повторный прием</h1>
            </div>
        </div>
    )
}