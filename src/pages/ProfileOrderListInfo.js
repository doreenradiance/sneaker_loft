import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MyProfileSidebar from "../components/MyProfileSidebar";


const ProfileInfoCardSection = (order_text, cloud_txt, max_cushioning_txt, no_items, size, price, items) => {

    return (
        <>
            <div style={{ display: "flex", flexDirection: "row", margin: "" }}>
                <p style={{ marginTop: "1.8rem", fontWeight: "bold", fontSize: "29px", margin: "0" }}>{order_text}</p> <p className="items_text">{items}</p>
            </div>
            <div className="grid" >
                <div style={{ display: "flex", flexDirection: "row" }} className="col-12 md:col-6 lg:col-6" >
                    <img src="images/OIP (1).jfif" alt="" className="checkout_images1" />
                    <div style={{ marginTop: "6rem", marginLeft: "2rem" }}>
                        <p className="profile_cloudmonster_text" style={{ margin: "0" }} >{cloud_txt}</p>
                        <p className="max_cushioning" style={{ margin: "0" }}>{max_cushioning_txt}</p>
                        <p className="" style={{ margin: "0" }}>{size}</p>
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-3" ><p style={{ marginTop: "6rem", fontWeight: "bold", marginLeft: "6.5rem" }}>{no_items}</p></div>
                <div className="col-12 md:col-6 lg:col-3" ><p style={{ marginTop: "6rem", fontWeight: "bold", marginLeft: "6.5rem" }}>{price}</p></div>
            </div>
        </>
    )
}

function ProfileOrderListInfo() {
    return (
        <>
            <NavBar />
            <div className="grid info_main_div">
                <div className="col-12 md:col-6 lg:col-4" >
                    <MyProfileSidebar />
                </div>
                <div style={{ backgroundColor: "white", padding: "1rem", marginTop: "4rem", width: "50rem" }} className="col-12 md:col-6 lg:col-8" >
                    <div style={{ display: "flex", flexDirection: "row", margin: "" }}>
                        <p style={{ marginTop: "1.8rem", fontWeight: "bold", fontSize: "29px", margin: "0" }}>Order #236978</p> <p className="items_text">3 Items</p>
                    </div>
                    <div className="grid" >
                        <div style={{ display: "flex", flexDirection: "row" }} className="col-12 md:col-6 lg:col-6" >
                            <img src="images/OIP (1).jfif" alt="" className="checkout_images1" />
                            <div style={{ marginTop: "6rem", marginLeft: "2rem" }}>
                                <p className="profile_cloudmonster_text" style={{ margin: "0" }} >Cloud Monster Sensa</p>
                                <p className="max_cushioning" style={{ margin: "0" }}>Maximum cushioning, road runs, all-day performance</p>
                                <p className="" style={{ margin: "0" }}>Size:46</p>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3" ><p style={{ marginTop: "6rem", fontWeight: "bold", marginLeft: "6.5rem" }}>1</p></div>
                        <div className="col-12 md:col-6 lg:col-3" ><p style={{ marginTop: "6rem", fontWeight: "bold", marginLeft: "6.5rem" }}>£189.00</p></div>
                    </div>

                    <p className="profile_hr"></p>

                    <div className="grid">
                        <div style={{ display: "flex", flexDirection: "row" }} className="col-12 md:col-6 lg:col-6" >
                            <img src="images/OIPP(1).jfif" alt="" className="checkout_images" />
                            <div style={{ marginTop: "4rem", marginLeft: "2rem" }}>
                                <p className="profile_cloudmonster_text" style={{ margin: "0" }} >Cloud Monster Sensa</p>
                                <p className="max_cushioning" style={{ margin: "0" }}>Maximum cushioning, road runs, all-day performance</p>
                                <p className="" style={{ margin: "0" }}>Size:46</p>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3" >  <p style={{ marginTop: "4rem", fontWeight: "bold", marginLeft: "6.5rem" }}>2</p></div>
                        <div className="col-12 md:col-6 lg:col-3" ><p style={{ marginTop: "4rem", fontWeight: "bold", marginLeft: "6.5rem" }}>£250.00</p></div>
                    </div>

                    <p className="profile_hr"></p>

                    <div className="grid" >
                        <div style={{ display: "flex", flexDirection: "row" }} className="col-12 md:col-6 lg:col-6">
                            <img src="images/ecoalf-sneaekr-eliot-knit-midnight-navy-1200x1200.jpg" alt="" className="checkout_images" />
                            <div style={{ marginTop: "4rem", marginLeft: "2rem" }}>
                                <p className="profile_cloudmonster_text" style={{ margin: "0" }} >Cloud Monster Sensa</p>
                                <p className="max_cushioning" style={{ margin: "0" }}>Maximum cushioning, road runs, all-day performance</p>
                                <p className="" style={{ margin: "0" }}>Size:46</p>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3" ><p style={{ marginTop: "4rem", fontWeight: "bold", marginLeft: "6.5rem" }}>1</p></div>
                        <div className="col-12 md:col-6 lg:col-3" ><p style={{ marginTop: "4rem", fontWeight: "bold", marginLeft: "6.5rem" }}>£130.00</p></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProfileOrderListInfo;