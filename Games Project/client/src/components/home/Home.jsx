import { useEffect, useState } from "react";

import withAuth from "../../HOK/withAuth";
import * as gameSevice from "../../services/gameService";
import LatestGame from "./latest-game/LatestGame";

function Home({
    email
}) {
    const [latestGame, setLatestGame] = useState([]);

    useEffect(() => {
        gameSevice.getLatest()
            .then(result => setLatestGame(result));
    }, []);

    return (
        <section id="welcome-world">
            <p>{email}</p>
            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>

                {latestGame.map(game => <LatestGame key={game._id} {...game} />)}

                {!latestGame.length && <p className="no-articles">No games yet</p>}

            </div>
        </section>
    );
}

export default withAuth(Home);