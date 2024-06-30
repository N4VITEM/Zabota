import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "../Style/Form.card.css";
import { tableDto } from "../DTO/user.dto.ts";
import RoleQuize from "./Quize/Role.quize.tsx";
import ProblemQuize from "./Quize/Problem.quize.tsx";
import DataQuize from "./Quize/Data.quize.tsx";
import InformationQuize from "./Quize/Information.quize.tsx";
import { sendUserData } from '../Services/User.service.ts';
import SuccessQuize from "./Quize/Success.quize.tsx";

export default function Form({ isFrmOpen, handleForm }) {
    const [FormClassName, setFormClassName] = useState('close');

    const [UTM, setUTM] = useState<string | undefined>(undefined);
    const [Name, setName] = useState<string | undefined>(undefined);
    const [Surname, setSurname] = useState<string | undefined>(undefined);
    const [Thirdname, setThirdname] = useState<string | undefined>(undefined);
    const [Email, setEmail] = useState<string | undefined>(undefined);
    const [Phone, setPhone] = useState<string | undefined>(undefined);
    const [SelectedDate, setSelectdDate] = useState<Date | undefined>(undefined);
    const [isMoreThan10M, setIsMoreThan10M] = useState<boolean | undefined>(undefined);
    const [isMISintegration, setIsMISintegration] = useState<boolean | undefined>(undefined);
    const [Role, setRole] = useState<string | undefined>(undefined);
    const [Problem, setProblem] = useState<string | undefined>(undefined);
    const [Revenue, setRevenue] = useState<number | undefined>(undefined);
    const [MIS, setMIS] = useState<string | undefined>(undefined);

    const [Success, setSuccess] = useState(false);

    function handleRole(role) {
        setRole(role);
    }

    function handleProblem(problem) {
        setProblem(problem);
    }

    function handleData(revenue:number, mis: string) {
        setRevenue(revenue);
        setMIS(mis !== 'нет' ? mis : 'нет');
        setIsMoreThan10M(revenue >= 10000000 ? true : false);
        setIsMISintegration(mis !== 'нет' ? true : false);
    }

    function handleInformation(name, surname, thirdname, email, phone, date, url) {
        setName(name);
        setSurname(surname);
        setThirdname(thirdname);
        setEmail(email);
        setPhone(phone);
        setSelectdDate(date);
        setUTM(url);
    }

    useEffect(() => {
        setFormClassName(isFrmOpen === true ? 'open' : 'close');
    }, [isFrmOpen]);

    useEffect(() => {
        if (UTM && Name && Surname && Thirdname && Email && Phone && SelectedDate && isMoreThan10M !== undefined && isMISintegration !== undefined && Role && Problem && Revenue && MIS) {
            const user = new tableDto();
            user.UTM = UTM;
            user.name = Name;
            user.surname = Surname;
            user.thirdname = Thirdname;
            user.email = Email;
            user.phone = Phone;
            user.date = SelectedDate;
            user.isMoreThan5M = isMoreThan10M;
            user.isMISintegration = isMISintegration;
            user.role = Role;
            user.problem = Problem;
            user.revenue = Revenue;
            user.MIS = MIS;

            sendUserData(user).then(response => {
                console.log('Data sent successfully:', response);
                setSuccess(true);
            }).catch(error => {
                console.error('Error sending data:', error);
            });
        }
    }, [UTM, Name, Surname, Thirdname, Email, Phone, SelectedDate, isMoreThan10M, isMISintegration, Role, Problem, Revenue, MIS]);

    return (
        <div className='Form'>
            <div className={"Form-container " + FormClassName}>
                <div className="Button-close-container">
                    <Button className="Button-close" onClick={handleForm}>X</Button>
                </div>
                <RoleQuize isOpen={Role ? false : true} handleRole={handleRole} />
                <ProblemQuize isOpen={Problem || Role === undefined ? false : true} handleProblem={handleProblem} />
                <DataQuize isOpen={Revenue || MIS || isMoreThan10M || isMISintegration || Problem === undefined || Role === undefined ? false : true} handleData={handleData} />
                <InformationQuize isOpen={Name || Surname || Thirdname || Email || Phone || SelectedDate || Revenue === undefined || MIS === undefined || isMoreThan10M === undefined || isMISintegration === undefined || Problem === undefined || Role === undefined ? false : true} handleInformation={handleInformation} />
                <SuccessQuize isOpen={Success}/>
            </div>
        </div>
    );
}
