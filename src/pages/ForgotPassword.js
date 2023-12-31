import React from "react";
import Footer from "../components/Footer";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "../styles/contact.scss";
import "../styles/signUp.scss";

function ForgotPassword() {
    return (
        <>
            <div className="grid" style={{ backgroundColor: "#F5F5F5" }}>
                <div className="col-12 md:col-6 lg:col-6" style={{ padding: "4rem" }} >
                    <button className="sneaker_btn">
                        <div className="logo_icon_div">
                            <i className="pi pi-reddit logo_icon" />
                            <div>Sneakerloft</div>
                        </div>
                    </button>
                    <div style={{textAlign:'left',display:"flex"}}>
                        <p className="forgot-password-text">Forgot password</p>
                    </div>
                    <p className="tap_p">We will send you a reset link to your mail. Remember password?</p>
                    <p className="forgot_passwordlogin_text">Login</p>
                    <form>
                        <div className="email_label_div" >
                            <label className="email_labels">Email</label>
                            <span className="required" >*</span>
                        </div>
                        <InputText className="contact_inputs" />

                        <div style={{ marginTop: "1.5rem" }}>
                            <Button className="forgot_button" label="Send reset link" type="signup" />
                        </div>

                    </form>
                </div>

                <div className="col-12 md:col-6 lg:col-6">
                    <img src="images/sidebar_brevo.webp3.png" alt="women" className="forgot_password_image" />
                </div>
            </div>
            <Footer />

        </ >
    )
}

export default ForgotPassword;