import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

function CheckoutEmpty() {
    return (
        <>
            <NavBar />

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#F5F5F5" }}>
                <p style={{ fontWeight: "bold", fontSize: "42px", margin: "0" }}>Page not found</p>
                <p style={{ fontSize: "14px" }}>Sorry the page you requested was not found.</p>
                <button style={{ width: "10rem", height: "2.5rem", backgroundColor: "#F3DF77", border: "none", borderRadius: "0.2rem", marginBottom: "8rem" }}>
                    Back To Home
                    <FontAwesomeIcon icon={faHouse} style={{ paddingLeft: "0.5rem" }} />
                </button>
            </div>
            <Footer />

        </>
    )
}

export default CheckoutEmpty;