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
                <p className="price_profile">{price}</p>
            </div>
        )
    }
    return (
        <>
            <div style={{ backgroundColor: "#F5F5F5" }}>
                <NavBar />
                <div className="grid info_main_div">
                    <div className="col-12 md:col-6 lg:col-4" >
                        <MyProfileSidebar />
                    </div>
                    <div className="col-12 md:col-6 lg:col-8 my_fav_div">
                        <p className="my_fav_txt">My Favorite</p>
                        <div className="grid my_fav_div2">
                            <div className="grid" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <div className="col-4" >
                                    <div className="profile_back-img1">
                                    <p className="Italy_txt">Made in Italy</p>
                                    </div>
                                    {/* <div>  <img className=" fav_image1" src="images/GREATS-Mens-Reign-RetroBlue-Black-01_Web.jpg.png" alt="one" /></div> */}
                                    {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                                </div>
                                <div className="col-4">
                                    {/* <p className="Italy_txt">Made in Italy</p> */}
                                    <img src="images/removal1.png"
                                        className=" fav_image2" alt="two" />
                                    {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                                </div>
                                <div className="col-4">
                                    <p className="Italy_txt">Made in Italy</p>
                                    <img src="images/GREATS-Womens-Charlie-Blanco-01_Web.jpg.png"
                                        className=" fav_image3" alt="three" />
                                    {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                                </div>
                            </div>
                            {/* <div className="col-12 md:col-6 lg:col-4" >
                                <p className="Italy_txt">Made in Italy</p>
                                <img className="fav_image1" src="images/images (2).jfif" alt="one" />
                                {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                            </div>
                            <div className="col-12 md:col-6 lg:col-4">
                                <img src="images/on-wmns-cloudnova-void-undyed-white-flame-3wd12190865-footwear_20_3E_20sneaker_f5777f65-ba5e-4ca4-ba6e-5a2025393faf_600x.webp"
                                    className="fav_image2" alt="two" />
                                {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                            </div>
                            <div className="col-12 md:col-6 lg:col-4">
                                <p className="Italy_txt">Made in Italy</p>
                                <img src="images/FML_4224.webp"
                                    className="fav_image3" alt="three" />
                                {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default ProfileFavList;