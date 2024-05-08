import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CharacterCard = ({
    name,
    hair_color,
    height,
    eye_color,
    birth_year,
    id
}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <ul>
                        <li>height: {height}</li>
                        <li>hair color: {hair_color}</li>
                        <li>eye color: {eye_color}</li>
                        <li>birth year: {birth_year}</li>
                    </ul>
                </Card.Text>
                <Button as={Link} to={`/character/${id}`} variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );
}

export default CharacterCard;