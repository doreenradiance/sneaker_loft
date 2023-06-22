import React from "react";
import Footer from "../components/Footer";

function LinkSuccess() {
    return (
        <div style={{ backgroundColor: "#F5F5F5", margin: "0" }}>
            <div className="sneaker_text">
                <p style={{ marginTop: "0.5rem" }} >Sneaker Loft</p>
            </div>
            <div style={{ textAlign: "center" }}>
                <div style={{ width: "500px", margin: " 0 auto", backgroundColor: "white", color: "#000000" }}>New password set sucessfully.
                    <button style={{ height: "3rem", width: "20rem", color: "#F3DF77", backgroundColor: "#000000" }}>Back To Login</button></div>

            </div>

            <Footer />
        </div>
    )
}
export default LinkSuccess;