import { useState, useEffect } from "react";

import { Header } from "./components/Header"
import { TodoList } from "./components/TodoList";
import { AddTodoModal } from "./components/AddTodoModal";
import { TodoContext } from './contexts/TodoContext';

import 'bootstrap/dist/css/bootstrap.min.css';

const baseUrl = "http://localhost:3030/jsonstore/todoes";

function App() {
    const [todoes, setTodoes] = useState([]);
    const [showAddTodo, setShowAddTodo] = useState(false);

    useEffect(() => {
        fetch(baseUrl)
            .then(data => data.json())
            .then(result => {
                setTodoes(Object.values(result));
            });
    }, []);

    const onTodoAddSubmit = async (values) => {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(values)
        });

        const result = await response.json();

        setShowAddTodo(false);
        setTodoes(state => [...state, result]);
    };

    const onTodoAddCLick = () => {
        setShowAddTodo(true);
    };

    const onTodoAddClose = () => {
        setShowAddTodo(false);
    };

    const onTodoDeleteClick = (todoId) => {
        fetch(`${baseUrl}/${todoId}`, {
            method: 'DELETE'
        });

        setTodoes(state => state.filter(x => x._id !== todoId));
    };

    const onTodoClick = async (todoId) => {
        const todo = todoes.find(x => x._id === todoId);

        await fetch(`${baseUrl}/${todoId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                ...todo,
                isCompleted: !todo.isCompleted
            })
        });

        setTodoes(state => state.map(x => x._id === todoId ? { ...x, isCompleted: !x.isCompleted } : x));
    };

    const contextValue = {
        onTodoDeleteClick,
        onTodoClick
    };

    return (
        <TodoContext.Provider value={contextValue}>
            <div>
                <Header />
                <TodoList
                    todoes={todoes}
                    onTodoAddCLick={onTodoAddCLick}
                />

                <AddTodoModal
                    onTodoAdd={onTodoAddSubmit}
                    show={showAddTodo}
                    onTodoAddClose={onTodoAddClose}
                />
            </div>
        </TodoContext.Provider>
    )
}

export default App
