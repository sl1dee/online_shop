import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            {/*<div className="navbar__logo">VETMO NAX</div>*/}
            <Link to="/" className="navbar__logo">VETEMENTS</Link>
            <div className="navbar__links">
                <Link to="/electronics" className="navbar__links__page">ELECTRONICS</Link>
                <div className="navbar__links__razdel">|</div>
                <Link to="/jewelery" className="navbar__links__page">JEWELERY</Link>
                <div className="navbar__links__razdel">|</div>
                <Link to="/men's clothing" className="navbar__links__page">MEN'S CLOTHING</Link>
                <div className="navbar__links__razdel">|</div>
                <Link to="/women's clothing" className="navbar__links__page">WOMEN'S CLOTHING</Link>


                {/*<Link to="/tshirts" className="navbar__links__page">T-SHIRTS</Link>*/}
                {/*<div className="navbar__links__razdel">|</div>*/}
                {/*<div className="navbar__links__page">JEANS</div>*/}
                {/*<div className="navbar__links__razdel">|</div>*/}
                {/*<div className="navbar__links__page">HOODIES</div>*/}
                {/*<div className="navbar__links__razdel">|</div>*/}
                {/*<div className="navbar__links__page">TRACKSUITS</div>*/}
                {/*<div className="navbar__links__razdel">|</div>*/}
                {/*<div className="navbar__links__page">JACKETS</div>*/}
                {/*<div className="navbar__links__razdel">|</div>*/}
                {/*<div className="navbar__links__page">HATS</div>*/}
                {/*<div className="navbar__links__razdel">|</div>*/}
                {/*<div className="navbar__links__page">RINGS</div>*/}


                {/*<Link to="/tshirts" className="navbar__links__page">T-SHIRTS</Link>*/}
                {/*<div className="navbar__links__razdel">|</div>*/}
                {/*<Link to="/jeans" className="navbar__links__page">JEANS</Link>*/}
                {/*<div className="navbar__links__razdel">|</div>*/}
                {/*<Link to="/hoodies" lassName="navbar__links__page">HOODIES</Link>*/}
                {/*<div className="navbar__links__razdel">|</div>*/}
                {/*<Link to="/tracksuits" className="navbar__links__page">TRACKSUITS</Link>*/}
                {/*<div className="navbar__links__razdel">|</div>*/}
                {/*<Link to="/jackets" className="navbar__links__page">JACKETS</Link>*/}
                {/*<div className="navbar__links__razdel">|</div>*/}
                {/*<Link to="/hats" className="navbar__links__page">HATS</Link>*/}
                {/*<div className="navbar__links__razdel">|</div>*/}
                {/*<Link to="/rings" className="navbar__links__page">RINGS</Link>*/}
            </div>
            <div className="navbar__login">
                <button>login</button>
            </div>

        </div>
    );
};

export default Navbar;