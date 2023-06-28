import React from "react";
import Footer from "../components/Footer";

function LinkSuccessOne() {
    return (
        <div style={{ backgroundColor: "#F5F5F5" }}>
            <button style={{
                margin: "4rem",
                border: "none", top: "41px", background: "#F3DF77", width: "168px", height: "56.662px",
                flexShrink: "0", borderRadius: "32.805px", fontWeight: "bold", fontSize: "17.121px"
            }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                    <i className="pi pi-reddit" style={{ color: "white", fontSize: "20px" }} />
                    <div>Sneakerloft</div>
                </div>
            </button>

            <div style={{ textAlign: "center", width: "430px", height: "360px", margin: " 0 auto", backgroundColor: "white", color: "#000000", display: "flex", flexDirection: "column", marginBottom: "4rem" }}>
                <img src="./images/Frame 39831.png" alt="" style={{ height: "40px", width: "40px", alignSelf: "center", marginTop: "3rem" }} />
                <div style={{ marginTop: "1.5rem" }}>
                    <p>We’ve sent a password reset link to your email. Check your email to set a new password.</p>
                </div>
                <p style={{ textDecoration: "underline", alignSelf: "center", marginTop: "5rem" }}>Go Back To Login</p>
            </div>
            <Footer />
        </div>
    )
}
export default LinkSuccessOne;