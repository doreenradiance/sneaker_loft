import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MyProfileSidebar from "../components/MyProfileSidebar";
import "../styles/profile.scss";


const hr_tag = <p className="profile_hr"></p>

const ProfileInfoCardSection = (cloud_txt, max_cushioning_txt, size, no_items, price) => {

    return (
        <>
            <div className="col-12 md:col-6 lg:col-6 txts_div1" >
                <div className="txts_div">
                    <p className="profile_cloudmonster_text" >{cloud_txt}</p>
                    <p className="cushioning_txt">{max_cushioning_txt}</p>
                    <p style={{ margin: "0" }}>{size}</p>
                </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3 no_items_price" ><p>{no_items}</p></div>
            <div className="col-12 md:col-6 lg:col-3 no_items_price" ><p>{price}</p></div>
        </>
    )
}

function ProfileOrderListInfo() {
    return (
        <>
            <div style={{ backgroundColor: "#F5F5F5" }} >
                <NavBar />
            </div>
            <div className="grid info_main_div">
                <div className="col-12 md:col-6 lg:col-4" >
                    <MyProfileSidebar />
                </div>
                <div className="col-12 md:col-6 lg:col-8 profile-order-list-right-sidebar" >

                    <div className="order_div">
                        <p className="order-number">Order #236978</p> <button className="items_text">3 Items</button>
                    </div>
                    <div className="grid" >
                        <div className="col-12 md:col-6 lg:col-6 ProfileInfoCardSection1" >
                            <img src="images/[removal 2.png" alt="" className="checkout_images" />
                            {ProfileInfoCardSection("Cloud Monster Sensa", "Maximum cushioning, road runs, all-day performance", "Size:46", "1", "£189.00")}
                        </div>
                    </div>
                    {hr_tag}

                    <div className="grid">
                        <div className="col-12 md:col-6 lg:col-6 ProfileInfoCardSection" >
                            <img src="images/[removal 3.png" alt="" className="checkout_images" />
                            {ProfileInfoCardSection("Cloud Monster Sensa", "Maximum cushioning, road runs, all-day performance", "Size:46", "2", "£250.00")}
                        </div>
                    </div>
                    {hr_tag}

                    <div className="grid" >
                        <div className="col-12 md:col-6 lg:col-6 ProfileInfoCardSection">
                            <img src="images/[removal 4.png" alt="" className="checkout_images" />
                            {ProfileInfoCardSection("Cloud Monster Sensa", "Maximum cushioning, road runs, all-day performance", "Size:46", "1", "£130.00")}
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}

export default ProfileOrderListInfo;