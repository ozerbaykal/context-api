import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext()


export const UserProvider = ({ children }) => {

    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            setUsers(response.data);
            setLoading(false)



        }).catch((err) => {
            setError(err.message)
            setLoading(false)
        })

    }, [])


    return (

        <UserContext.Provider value={{ users, error, loading }}>
            {children}
        </UserContext.Provider>




    )

}