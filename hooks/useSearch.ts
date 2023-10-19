import { useState } from 'react'
import useDebounce from './useDebounce'
import Axios from 'axios'
import { baseUrl } from '../data/urls'


const useSearch = () => {
    const [response, setResponse] = useState([])
    const [loading, setLoading] = useState(false)
    const [noResult, setNoResult] = useState(false)
    const [error, setError] = useState("")
    const [searchType, setSearchType] = useState("players")
    const [searchTerm, setSearchTerm] = useState("")

    useDebounce(() => search(searchTerm, searchType), 750, [searchTerm])

    const search = async (term: any, type: any) => {

        if (!searchTerm) {
            setResponse([])
            setNoResult(false)
            return
        }

        setResponse([])
        setLoading(true)
        setNoResult(false)
        setError("")

        try {
            const response = await Axios.get(baseUrl + "/search/" + type + "/" + term)
            setResponse(response.data)
            console.log(response.data)

            if (response.data.length === 0) {
                setNoResult(true)
            }

        } catch (error) {
            setError("Something went wrong")

        } finally {
            setLoading(false)
        }
    }

    const handleTypeChange = (type: any) => {

        if (searchType !== type) {
            console.log("switched")
            setSearchType(type)
            search(searchTerm, type)
        }
    }


    return { response, loading, noResult, error, searchType, searchTerm, setSearchTerm, handleTypeChange }
}

export default useSearch