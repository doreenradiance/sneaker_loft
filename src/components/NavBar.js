import React from "react";
import "../styles/contact.scss";
import "../styles/homePage.scss"


const NavBar = ({ backgroundColor, textColor }) => {
    return (
        <>
            <div className={`navBar_first_div ${backgroundColor}`}>
                <div className="grid" style={{ paddingTop: "4rem",paddingLeft:"4rem" }}>
                    <div class={`col-5 ${textColor}`} style={{ display: "flex", flexDirection: "row", fontFamily: "Arial", fontWeight: "bolder", fontSize: "20px", alignItems: "center" }}>
                        <div style={{ width: "41px", height: "23px", marginRight: "31px" }}>Men</div>
                        <div style={{ width: "72px", height: "23px", marginRight: "31px" }}>Women</div>
                        <div style={{ width: "121px", height: "23px", marginRight: "31px" }}>New Arrivals</div>
                        <div style={{ width: "42px", height: "23px", marginRight: "31px" }}>Sales</div>
                        <div style={{ width: "45px", height: "23px", marginRight: "31px" }}>Blogs</div>
                    </div>
                    <div class="col-4">
                        <button style={{ border: "none", top: "41px", background: "#F3DF77", width: "168px", height: "56.662px", flexShrink: "0", borderRadius: "32.805px", fontWeight: "bold", fontSize: "17.121px" }}>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                                <i className="pi pi-reddit" style={{ color: "white", fontSize: "20px" }} />
                                <div>Sneakerloft</div>
                            </div>
                        </button>
                    </div>
                    <div class={`col-2 ${textColor}`} >
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignContent: "center", marginTop: "20px" }}>
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