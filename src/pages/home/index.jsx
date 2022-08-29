import React, { useState } from 'react'
import { Card, CardProps } from '../../components/card/index'
import './styles.css'


export function Home() {
    const [studentName, setStudentName] = useState();
    const [students, setStudents] = useState < CardProps > ([]);


    function hendleAddStudent() {
        const newStudent = {
            name: studentName,
            time: new Date().toLocaleDateString("pt-br", {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',

            })
        }
        setStudents(prevState => [...prevState, newStudent]);
    }


    return (
        <div className='container'>

            <header>
                <h1>Lista de Presença</h1>
                <div>
                    <strong>Gustavo</strong>
                    <img src='https://github.com/gustavo-gomess.png' alt="foto de perfil" />
                </div>
            </header>

            <input
                type="text"
                placeholder="Digite seu nome..."
                onChange={e => setStudentName(e.target.value)}
            />

            <button type="button" onClick={hendleAddStudent}>
                Adicionar
            </button>

            {
                students.map(student => (
                    <Card
                        key={student.time}
                        name={student.name}
                        time={student.time} />)
                )}
        </div>
    )
}


