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
                <div className="col-12 md:col-6 lg:col-6" style={{ marginLeft: "4rem" }}>
                    <div className="sneaker_text2">
                        <p>Sneaker Loft</p>
                    </div>
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
                    <img src="images/men.jpg" alt="men" className="signup-image" />
                </div>
            </div>

            <Footer />

        </>
    )
}
export default SignIn;