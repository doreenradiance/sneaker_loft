import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MyProfileSidebar from "../components/MyProfileSidebar";


const ProfileCardSection = (order_text, no_items, date, price, confirming_order) => {

    return (
        <div className="grid" style={{ display: "flex", justifyContent: "space-around", marginLeft: "2rem" }}>
            <div className="col-12 md:col-6 lg:col-6">
                <div style={{ display: "flex", flexDirection: "row", margin: "0" }}>
                    <p className="order_text">{order_text}</p> <p className="no_items">{no_items}</p>
                </div>
                <p style={{ margin: "0", fontSize: "11px",fontFamily:'Nohemi'  }}>{date}</p>
            </div>
            <div className="col-12 md:col-6 lg:col-6" style={{ marginTop: "1rem" }}>
                <p className="confirm-order-price">{price}</p>
                <p style={{ fontSize: "11px", marginLeft: "12rem",fontFamily:'Nohemi' }} >{confirming_order}</p>
            </div>
        </div>
    )
}
function ProfileOrderListInfo() {
    return (
        <>
            <NavBar backgroundColor="profile-info-page_navBar" />
            <div className="grid info_main_div">
                <div className="col-12 md:col-6 lg:col-3" >
                    <MyProfileSidebar />
                </div>
                <div className="col-12 md:col-6 lg:col-9 profileCardSection">
                    <>
                        {ProfileCardSection("Order #236978", "12 Items", "Jan 12 2022 • 12:18 PM", "€ 3,030.00", "Confirming Order")}
                        <p className="p_hr"></p>
                    </>
                    <>
                        {ProfileCardSection("Order #236978", "12 Items", "Jan 12 2022 • 12:18 PM", "€ 3,030.00", "Confirming Order")}
                        <p className="p_hr"></p>
                    </>
                    <>
                        {ProfileCardSection("Order #236978", "12 Items", "Jan 12 2022 • 12:18 PM", "€ 3,030.00", "Confirming Order")}
                        <p className="p_hr"></p>
                    </>
                    <>
                        {ProfileCardSection("Order #236978", "12 Items", "Jan 12 2022 • 12:18 PM", "€ 3,030.00", "Confirming Order")}
                        <p className="p_hr"></p>
                    </>
                    {ProfileCardSection("Order #236978", "12 Items", "Jan 12 2022 • 12:18 PM", "€ 3,030.00", "Confirming Order")}
                </div>
            </div>
            <Footer />
        </>
    )
}
export default ProfileOrderListInfo;