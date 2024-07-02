import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "../Style/Form.card.css";
import { tableDto } from "../DTO/user.dto.ts";
import ProblemQuize from "./Quize/Problem.quize.tsx";
import DataQuize from "./Quize/Data.quize.tsx";
import InformationQuize from "./Quize/Information.quize.tsx";
import { sendUserData } from '../Services/User.service.ts';
import SuccessQuize from "./Quize/Success.quize.tsx";
import RevenueQuize from "./Quize/Revenue.quize.tsx";

export default function Form({ isFrmOpen, handleForm, Role }) {
    const [FormClassName, setFormClassName] = useState('close');

    const [UTM, setUTM] = useState<string | undefined>(undefined);
    const [Name, setName] = useState<string | undefined>(undefined);
    const [Email, setEmail] = useState<string | undefined>(undefined);
    const [Phone, setPhone] = useState<string | undefined>(undefined);
    const [SelectedDate, setSelectdDate] = useState<Date | undefined>(undefined);
    const [isMoreThan10M, setIsMoreThan10M] = useState<boolean | undefined>(undefined);
    const [isMISintegration, setIsMISintegration] = useState<boolean | undefined>(undefined);
    const [Problem, setProblem] = useState<string | undefined>(undefined);
    const [Revenue, setRevenue] = useState<string | undefined>(undefined);
    const [MIS, setMIS] = useState<string | undefined>(undefined);
    const [Segmentation, setSegmentation] = useState<number | undefined>(undefined);
    const [Clinic, setClinic] = useState<string | undefined>(undefined);
    const [Success, setSuccess] = useState(false);
    const [TelegramUsername, setTelegramUsername] = useState<string | undefined>(undefined);

    function handleProblem(problem) {
        setProblem(problem);
    }

    function handleData(mis: string, value: number) {
        setMIS(mis !== 'нет' ? mis : 'нет');
        setIsMISintegration(mis !== 'нет' ? true : false);
        setSegmentation(Segmentation ? (Segmentation + value) : value)
    }

    function handleRevenue(revenue: string, value) {
        setRevenue(revenue)
        setIsMoreThan10M(value === 2 ? true : false)
        setSegmentation(Segmentation ? (Segmentation + value) : value)
    }

    function handleInformation(name, clinic, email, phone, date) {
        setName(name);
        setClinic(clinic);
        setEmail(email);
        setPhone(phone);
        setSelectdDate(date);
    }
    useEffect(() => {
        const initTelegram = () => {
            if (window.Telegram.WebApp) {
                window.Telegram.WebApp.ready();
                const user = window.Telegram.WebApp.initDataUnsafe.user;
                if (user) {
                    setTelegramUsername(user.username);
                }
            }
        };
        initTelegram();
    }, []);

    useEffect(() => {
        setFormClassName(isFrmOpen === true ? 'open' : 'close');
    }, [isFrmOpen]);

    useEffect(() => {
        console.log(Segmentation)
    }, [Segmentation])

    useEffect(() => {
        setUTM(window.Telegram.WebApp ? 'telegram' : 'сайт');
    }, []);

    useEffect(() => {
        if (UTM && Name && Clinic && Segmentation && Email && Phone && SelectedDate && isMoreThan10M !== undefined && isMISintegration !== undefined && Role && Problem && Revenue && MIS) {
            const user = new tableDto();
            user.SOURCE = UTM;
            user.name = Name;
            user.email = Email;
            user.phone = Phone;
            user.date = SelectedDate;
            user.isMoreThan5M = isMoreThan10M;
            user.isMISintegration = isMISintegration;
            user.role = Role;
            user.problem = Problem;
            user.revenue = Revenue;
            user.MIS = MIS;
            user.clinic = Clinic;
            user.segmentation = Segmentation;
            user.USER = TelegramUsername ? TelegramUsername : '';
            user.UTM = '';
            console.log(user)

            sendUserData(user).then(response => {
                console.log('Data sent successfully:', response);
                setSuccess(true);
                setTimeout(() => {
                    window.location.reload();
                }, 1500);
            }).catch(error => {
                console.error('Error sending data:', error);
            });
        }
    }, [UTM, Name, Email, Phone, SelectedDate, isMoreThan10M, isMISintegration, Role, Problem, Revenue, MIS, Clinic]);

    return (
        <div className='Form'>
            <div className={"Form-container " + FormClassName}>
                <div className="Button-close-container">
                    <Button className="Button-close" onClick={handleForm}>X</Button>
                </div>
                <ProblemQuize isOpen={Problem || Role === undefined ? false : true} handleProblem={handleProblem} />
                <DataQuize isOpen={MIS || isMISintegration || Problem === undefined || Role === undefined ? false : true} handleData={handleData} />
                <RevenueQuize isOpen={Revenue || isMoreThan10M || MIS === undefined || isMISintegration === undefined || Problem === undefined || Role === undefined ? false : true} handleRevenue={handleRevenue} />
                <InformationQuize isOpen={Name || Email || Phone || SelectedDate || Clinic || Revenue === undefined || MIS === undefined || isMoreThan10M === undefined || isMISintegration === undefined || Problem === undefined || Role === undefined ? false : true} handleInformation={handleInformation} />
                <SuccessQuize isOpen={Success} />
            </div>
        </div>
    );
}
