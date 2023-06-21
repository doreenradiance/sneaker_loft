import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import "../styles/profile.scss";

function MyProfileSidebar() {
    return (
        <div className="grid">
            <div className="col-12 md:col-6 lg:col-4" >
                <p className="profile_text">My Profile</p>
                <div className="orderTypes_div">
                    <p className="orderTypes favorites">Favorites</p>
                    <p className="orderTypes">Order History</p>
                    <p className="orderTypes">Personal Infomation</p>
                    <p className="orderTypes">Change Password</p>
                    <p className="info_hr"> </p>
                    <div className="logout_arrow_div">
                        <button className="logout_btn">Logout</button>
                        <FontAwesomeIcon className="faArrow_icon" icon={faArrowRightFromBracket} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfileSidebar;