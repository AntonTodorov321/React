import { Component } from 'react';

import TodoContext from './context/TodoContext';

import TodoList from './components/TodoList';
import Header from './components/Header';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoes: [],
            name: 'Pesho'
        };

        this.toggleTodo = this.toggleTodo.bind(this);
    };

    componentDidMount() {
        fetch('http://localhost:3030/jsonstore/todoes')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    todoes: Object.values(data)
                });
            });
    };

    toggleTodo(todoId) {
        this.setState({
            todoes: this.state.todoes.map(todo => todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo)
        });
    };

    removeTodo(todoId) {
        this.setState({
            todoes: this.state.todoes.filter(todo => todo.id !== todoId)
        });
    };

    render() {
        return (
            <TodoContext.Provider value={{ ...this.state }}>
                <Header />
                <h1>{this.state.name}</h1>
                <TodoList
                    todoes={this.state.todoes}
                    toggleTodo={this.toggleTodo}
                    removeTodo={this.removeTodo.bind(this)}
                />
            </TodoContext.Provider>
        );
    }
}

export default App
