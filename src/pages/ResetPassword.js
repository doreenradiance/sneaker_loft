import React from "react";
import Footer from "../components/Footer";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "../styles/contact.scss";
import "../styles/signUp.scss"

function ResetPassword() {
    return (
        <>
            <div className="grid">
                {/* <div className="signin_main_div"  > */}
                <div className="col-12 md:col-6 lg:col-10" style={{ marginLeft: "4rem" }}>
                    <div className="forgotPassword_sneaker_text">
                        <p>Sneaker Loft</p>
                    </div>
                    <p className="reset_text">Reset Password</p>
                    <p className="resetpassword_text">Create a new password</p>
                    <form>
                        <div className="label-divs" >
                            <label className="contact_labels">Password</label>
                            <span className="required" >*</span>
                        </div>
                        <InputText className="contact_inputs" />

                        <div className="label-divs" >
                            <label className="contact_labels">Confirm Password</label>
                            <span className="required" >*</span>
                        </div>
                        <InputText className="contact_inputs" />

                        <div>
                            <Button className="create_button" label="Create New Password" type="signup" />
                        </div>
                    </form>
                </div>

                <div className="col-12 md:col-6 lg:col-2">
                    <img src="images/images (1).jfif" alt="men" className="reset_password_image" />
                </div>
                {/* </div> */}
            </div>
            <Footer />
        </>
    )
}
export default ResetPassword;