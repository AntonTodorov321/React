import { ListGroup, Button } from 'react-bootstrap';
import { TodoItem } from './TodoItem';


export const TodoList = ({
    todoes,
    onTodoAddCLick,
}) => {
    return (
        <div style={{ width: "30%", margin: "10px auto" }}>
            <h1>Todo List</h1>
            <ListGroup >
                {todoes.map(todo => (
                    <TodoItem
                        key={todo._id}
                        {...todo}
                    />
                ))}
            </ListGroup>

            <Button style={{ marginTop: '10px' }} variant="primary" onClick={onTodoAddCLick}>Add</Button>

        </div>
    )
}