import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Women from "./Women";

function Men() {

    const renderMen = (
        // <div style={{ backgroundColor: "white" }}>
        <div className="grid" style={{ backgroundColor: "white", display: "flex", flexDirection: "row", height: "28rem", borderRadius: "0.5rem", marginLeft: "0.5rem", marginTop: "" }}>
            <div className="col-12 md-col-6 lg:col-6" >
                <h1 style={{
                    paddingLeft: "1rem", paddingTop: "2rem", paddingBottom: "1rem", fontSize: "30px", fontFamily: 'Nohemi', fontWeight: "600",
                    color: "#000000"
                }}>Men Category</h1>

                <div className="grid" style={{
                    display: "flex", flexDirection: "row", backgroundColor: "#FDF7F1", borderRadius: "0.2rem", width: "95%", height: "75px",
                    marginLeft: "1rem",
                }}>
                    <div className="col-12 md:col-6 lg:col-10" style={{ padding: "0" }}>
                        <p style={{ color: "#000000", width: "128px", paddingLeft: "0.5rem", paddingTop: "0", fontSize: "15px", fontStyle: "normal", fontWeight: "600", fontFamily: 'Nohemi', }}
                        >  Most popular</p>
                        <p style={{ fontSize: "15px", color: "#b3b3b3", marginLeft: "0.5rem" }}> See most viewed shoes</p>
                    </div>
                    <div style={{ marginTop: "1.2rem", marginRight: "0" }} className="col-12 md:col-6 lg:col-2" >
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>

                <div style={{ marginLeft: "1rem", marginTop: "2rem" }}>
                    <p style={{ fontSize: "15px", fontWeight: "600", fontFamily: 'Nohemi' }}>New Arrival</p>
                    <p style={{
                        color: "#b3b3b3", fontSize: "15px"
                    }}>Latest arrival of our shoe collection</p>
                </div>
                <div style={{ marginLeft: "1rem", marginTop: "2rem" }}>
                    <span style={{ fontSize: "15px", fontWeight: "600", fontFamily: 'Nohemi', marginTop: "1rem" }}>View All</span>
                    <p style={{
                        color: "#b3b3b3", fontSize: "15px",
                    }}>See all men shoes</p>
                </div>
            </div>
            <div className="col-12 md-col-6 lg:col-6 " style={{ marginTop: "2rem" }}>
                <div className="grid">
                    <div className="col-12 md-col-6 lg:col-6 ">
                        <img style={{ height: "330px", width: "330px", borderRadius: "0.5rem" }} src="images/Rectangle 22.png" alt="men" />
                    </div>
                    <div className="col-12 md-col-6 lg:col-6 ">
                        <img style={{ height: "330px", width: "330px", borderRadius: "0.5rem" }} src="images/shoe_info_main.png" alt="men" />
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div style={{ backgroundColor: "#F5F5F5" }} >
            {renderMen}
            <Women />
        </div>
    )
}

export default Men;