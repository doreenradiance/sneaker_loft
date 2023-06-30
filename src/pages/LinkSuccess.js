import React from "react";
import Footer from "../components/Footer";
import "../styles/success.scss";
import "../styles/signUp.scss"

function LinkSuccess() {
    return (
        <div style={{ backgroundColor: "#F5F5F5",padding: "2rem" }}>
            <button className="sneaker_btn">
                <div className="logo_icon_div">
                    <i className="pi pi-reddit logo_icon" />
                    <div>Sneakerloft</div>
                </div>
            </button>
            <div className="center_div">
                <img src="./images/Frame 3983.png" alt="" className="img_icon" />
                <div className="password_set_txt">New password set successfully.</div>

                <button className="log_btn">Back To Login</button>
            </div>
            <Footer />
        </div>
    )
}
export default LinkSuccess;