import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import '../../Style/Quize.quize.css';

import icon_1 from '../../media/icon_problem_1.png';
import icon_2 from '../../media/icon_problem_2.png';
import icon_problem from '../../media/icon_problem.png';

interface Problem {
    id: number;
    label: string;
    text: string;
    img: string;
    selected: boolean;
}

const initialProblems: Problem[] = [
    { id: 1, label: "плохая мотивация персонала", text: "Сотрудники не вовлечены в процесс. Нужно постоянно напоминать администраторам, чтобы собирали отзывы, обзванивали пациентов, напоминали о записи, приглашали на профосмотры.", img: icon_1, selected: false },
    { id: 2, label: "низкая возвращаемость", text: "Пациенты не остаются после бесплатных консультаций, не понимают почему", img: icon_2, selected: false },
    { id: 3, label: "проблема 3", text: "описание 3", img: icon_problem, selected: false },
    { id: 4, label: "проблема 4", text: "описание 4", img: icon_problem, selected: false },
    { id: 5, label: "проблема 5", text: "описание 5", img: icon_problem, selected: false },
    { id: 6, label: "проблема 6", text: "описание 6", img: icon_problem, selected: false },
    { id: 7, label: "проблема 7", text: "описание 7", img: icon_problem, selected: false },
    { id: 8, label: "проблема 8", text: "описание 8", img: icon_problem, selected: false },
    { id: 9, label: "проблема 9", text: "описание 9", img: icon_problem, selected: false }
];

export default function ProblemQuize({ isOpen, handleProblem }) {
    const [problems, setProblems] = useState<Problem[]>(initialProblems);
    const [QuizeHeader, setQuizeHeader] = useState('close');
    const [userInput, setUserInput] = useState<string>('');
    const [problemsSelected, setProblemsSelected] = useState<number[]>([]);
    const [error, setError] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        setQuizeHeader(isOpen ? 'quize-open' : 'quize-close');
    }, [isOpen]);

    useEffect(() => {
        if (problemsSelected.length === 0 && userInput.length === 0) {
            error !== undefined ? setError(true) : setError(undefined);
        } else {
            setError(false);
        }
    }, [problemsSelected, userInput])

    const toggleProblemSelection = (id: number) => {
        setProblems(prevProblems =>
            prevProblems.map(problem =>
                problem.id === id ? { ...problem, selected: !problem.selected } : problem
            )
        );

        setProblemsSelected(prevSelected => {
            if (prevSelected.includes(id)) {
                return prevSelected.filter(problemId => problemId !== id);
            } else {
                return [...prevSelected, id];
            }
        });
    };

    const handleSubmit = () => {
        if (error === true) {
            console.log('ошибка при отправке формы. Форма пуста')
        } else {
            if (error === undefined && (problemsSelected.length === 0 && userInput.length === 0)) {
                setError(true);
            } else {
                let response: string = userInput.length !== 0 ? '[' + userInput + '],' : '';
                problemsSelected.map(id => {
                    return response += '[' + problems[id - 1].label + '],'
                })
                handleProblem(response)
            }
        }
    };

    return (
        <div className={`Quize ${QuizeHeader}`}>
            <div className="Quize-container">
                <Form.Label>Выберите вашу проблему</Form.Label>
                {error && (
                    <h3 className="error-text">
                        * пожалуйста выбирите проблему
                    </h3>
                )}
                <div className="Quize-Select-Container">
                    <h2>пролистайте</h2>
                    <div className="Selects">
                        {problems.map(problem => (
                            <div
                                key={problem.id}
                                className={`Select-Body ${problem.selected ? 'selected' : ''}`}
                                onClick={() => toggleProblemSelection(problem.id)}
                            >
                                {problem.selected === false ? (
                                    <div className="Select-Body-Container">
                                        <img src={problem.img} alt={problem.label} />
                                        <h1>{problem.label}</h1>
                                    </div>
                                ) : (
                                    <h2>{problem.text}</h2>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                {error && (
                    <h3 className="error-text">
                         * если вашей проблемы нет в списке, то укажие свой вариант
                    </h3>
                )}
                <Form.Group controlId="userInput" className="Quize-Input-Container">
                    <Form.Control
                        type="text"
                        placeholder="или можете указать свой вариант"
                        value={userInput}
                        className="Quize-Input"
                        onChange={(e) => setUserInput(e.target.value)}
                    />
                </Form.Group>
                <Button
                    className={error !== true ? 'Quize-Submit active' : 'Quize-Submit'}
                    onClick={handleSubmit}
                >
                    далее
                </Button>
            </div>
        </div>
    );
}
