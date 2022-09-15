import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AboutCourse from './components/AboutCourse/AboutCourse'
import List from './components/List/List'
import { IProduct } from './models'

function App() {

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [data, setData] = useState([])
    const apiUrl = 'https://api-moscow-mba.herokuapp.com/products'

    const req = async (): Promise<IProduct | undefined> => {
        try {
            setIsLoading(true)
            const response = axios.get(apiUrl);
            const answer = (await response).data.slice(0, 5)
            setData(answer)
            return answer
        } catch (errors) {
            setError(true);
            return undefined
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        req()
    }, [])

    return (
        <div className="App main-contaier">
            <h1 className="title1 app__title">Специализированные дисциплины</h1>
            {isLoading ? <h2 className="title2 loading">Loading...</h2> : error ? <h2 className="title2 loading">Server is lock(((</h2> : <List className='course-list' data={data} />}
            <AboutCourse />
        </div>
    )
}

export default App
