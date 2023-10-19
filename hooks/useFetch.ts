import { useEffect, useState } from 'react'
import Axios from 'axios'
import { baseUrl } from '../data/urls'


const useFetch = (url: String) => {
    const [response, setResponse] = useState([])
    const [loading, setLoading] = useState(false)
    const [noResult, setNoResult] = useState(false)
    const [error, setError] = useState("")

    const fetchData = async () => {
        if (!url) {
            return
        }

        setLoading(true)
        setResponse([])
        setNoResult(false)
        setError("")

        try {
            const response = await Axios.get(baseUrl + url)

            setResponse(response.data)
            console.log(response.data)

            if (response.data.length === 0) {
                setNoResult(true)
            }

        } catch (error: any) {
            setError("Something went wrong")
            console.log(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [url])

    return { response, loading, noResult, error, fetchData }
}

export default useFetch