import './App.css';
import MovieList from './components/MovieList';
import movies from './assets/movies';
import Timer from './components/Timer';
import Counter from './components/Counter';

function App() {
    return (
        <div>
            <Counter/>

            <Timer startTime = {5}/>
            <Timer startTime = {6}/>
            <Timer startTime = {7}/>
            <h1>My first dynamic React</h1>
            <MovieList movies={movies} headingText="Filmi" secondaryTest="Secondary Text" />
        </div>
    )
}

export default App
