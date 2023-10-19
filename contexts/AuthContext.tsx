import { createContext, useContext, useState, useEffect } from 'react'
import { auth } from '../services/Auth/firebase'


const AuthContext = createContext({})

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }: any) {
    const [currentUser, setCurrentUser] = useState<any>()
    const [loading, setLoading] = useState(true)

    // const [savedPlayers, setSavedPlayers] = useState([])
    // const [isSavedPlayersLoading, setIsSavedPlayersLoading] = useState(false)

    

    function createAccount(email: any, password: any) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function signIn(email: any, password: any) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function signOut() {
        return auth.signOut()
    }

    // const getSavedPlayers = async () => {

    //     try {
    //         if (!currentUser) {
    //             return
    //         }

    //         setIsSavedPlayersLoading(true)
    //         const response = await Axios.get(baseUrl + "/users/" + currentUser.uid + "/saved-players")
    //         console.log(response)
            
    //         setSavedPlayers(response.data)
    //     } catch (error) {
    //         console.log(error)
    //     }

    //     setIsSavedPlayersLoading(false)
    // }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            // setSavedPlayers([])
            setLoading(false)
        })

        return unsubscribe
    }, [])

    
    const value: any = {
        currentUser,
        loading,
        // savedPlayers,
        // isSavedPlayersLoading,
        // setSavedPlayers,
        // getSavedPlayers,
        signIn,
        createAccount,
        signOut
    }

    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}