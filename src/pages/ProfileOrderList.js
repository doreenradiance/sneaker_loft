import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MyProfileSidebar from "../components/MyProfileSidebar";
import "../styles/profile.scss";

const ProfileCardSection = (order_text, no_items, date, price, confirming_order) => {

    return (
        <div >
            <div>
                <i className="pi pi-shopping-bag" style={{ padding: "0", marginTop: "3rem" }} />
                <div className="grid" style={{ display: "flex", justifyContent: "space-around", marginLeft: "3rem" }}>
                    {/* <div> */}

                    {/* </div> */}
                    <div className="col-12 md:col-6 lg:col-6">

                        <div style={{ display: "flex", flexDirection: "row", margin: "0" }}>
                            <p className="order_text">{order_text}</p> <button className="no_items">{no_items}</button>
                        </div>
                        <p className="date">{date}</p>
                    </div>
                    <div className="col-12 md:col-6 lg:col-6" style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", paddingLeft: "12rem" }}>
                        <p className="confirm-order-price">{price}</p>
                        <p className="confirm_order_txt" >{confirming_order}</p>
                    </div>
                </div>
            </div>
            <p className="p_hr"></p>
        </div>
    )
}
function ProfileOrderListInfo() {
    return (
        <>
            <NavBar backgroundColor="profile-info-page_navBar" />
            <div className="grid info_main_div">
                <div className="col-12 md:col-6 lg:col-4" >
                    <MyProfileSidebar />
                </div>
                <div className="col-12 md:col-6 lg:col-8 profileCardSection">
                    <>
                        {ProfileCardSection("Order #236978", "12 Items", "Jan 12 2022 • 12:18 PM", "€ 3,030.00", "Confirming Order")}
                    </>
                    <>
                        {ProfileCardSection("Order #236978", "12 Items", "Jan 12 2022 • 12:18 PM", "€ 3,030.00", "Confirming Order")}
                    </>
                    <>
                        {ProfileCardSection("Order #236978", "12 Items", "Jan 12 2022 • 12:18 PM", "€ 3,030.00", "Confirming Order")}
                    </>
                    <>
                        {ProfileCardSection("Order #236978", "12 Items", "Jan 12 2022 • 12:18 PM", "€ 3,030.00", "Confirming Order")}
                    </>
                    {ProfileCardSection("Order #236978", "12 Items", "Jan 12 2022 • 12:18 PM", "€ 3,030.00", "Confirming Order")}
                </div>
            </div>
            <Footer />
        </>
    )
}
export default ProfileOrderListInfo;