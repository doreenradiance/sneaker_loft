import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MyProfileSidebar from "../components/MyProfileSidebar";
import "../styles/profile.scss";


// const ProfileInfoCardSection = (order_text, cloud_txt, max_cushioning_txt, no_items, size, price, items) => {

//     return (
//         <>
//             <div style={{ display: "flex", flexDirection: "row", margin: "" }}>
//                 <p style={{ marginTop: "1.8rem", fontWeight: "bold", fontSize: "29px", margin: "0" }}>{order_text}</p> <p className="items_text">{items}</p>
//             </div>
//             <div className="grid" >
//                 <div style={{ display: "flex", flexDirection: "row" }} className="col-12 md:col-6 lg:col-6" >
//                     <img src="images/OIP (1).jfif" alt="" className="checkout_images1" />
//                     <div style={{ marginTop: "6rem", marginLeft: "2rem" }}>
//                         <p className="profile_cloudmonster_text" style={{ margin: "0" }} >{cloud_txt}</p>
//                         <p className="max_cushioning" style={{ margin: "0" }}>{max_cushioning_txt}</p>
//                         <p className="" style={{ margin: "0" }}>{size}</p>
//                     </div>
//                 </div>
//                 <div className="col-12 md:col-6 lg:col-3" ><p style={{ marginTop: "6rem", fontWeight: "bold", marginLeft: "6.5rem" }}>{no_items}</p></div>
//                 <div className="col-12 md:col-6 lg:col-3" ><p style={{ marginTop: "6rem", fontWeight: "bold", marginLeft: "6.5rem" }}>{price}</p></div>
//             </div>
//         </>
//     )
// }

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
                    <div style={{ display: "flex", flexDirection: "row", marginTop: "2rem" }}>
                        <p className="order-number">Order #236978</p> <button className="items_text">3 Items</button>
                    </div>
                    <div className="grid" style={{ marginTop: "2rem" }} >
                        <div style={{ display: "flex", flexDirection: "row" }} className="col-12 md:col-6 lg:col-6" >
                            <img src="images/[removal 2.png" alt="" className="checkout_images" />
                            <div style={{ marginTop: "2rem", marginLeft: "2rem" }}>
                                <p className="profile_cloudmonster_text" style={{ margin: "0" }} >Cloud Monster Sensa</p>
                                <p className="cushioning_txt">Maximum cushioning, road runs, all-day performance</p>
                                <p className="size" style={{ margin: "0" }}>Size:46</p>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3 order-prices-no" ><p className="order-price">1</p></div>
                        <div className="col-12 md:col-6 lg:col-3 order-prices-no " ><p className="order-price" >£189.00</p></div>
                    </div>

                    <p className="profile_hr"></p>

                    <div className="grid">
                        <div style={{ display: "flex", flexDirection: "row" }} className="col-12 md:col-6 lg:col-6" >
                            <img src="images/[removal 3.png" alt="" className="checkout_images" />
                            <div style={{ marginTop: "2rem", marginLeft: "2rem" }}>
                                <p className="profile_cloudmonster_text" style={{ margin: "0" }} >Cloud Monster Sensa</p>
                                <p className="cushioning_txt">Maximum cushioning, road runs, all-day performance</p>
                                <p className="size" style={{ margin: "0" }}>Size:46</p>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3 order-prices-no" >  <p className="order-price">2</p></div>
                        <div className="col-12 md:col-6 lg:col-3 order-prices-no" ><p className="order-price">£250.00</p></div>

                    </div>

                    <p className="profile_hr"></p>

                    <div className="grid" >
                        <div style={{ display: "flex", flexDirection: "row" }} className="col-12 md:col-6 lg:col-6">
                            <img src="images/[removal 4.png" alt="" className="checkout_images" />
                            <div style={{ marginTop: "2rem", marginLeft: "2rem" }}>
                                <p className="profile_cloudmonster_text" style={{ margin: "0" }} >Cloud Monster Sensa</p>
                                <p className="cushioning_txt">Maximum cushioning, road runs, all-day performance</p>
                                <p className="size" style={{ margin: "0" }}>Size:46</p>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3 order-prices-no"  ><p className="order-price">1</p></div>
                        <div className="col-12 md:col-6 lg:col-3 order-prices-no"><p className="order-price">£130.00</p></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProfileOrderListInfo;