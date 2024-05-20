import { ListGroup, Button } from "react-bootstrap";

export const TodoItem = ({
    _id,
    text,
    onTodoDeleteClick
}) => {
    return (
        <ListGroup.Item action style={{display:'flex', justifyContent:'space-between'}} >
            {text}
            <Button variant="dark" onClick={() => onTodoDeleteClick(_id)}>X</Button>
        </ListGroup.Item>
    )
}