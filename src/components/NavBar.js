import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBagShopping, faUser, faHeart } from '@fortawesome/free-solid-svg-icons';
import "../styles/contact.scss";

const NavBar = ({ design }) => {
    return (
        <>
            <div className={`navBar_first_div ${design}`}>
                <div className="grid">
                    <div className="col-12 md:col-6 lg:col-4">
                        <div className="grid">
                            <div className="col-7 cat_div" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <span className="navbar-items-text">Men</span>
                                <span className="navbar-items-text">Women</span>
                                <span className="navbar-items-text">New Arrivals</span>
                                <span className="navbar-items-text">Sale</span>
                                {/* <div className="col-12 md:col-6 lg:col-2.5">Blog</div> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-12 md:col-6 lg:col-4">
                        <div className="sneaker_text">
                            <p style={{ marginTop: "0.5rem" }} >Sneaker Loft</p>
                        </div>
                    </div>

                    <div className="col-12 md:col-6 lg:col-4">
                        <div className="grid">
                            <div className="col-12 md:col-6 lg:col-3">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                {/* style={{ marginLeft: "5rem", marginRight: "5rem" }} */}
                            </div>
                            <div className="col-12 md:col-6 lg:col-3">
                                <FontAwesomeIcon icon={faUser} />
                                {/* style={{ marginRight: "5rem", }} */}
                            </div>
                            <div className="col-12 md:col-6 lg:col-3">
                                <FontAwesomeIcon icon={faHeart} />
                                {/* style={{ marginRight: "5rem", }}  */}
                            </div>
                            <div className="col-12 md:col-6 lg:col-3">
                                <FontAwesomeIcon icon={faBagShopping} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NavBar;