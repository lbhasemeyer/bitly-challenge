import React from 'react';
import './index.css';
import { Link, useLocation } from 'react-router-dom';

function Nav() {
    const currentLocation = useLocation().pathname;
    const isHomePage = currentLocation === '/animals';

    return (
        <div className="Nav">
            <Link to='/animals'>
                <div className="Nav-text">
                    {isHomePage ? 'Viewing All Animals' : 'Go To All Animals'}
                </div>
            </Link>
        </div>
    );
}

export default Nav;
