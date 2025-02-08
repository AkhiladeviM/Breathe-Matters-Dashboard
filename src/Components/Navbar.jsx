import React from 'react';
import "../Styles.css";
import logo from "../Images/Breathe matters Logo.png"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white">
            <a className="navbar-brand" href="#">
                <img src={logo} width="250" alt="Logo" />
            </a>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0" style={{ fontSize: "19px" }}>
                    <li className="nav-item active">
                        <a style={{ color: "black" }} className="nav-link" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a style={{ color: "black" }} className="nav-link" href="#">Products</a>
                    </li>
                    <li className="nav-item">
                        <a style={{ color: "black" }} className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a style={{ color: "black" }} className="nav-link" href="#">Queries</a>
                    </li>
                    <li className="nav-item">
                        <a style={{ color: "black" }} className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar