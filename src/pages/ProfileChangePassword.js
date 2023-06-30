import React from "react";
import NavBar from "../components/NavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';
import "../styles/profile.scss";
import Footer from "../components/Footer";
import MyProfileSidebar from "../components/MyProfileSidebar"

function ProfileChangePassword() {
    return (
        <>
            <div style={{ backgroundColor: "#F5F5F5" }}>
                <NavBar />
                <div className="grid info_main_div">
                    <div className="col-12 md:col-6 lg:col-4" >
                        <MyProfileSidebar />
                    </div>
                    <div className="col-12 md:col-6 lg:col-8" style={{ backgroundColor: "#FFFFFF", height: "30rem", marginTop: "4rem" }}>
                        <form>
                            <div className="label_input_div">
                                <label className="info_label">Current Password</label>
                                <input className="profile_change_password_input" placeholder="Enter your current password" />
                            </div>
                            <div className="label_input_div">
                                <label className="info_label">New Password</label>
                                <input className="profile_change_password_input" placeholder="Set a new password" />
                            </div>
                            <div className="characters">
                                <div className="character_divs">
                                    <p style={{ fontSize: "10px", color: " #34A853" }}>Uppercase</p>
                                    <FontAwesomeIcon className="faCheck" icon={faCheck} />
                                </div>
                                <div className="character_divs">
                                    <p className="other_characters">Lowercase</p>
                                    <FontAwesomeIcon className="faXmark" icon={faXmark} />
                                </div>
                                <div className="character_divs">
                                    <p className="other_characters" >Numbers</p>
                                    <FontAwesomeIcon className="faXmark" icon={faXmark} />
                                </div>
                                <div className="character_divs">
                                    <p className="other_characters" >Special Character</p>
                                    <FontAwesomeIcon className="faXmark" icon={faXmark} />
                                </div>
                            </div>
                            <div className="label_input_div">
                                <label className="info_label">Confirm New Password</label>
                                <input className="profile_change_password_input" placeholder="Confirm your new password" />
                            </div>
                            <button className="changepassword_btn" type="submit" >Change Password</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default ProfileChangePassword;