import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

function CheckoutEmpty() {
    return (
        <>
            <div style={{ backgroundColor: "#F5F5F5" }}>
                <NavBar />

                <div className="checkoutEmpty_div">
                    <img src="./images/Group3.png" alt="" style={{ marginTop: "9rem" }} />
                    <p className="page_not_found">Page not found</p>
                    <p className="error_txt">Sorry the page you requested was not found.</p>
                    <button className="btn">
                        Back To Home
                        <FontAwesomeIcon icon={faHouse} style={{ paddingLeft: "0.5rem" }} />
                    </button>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default CheckoutEmpty;