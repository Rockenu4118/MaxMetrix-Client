import { createContext, useContext, useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import { useAuth } from './AuthContext'

const BookmarkContext = createContext({})

export function useBookmark() {
    return useContext(BookmarkContext)
}

export function BookmarkProvider({ children }: any) {
    const { currentUser, loading: userLoading }: any = useAuth()

    const { response: players, loading, fetchData }: any = useFetch(currentUser ? `/users/${currentUser?.uid}/saved-players` : "")

    useEffect(() => {
        fetchData()
    }, [currentUser])

    
    const value: any = {
        players,
        loading
    }
    
    return (
        <BookmarkContext.Provider value={value}>
            { children }
        </BookmarkContext.Provider>
    )
}
