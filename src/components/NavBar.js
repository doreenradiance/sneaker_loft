import React from "react";
import "../styles/contact.scss";
import "../styles/homePage.scss"
import "../styles/navbar.scss"

const NavBar = ({ backgroundColor, textColor }) => {
    return (
        <>
            <div className={`navBar_first_div ${backgroundColor}`}>
                <div className="grid" style={{ paddingTop: "2rem" }}>
                    <div className={`col-5 ${textColor} nav_cat_div`}>
                        <div className="nav_cat_men">Men</div>
                        <div className="nav_cat_women">Women</div>
                        <div className="nav_cat_new_arrivals">New Arrivals</div>
                        <div className="nav_cat_sales">Sales</div>
                        <div className="nav_cat_blogs">Blogs</div>
                    </div>
                    <div class="col-4">
                        <button className="sneaker_logo_btn">
                            <div className="sneaker_logo_text">
                                <i className="pi pi-reddit" style={{ color: "white", fontSize: "20px" }} />
                                <div>Sneakerloft</div>
                            </div>
                        </button>
                    </div>
                    <div class={`col-2 ${textColor}`} >
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