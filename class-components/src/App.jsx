import { Component } from 'react';

import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import TodoList from './TodoList';

const items = [
    {
        label: 'Navigation One',
        key: 'mail',
        icon: <MailOutlined />,
    },
    {
        label: 'Navigation Two',
        key: 'app',
        icon: <AppstoreOutlined />,
        disabled: true,
    },
    {
        label: 'Navigation Three - Submenu',
        key: 'SubMenu',
        icon: <SettingOutlined />,
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],
    },
    {
        key: 'alipay',
        label: (
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
            </a>
        ),
    },
];

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
            <>
                <Menu mode="horizontal" items={items} />
                <h1>{this.state.name}</h1>

                <TodoList
                    todoes={this.state.todoes}
                    toggleTodo={this.toggleTodo}
                    removeTodo={this.removeTodo.bind(this)}
                />
            </>
        );
    }
}

export default App
