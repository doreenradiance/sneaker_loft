import React from "react";
import Footer from "../components/Footer";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "../styles/contact.scss";
import "../styles/signUp.scss"

function ForgotPassword() {
    return (
        <>
            <div className="grid" style={{ backgroundColor: "#F5F5F5" }}>
                <div className="col-12 md:col-6 lg:col-6" style={{ padding: "4rem" }} >
                    <button style={{
                        border: "none", top: "41px", background: "#F3DF77", width: "168px", height: "56.662px", flexShrink: "0",
                        borderRadius: "32.805px", fontWeight: "bold", fontSize: "17.121px",
                    }}>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                            <i className="pi pi-reddit" style={{ color: "white", fontSize: "20px" }} />
                            <div>Sneakerloft</div>
                        </div>
                    </button>
                    <p className="contact_text">Forgot password</p>
                    <p className="footer_p">We will send you a reset link to your mail. Remember password?</p>
                    <p className="login_text">Login</p>
                    <form>
                        <div className="label-divs" >
                            <label className="contact_labels">Email</label>
                            <span className="required" >*</span>
                        </div>
                        <InputText className="contact_inputs" />

                        <div>
                            <Button className="create_button" label="Send reset link" type="signup" />
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