import React from "react";
import Footer from "../components/Footer";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "../styles/contact.scss";
import "../styles/signUp.scss"

function ForgotPassword() {
    return (
        <>
            <div className="grid">
                {/* <div className="signin_main_div"  > */}
                <div className="col-12 md:col-6 lg:col-8" style={{ marginLeft: "4rem", backgroundColor: "#F5F5F5" }}>
                    <div className="forgotPassword_sneaker_text">
                        <p>Sneaker Loft</p>
                    </div>
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


                <div className="col-12 md:col-6 lg:col-4">
                    <img src="images/images (5).jfif" alt="women" className="forgot_password_image" />
                </div>
                {/* </div> */}
            </div>
            <Footer />

        </ >
    )
}

export default ForgotPassword;