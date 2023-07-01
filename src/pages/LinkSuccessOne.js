import React from "react";
import Footer from "../components/Footer";
import "../styles/success.scss";
import "../styles/signUp.scss"

function LinkSuccessOne() {
    return (
        <div style={{ backgroundColor: "#F5F5F5" }}>
            <button className="sneaker_btn">
                <div className="logo_icon_div">
                    <i className="pi pi-reddit logo_icon"/>
                    <div>Sneakerloft</div>
                </div>
            </button>

            <div className="center_div">
                <img src="./images/Frame 39831.png" alt=""  className="img_icon"/>
                <div style={{ marginTop: "1.5rem" }}>
                    <p className="p_sentence">We’ve sent a password reset link to your email. Check your email to set a new password.</p>
                </div>
                <p className="back_to_login">Go Back To Login</p>
            </div>
            <Footer />
        </div>
    )
}
export default LinkSuccessOne;