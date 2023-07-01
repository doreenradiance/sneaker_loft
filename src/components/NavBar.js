import React from "react";
import "../styles/contact.scss";
import "../styles/homePage.scss"
import "../styles/navbar.scss"

const NavBar = ({ backgroundColor, textColor }) => {
    return (
        <>
            <div className={`navBar_first_div ${backgroundColor}`}>
                <div className="grid" style={{ paddingTop: "2rem", marginLeft: "3rem" }}>
                    <div className={`col-12 md:col-6 lg:col-5 sm:col-5 ${textColor} nav_cat_div`} style={{ alignItems: "center" }}>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <div style={{ marginRight: "8px" }}>Men</div>
                            <div style={{ marginRight: "8px" }} >Women</div>
                            <div style={{ marginRight: "8px" }}>New Arrivals</div>
                            <div style={{ marginRight: "8px" }}>Sales</div>
                            <div>Blogs</div>
                        </div>
                    </div>
                    <div className="col-12 md:col-6 lg:col-4 sm:col-6">
                        <div>
                            <button className="sneaker_logo_btn">
                                <div className="sneaker_logo_text">
                                    <i className="pi pi-reddit" style={{ color: "white", fontSize: "20px" }} />
                                    <div>Sneakerloft</div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className={`col-2 ${textColor}`} >
                        <div className="nav_icons">
                            <div>
                                <i className="pi pi-search" />
                            </div>
                            <div>
                                <i className="pi pi-user" />
                            </div>
                            <div>
                                <i className="pi pi-heart" />
                            </div>
                            <div>
                                <i className="pi pi-shopping-bag" />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default NavBar;