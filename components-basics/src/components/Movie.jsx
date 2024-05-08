export default function Movie(props){
    return(
        <article>
            <h3>{props.data.title}</h3>
            <p>{props.data.year}</p>
            <p>{props.data.actors}</p>
        </article>
    );
}