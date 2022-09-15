import React from 'react'
import { IProduct } from '../../models'
import CourseModule from '../CourseModule/CourseModule'
import './CourseInList.scss'

interface IProps {
    product: IProduct
}

const CourseInList = ({ product }: IProps) => {
    return (
        <article className="course-list__course-item" title={product.goal} >
            <h4 className="title4 course-item__title">{product.title}</h4>
            <div className="course-item__modules">
                <CourseModule moduleNumber={1} data={product.whatWillYouLearn.slice(0, 5)} />
                <CourseModule moduleNumber={2} data={product.specializedSubjects.slice(0, 5)} />
            </div>
        </article>
    )
}

export default CourseInList