import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* <h1>Our Solar System</h1> */}
            <div className="links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/Quiz">Quiz</a>
                <a href="/PlanetComparison">Planet Comparison</a>
            </div>
        </nav>
    );
}

export default Navbar;