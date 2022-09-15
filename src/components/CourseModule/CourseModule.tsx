import React, { useState } from 'react'
import { ISpecializedSubjects } from '../../models'
import './CourseModule.scss'

interface IProps {
    moduleNumber: number
    data: ISpecializedSubjects[]
}

const CourseModule = ({ moduleNumber, data }: IProps) => {

    const [openned, setOpenned] = useState(false)

    return (
        <div className="course-module">
            <h2
                className={`title2 course-module__title ${openned ? "course-module__title--openned" : ""}`}
                onClick={e => setOpenned(prev => !prev)}
            >
                {moduleNumber} модуль
            </h2>
            <ul
                className={`course__desc animation-appearance ${openned ? "course__desc--openned" : "course__desc-closed"}`}
            >
                {data.map((skill) => {
                    return (
                        <li className="course__skill" key={skill.id} >
                            <p className="desc">
                                {skill.string}
                            </p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default CourseModule