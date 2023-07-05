import React from "react";
import MyProfileSidebar from "../components/MyProfileSidebar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/profile.scss";

function ProfileFavList() {

    const cardSection = (title, cloud_txt, max_txt, price) => {
        return (
            <div className="fav_texts_div">
                <p className="ltd_edt_txt" >{title}</p>
                <p className="cloud_txt">{cloud_txt}</p>
                <p className="max_txt">{max_txt}</p>
                <div className="fav_texts_last_div">
                    <p className="price_profile">{price}</p>
                    <img src="images/Frame.png" alt="" className="heart_img" />
                </div>
            </div>
        )
    }
    return (
        <>
            <div style={{ backgroundColor: "#F5F5F5" }}>
                <div>
                    <NavBar />
                </div>
                <div className="grid info_main_div">
                    <div className="col-12 md:col-6 lg:col-4" >
                        <MyProfileSidebar />
                    </div>
                    <div className="col-12 md:col-6 lg:col-8 right-side-main-div">
                        <p className="my_fav_txt">My Favorite</p>
                        <div className="grid">
                            <div className="col-4" style={{ display: "flex", flexDirection: "column" }}>
                                <div>
                                    <img src="images/GREATS-Mens-Reign-RetroBlue-Black-01_Web.jpg.png"
                                        className="profile_fav_imgs" alt="two" />
                                </div>
                                <div className="cardSection_div">
                                    {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                                </div>
                            </div>
                            <div className="col-4">
                                <div>
                                    <img src="images/removal1.png"
                                        className="profile_fav_imgs" alt="two" /></div>
                                <div className="cardSection_div">
                                    {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                                </div>
                            </div>
                            <div className="col-4">
                                <div>
                                    <img src="images/GREATS-Womens-St.JamesLow-Blanco-01Web.jpg (1).png"
                                        className="profile_fav_imgs" alt="two" />
                                </div>
                                <div className="cardSection_div">
                                    {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default ProfileFavList;