import React from 'react'
import { IProduct } from '../../models'
import CourseInList from '../CourseInList/CourseInList'
import './List.scss'

interface IProps {
    className: string
    data: IProduct[]
}

const List = ({className, data}: IProps) => {
    return (
        <section className={`list ${className}`}>
            {data.map((product) => {
                return <CourseInList product={product} key={product._id} />
            })}
        </section>
    )
}

export default List