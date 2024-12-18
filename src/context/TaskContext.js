import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
            setTasks(res.data)
            setLoading(false)
        }).catch((err) => {
            setError(err.message)
            setLoading(false)
        })

    }, [])


    return (

        <TaskContext.Provider value={{ tasks, error, loading }}>
            {children}

        </TaskContext.Provider>
    )



}

