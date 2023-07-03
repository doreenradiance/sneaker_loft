import React from "react";
import Footer from "../components/Footer";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "../styles/contact.scss";
import "../styles/signUp.scss"

function SignUp() {

    return (
        < >
            <div className="grid main-contact-div">
                <div className="col-12 md:col-6 lg:col-6" >
                    <div style={{ padding: "2rem 0rem 0rem 6rem" }}>
                        <button className="sneaker_btn">
                            <div className="logo_icon_div">
                                <i className="pi pi-reddit logo_icon" />
                                <div>Sneakerloft</div>
                            </div>
                        </button>
                    </div>

                    <div style={{ marginLeft: "6rem" }}>
                        <p className="contact_text">Create your account</p>
                        <p className="footer_p">Send your emails in a few minutes.</p><p className="account_p">Already have an account?</p>
                        <p className="signup_login_text">Login</p>

                        <form>
                            <div className="label-divs" >
                                <label className="contact_labels">Full Name</label>
                                <span className="required" >*</span>
                            </div>
                            <InputText className="contact_inputs" />

                            <div className="label-divs">
                                <label className="contact_labels">Email</label>
                                <span className="required">*</span>
                            </div>
                            <InputText className="contact_inputs" />

                            <div className="label-divs">
                                <label className="contact_labels">Password</label>
                                <span className="required">*</span>
                            </div>
                            <InputText className="contact_inputs" />
                            <div className="signup_create_button_div">
                                <Button className="signup_create_button" label="Create an account" type="signup" />
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
                                    <div>
                                        Sign up with google
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-6">
                    <img src="images/sidebar_brevo.webp2.png" alt="women" />
                </div>
            </div>

            <Footer />

        </>
    )
}

export default SignUp;