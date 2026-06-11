import { Link } from "react-router-dom";

export default function Navbar() {
    return <nav className="navbar">
        <div className="navbar-container">
            <Link to="/">ShopHub</Link>
            <div className="navbar-links">
                <Link to="/" className="navbar-link">Home</Link>
                <div className="navbar-auth">
                    <Link to="/auth" className="btn btn-primary">Login</Link>
                    <Link to="/auth" className="btn btn-secondary">Register</Link>
                </div>
                <Link to="/checkout" className="navbar-link">Checkout</Link>
            </div>
        </div>
    </nav>
}