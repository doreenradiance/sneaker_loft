import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBagShopping, faUser, faHeart } from '@fortawesome/free-solid-svg-icons';
import "../styles/contact.scss";

function NavBar() {
    return (
        <>
            <div className="navBar_first_div" style={{backgroundColor:"#F5F5F5"}}>
                <div className="grid">
                    <div className="col-12 md:col-6 lg:col-4">
                        <div className="grid">
                            <div className="cat_div">
                                <div className="col-12 md:col-6 lg:col-3"><p>Men</p></div>
                                <div className="col-12 md:col-6 lg:col-3"><p>Women</p></div>
                                <div className="col-12 md:col-6 lg:col-3"><p>New Arrivals</p></div>
                                <div className="col-12 md:col-6 lg:col-3"><p>Sale</p></div>
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