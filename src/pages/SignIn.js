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
                    <div style={{ paddingTop: "4rem" }}>
                        <button className="sneaker_btn">
                            <div className="logo_icon_div">
                                <i className="pi pi-reddit logo_icon" />
                                <div>Sneakerloft</div>
                            </div>
                        </button>
                    </div>
                    <p className="contact_text">Hi, Welcome back.</p>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <p className="footer_p">Send your emails in a few minutes.</p><p className="account_p">Already have an account?</p>
                    </div>
                    <p className="signin_text">Create one</p>

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

                        <div className="signin_create_button ">
                            <Button className="signin_create_button" label="Login to account" type="signin" />
                        </div>
                    </form>
                    <div className="hr-div">
                        <p className="hr" />
                        <p className="p-or">OR</p>
                        <p className="hr" />
                    </div>
                    <div>
                        <button className="google_button" type="submit">
                            <div className="google_button_div">
                                <div>
                                    <img src="images/SVG.png" alt="" className="google-image" />
                                </div>
                                <div style={{ marginTop: "" }}>
                                    Sign up with google
                                </div>
                            </div>
                        </button>
                    </div>
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