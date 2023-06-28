import React from "react";
import NavBar from "../components/NavBar";
import "../styles/profile.scss";
import Footer from "../components/Footer";
import MyProfileSidebar from "../components/MyProfileSidebar"

function ProfileInformation() {
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
                            <div className="name_div">
                                <div className="label_input_div">
                                    <label className="info_label">First Name</label>
                                    <input className="profile_info_input" />
                                </div>
                                <div className="label_input_div">
                                    <label className="info_label">Last Name</label>
                                    <input className="profile_info_input" />
                                </div>
                            </div>
                            <div className="label_input_div">
                                <label className="info_label">Email Address</label>
                                <input className="profile_info_email_input" />
                            </div>
                            <button className="saveChanges_btn" type="submit" >Save Changes</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProfileInformation;
