import { Link, Outlet } from "react-router-dom";


const About = () => {
    return (
        <>
            <h2>About</h2>

            <nav>
                <Link to="us">About Us</Link>
                <Link to="mission">Our mission</Link>
                <Link to="goals">Our goals</Link>
            </nav>

            <Outlet/>
        </>
    );
};

export default About;