import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css"

const Header = () => {
    return (
        <div className="header">
            <div>
                <img style={{ width: '200px' }} src="https://i.ibb.co/qgmph9y/Group-1329.png" alt="" />
            </div>
            <div>
                <Link to="/home">Home</Link>
                <Link to="/donation">Donation</Link>
                <Link to="/events">Events</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/register">
                    <button className="btn btn-primary">Register</button>
                </Link>
                <Link to="/login">Login </Link>
                <Link to="/admin">
                    <button className="btn btn-dark">Admin</button>
                </Link>
            </div>
        </div>
    );
};

export default Header;