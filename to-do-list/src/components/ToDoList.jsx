import { useEffect, useState } from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList() {

    const [todos, setTodos] = useState([]);

    const chanheStatusHandler = (todoId) => {
        setTodos(state => state.map(todo => todo._id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo));
    };

    useEffect(() => {
        fetch("http://localhost:3030/jsonstore/todos")
            .then(res => res.json())
            .then(data => {
                const result = Object.values(data);
                setTodos(result);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <section className="todo-list-container">
            <h1>Todo List</h1>

            <div className="add-btn-container">
                <button className="btn">+ Add new Todo</button>
            </div>

            <div className="table-wrapper">

                <table className="table">
                    <thead>
                        <tr>
                            <th className="table-header-task">Task</th>
                            <th className="table-header-status">Status</th>
                            <th className="table-header-action">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(todo => (
                            <ToDoItem
                                key={todo._id}
                                id={todo._id}
                                text={todo.text}
                                isCompleted={todo.isCompleted}
                                changeStatusHandler={chanheStatusHandler}
                            />
                        ))};
                    </tbody>
                </table>
            </div>
        </section>
    );
}