import { useContext } from "react";

import { ListGroup, Button } from "react-bootstrap";
import { TodoContext } from "../contexts/TodoContext";

export const TodoItem = ({
    _id,
    text,
}) => {
    const {onTodoDeleteClick} = useContext(TodoContext);

    return (
        <ListGroup.Item action style={{ display: 'flex', justifyContent: 'space-between' }} >
            {text}
            <Button variant="dark" onClick={() => onTodoDeleteClick(_id)}>X</Button>
        </ListGroup.Item>
    )
}