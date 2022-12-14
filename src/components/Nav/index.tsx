import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.css';

function Nav() {
    const currentLocation = useLocation().pathname;
    const isHomePage = currentLocation === '/animals';

    return (
        <div className="Nav">
            <Link to='/animals'>
                <span className="Nav-text">
                    {isHomePage ? 'Currently viewing all animals' : 'Go to all animals'}
                </span>
            </Link>
        </div>
    );
}

export default Nav;
