import React from "react";
import Footer from "../components/Footer";
import SneakerLogo from "../components/SneakerLogo";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "../styles/contact.scss";
import "../styles/signUp.scss"

function SignUp() {

    return (
        < >
            <div className="grid main-contact-div">
                <div className="col-12 md:col-6 lg:col-6" >
                    <button className="sneaker_btn">
                        <div className="logo_icon_div">
                            <i className="pi pi-reddit logo_icon" />
                            <div>Sneakerloft</div>
                        </div>
                    </button>

                    <div style={{ marginLeft: "6rem" }}>
                        <p className="contact_text">Create your account</p>
                        <p className="footer_p">Send your emails in a few minutes.</p><p className="account_p">Already have an account?</p>
                        <p className="login_text">Login</p>

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
                            <div>
                                <Button className="create_button" label="Create an account" type="signup" />
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