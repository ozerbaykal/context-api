import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Alert } from "react-native";

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [newTaskTitle, setNewTaskTitle] = useState("")

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
            setTasks(res.data)
            setLoading(false)
        }).catch((err) => {
            setError(err.message)
            setLoading(false)
        })

    }, [])
    // gönderilen id li task ı sil
    const deleteTask = (id) => {
        const filtered = tasks.filter((task) => task.id !== id)

        setTasks(filtered);
        Alert.alert("Task silindi")
    }

    //dizinin  içindeki en büyük id li elemanı bulur ve ona bir ekler
    const getNextId = () => {
        return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1;
    };


    const addTask = (title) => {
        const newTask = {
            userId: 1,
            id: getNextId(),
            title,

        }
        setTasks([...tasks, newTask])
        Alert.alert("Yeni Task Eklendi")

        setNewTaskTitle("")


    }


    return (

        <TaskContext.Provider value={{ tasks, error, loading, deleteTask, newTaskTitle, setNewTaskTitle, addTask }}>
            {children}

        </TaskContext.Provider>
    )



}

