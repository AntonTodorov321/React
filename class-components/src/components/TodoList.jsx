import { Component } from 'react';
import TodoListItem from './TodoListItem';

import { Space } from 'antd';


export default class TodoList extends Component {
    render() {
        return (
            <Space direction="vertical" size={16}>
                {this.props.todoes.map(todo =>
                    <TodoListItem
                        key={todo._id}
                        toggleTodo={this.props.toggleTodo}
                        removeTodo={this.props.removeTodo}
                        {...todo}
                    />)}
            </Space>
        )
    }
}
