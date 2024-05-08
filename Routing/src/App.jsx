import { Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import CharacterList from "./components/CharacterList";
import CharacterDetails from "./components/CharacterDetails";
import Contacts from "./components/Contacts";
import NotFound from "./components/NotFound";
import OurMission from "./components/OurMission";
import AboutUs from "./components/AboutUs";
import OurGoals from "./components/OurGoals";

function App() {
    return (
        <>

            <Navigation />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}>
                    <Route path="us" element={<AboutUs />} />
                    <Route path="mission" element={<OurMission />} />
                    <Route path="goals" element={<OurGoals />} />
                </Route>
                <Route path="/characters" element={<CharacterList />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/character/:id" element={<CharacterDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

            <footer>All rights reserved &copy;</footer>
        </>
    )
}

export default App
