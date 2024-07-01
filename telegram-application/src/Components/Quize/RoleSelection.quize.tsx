import React from "react";
import '../../Style/RoleSelection.css'

import icon_role_1 from '../../media/icon_role_1.png'
import icon_role_2 from '../../media/icon_role_2.png'
import icon_role_3 from '../../media/icon_role_3.png'

export default function RoleSelection({handleRole}) {
    return (
        <div className="Role-Selector">
            <div className="Role-Container">
                <div className="Role" onClick={()=> {handleRole('Маркетолог')}}>
                    <img src={icon_role_1} alt="tmg"/>
                    <h2>Маркетолог</h2>
                </div>
                <div className="Role" onClick={()=> {handleRole('Управляющий')}}>
                    <img src={icon_role_2} alt="tmg"/>
                    <h2>Управляющий</h2>
                </div>
                <div className="Role" onClick={()=> {handleRole('Собственник')}}>
                    <img src={icon_role_3} alt="tmg"/>
                    <h2>Собственник</h2>
                </div>
            </div>
        </div>
    )
}