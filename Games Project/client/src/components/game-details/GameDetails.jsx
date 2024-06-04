import { useContext, useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";

import * as gameService from "../../services/gameService";
import * as commentService from "../../services/commentServices";
import AuthContext from "../../contexts/authContext";
import reducer from './commentReducer';

const initialState = {
    username: '',
    comment: ''
};

export default function () {
    const { email } = useContext(AuthContext);
    const { gameId } = useParams();
    const [comments, dispatch] = useReducer(reducer, [])
    const [game, setGame] = useState({});
    const [formValues, setFormValues] = useState(initialState);

    useEffect(() => {
        gameService.getOne(gameId)
            .then(setGame);

        commentService.getAll(gameId)
            .then(result => {
                dispatch({
                    type: 'GET_ALL_COMMENTS',
                    payload: result
                });
            });

    }, [gameId]);

    const resetFormHandler = () => {
        setFormValues(initialState);
    }

    const addCommentHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const newComment = await commentService.create(
            gameId,
            formData.get('comment')
        );

        newComment.owner = { email };

        dispatch({
            type: "ADD_NEW_COMMENT",
            payload: newComment
        });

        resetFormHandler();
    };


    const changeHandler = (e) => {
        setFormValues((state) => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">{game.summary}</p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map(({ _id, text, owner: { email } }) => (
                            <li key={_id} className="comment">
                                <p>{email}: {text}</p>
                            </li>
                        ))}

                    </ul>

                    {comments.length === 0 && <p className="no-comment">No comments.</p>}
                </div>
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addCommentHandler}>
                    <textarea name="comment" placeholder="Comment......" onChange={changeHandler} value={formValues.comment} />
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>
    )
}