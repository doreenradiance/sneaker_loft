import React from "react";
import Footer from "../components/Footer";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "../styles/contact.scss";
import "../styles/signUp.scss"

function SignIn() {
    return (
        <>
            <div className="grid signin_main_div" >
                <div className="col-12 md:col-6 lg:col-6">
                    <button style={{
                        border: "none", top: "41px", background: "#F3DF77", width: "168px", height: "56.662px", flexShrink: "0",
                        borderRadius: "32.805px", fontWeight: "bold", fontSize: "17.121px", marginTop: "4rem"
                    }}>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                            <i className="pi pi-reddit" style={{ color: "white", fontSize: "20px" }} />
                            <div>Sneakerloft</div>
                        </div>
                    </button>
                    <p className="contact_text">Hi, Welcome back.</p>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <p className="footer_p">Send your emails in a few minutes.</p><p className="account_p">Already have an account?</p>
                    </div>
                    <p className="login_text">Create one</p>

                    <form>
                        <div className="label-divs" >
                            <label className="contact_labels">Email</label>
                            <span className="required" >*</span>
                        </div>
                        <InputText className="contact_inputs" />

                        <div className="label-divs">
                            <div className="password_label-div">
                                <label className="contact_labels">Password</label>
                                <span className="required">*</span>
                                <label className="forgot_password_text">Forgot Password </label>
                            </div>
                        </div>
                        <InputText className="contact_inputs" />

                        <div>
                            <Button className="create_button" label="Login to account" type="signup" />
                        </div>
                    </form>
                    <div className="hr-div">
                        <p className="hr" />
                        <p className="p-or">OR</p>
                        <p className="hr" />
                    </div>
                    <button className="google_button" type="submit">
                        <img src="google-suite-icon-google-icon-LmAAJV07.jpg" alt="" className="google-image" />
                        Sign up with google
                    </button>
                </div>

                <div className="col-12 md:col-6 lg:col-6" >
                    <img src="images/sidebar_brevo.webp.png" alt="men" style={{ height: "42rem", width: "34rem" }} />
                </div>
            </div>

            <Footer />

        </>
    )
}
export default SignIn;