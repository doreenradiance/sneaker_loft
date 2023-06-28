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
                    <button style={{
                        // marginLeft: "5rem",
                        border: "none", top: "41px", background: "#F3DF77", width: "168px", height: "56.662px", flexShrink: "0",
                        borderRadius: "32.805px", fontWeight: "bold", fontSize: "17.121px",
                    }}><div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                            <i className="pi pi-reddit" style={{ color: "white", fontSize: "20px" }} />
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

                        <div>
                            <Button className="create_button" label="Create New Password" type="signup" />
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