import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar({ selectedTab }) {

    return (
        <nav>
            <Link to="/" id={selectedTab === "home"?"selected" : null}>Home</Link>
            <Link to="/trades" id={selectedTab === "trades"?"selected" : null}>Trades</Link>
            <Link to="/expenses" id={selectedTab === "expenses"?"selected" : null}>Expenses</Link>
            <Link to="/partners" id={selectedTab === "partners"?"selected" : null}>Partners</Link>
            <Link to="/reporting" id={selectedTab === "reporting"?"selected" : null}>Reporting</Link>
            <p>Nopus V1.0.1</p>
        </nav>
    )
}