import React from 'react'
import './AboutCourse.scss'

const AboutCourse = () => {
    return (
        <section className="about-modules">
            <div className="about-modules__item about-modules__item--primary">
                <h1 className="title1 about-module__title">Практические модули</h1>
                <div className="about-module">
                    <p className="desc about-module__desc">
                        Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе
                    </p>
                </div>
            </div>
            <div className="about-modules__item">
                <h1 className="title1 about-module__title">Итоговая аттестация</h1>
                <div className="about-module">
                    <ul className="about-module__desc">
                        <li className="about-module__desc-item">
                            <p className="desc">
                                Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)
                            </p>
                        </li>
                        <li className="about-module__desc-item">
                            <p className="desc">
                                Защита итоговой аттестационной работы
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default AboutCourse