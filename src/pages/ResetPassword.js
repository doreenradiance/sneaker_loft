import React from "react";
import Footer from "../components/Footer";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "../styles/contact.scss";
import "../styles/signUp.scss"

function ResetPassword() {
    return (
        <>
            <div className="grid" style={{ backgroundColor: "#F5F5F5" }}>
                <div className="col-12 md:col-6 lg:col-6" style={{ padding: "4rem" }} >
                    <button className="sneaker_btn">
                        <div className="logo_icon_div">
                            <i className="pi pi-reddit logo_icon"  />
                            <div>Sneakerloft</div>
                        </div>
                    </button>
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

                        <div style={{ marginTop: "2rem" }}>
                            <Button className="reset_button" label="Create New Password" type="signup" />
                        </div>
                    </form>
                </div>

                <div className="col-12 md:col-6 lg:col-6">
                    <img src="images/sidebar_brevo.webp4.png" alt="men" className="reset_password_image" />
                </div>
            </div>
            <Footer />
        </>
    )
}
export default ResetPassword;