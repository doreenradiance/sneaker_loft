import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MyProfileSidebar from "../components/MyProfileSidebar";


const ProfileCardSection = (order_text, no_items, date, price, confirming_order) => {

    return (
        <>
            {/* <div style={{ backgroundColor: "white", padding: "1rem", width: "50rem" }} className="col-12 md:col-6 lg:col-9"> */}
            <div className="grid" style={{ display: "flex", justifyContent: "space-around", marginLeft: "2rem" }}>
                <div className="col-12 md:col-6 lg:col-6">
                    <div style={{ display: "flex", flexDirection: "row", margin: "0" }}>
                        <p style={{ marginTop: "2rem", fontWeight: "bold", fontSize: "16px" }}>{order_text}</p> <p className="items_text">{no_items}</p>
                    </div>
                    <p style={{ margin: "0", fontSize: "11px" }}>{date}</p>
                </div>
                <div className="col-12 md:col-6 lg:col-6" style={{ marginTop: "1rem" }}>
                    <p style={{ fontSize: "12px", marginLeft: "13.7rem", fontWeight: "bold", marginTop: "2rem" }}>{price}</p>
                    <p style={{ fontSize: "11px", marginLeft: "12rem", }} >{confirming_order}</p>
                </div>
            </div>
            {/* { <p style={{ height: "1px", backgroundColor: "#BBBBBB", width: "40rem", margin: "0", marginLeft: "5rem", marginTop: "0.5rem" }}></p>} */}
        </>
    )
}
function ProfileOrderListInfo() {
    return (
        <>
            <NavBar />
            <div className="grid info_main_div">
                <div className="col-12 md:col-6 lg:col-3" >
                    <MyProfileSidebar />
                </div>
                <div style={{ backgroundColor: "white", padding: "1rem", width: "50rem", marginTop: "4rem" }} className="col-12 md:col-6 lg:col-9">
                    <div>
                        {ProfileCardSection("Order #236978", "12 Items", "Jan 12 2022 • 12:18 PM", "€ 3,030.00", "Confirming Order")}
                        <p style={{ height: "1px", backgroundColor: "#BBBBBB", width: "41rem", margin: "0", marginLeft: "2.3rem", marginTop: "0.5rem" }}></p>
                    </div>
                    <div>
                        {ProfileCardSection("Order #236978", "12 Items", "Jan 12 2022 • 12:18 PM", "€ 3,030.00", "Confirming Order")}
                        <p style={{ height: "1px", backgroundColor: "#BBBBBB", width: "41rem", margin: "0", marginLeft: "2.3rem", marginTop: "0.5rem" }}></p>
                    </div>
                    <div>
                        {ProfileCardSection("Order #236978", "12 Items", "Jan 12 2022 • 12:18 PM", "€ 3,030.00", "Confirming Order")}
                        <p style={{ height: "1px", backgroundColor: "#BBBBBB", width: "41rem", margin: "0", marginLeft: "2.3rem", marginTop: "0.5rem" }}></p>
                    </div>
                    <div>
                        {ProfileCardSection("Order #236978", "12 Items", "Jan 12 2022 • 12:18 PM", "€ 3,030.00", "Confirming Order")}
                        <p style={{ height: "1px", backgroundColor: "#BBBBBB", width: "41rem", margin: "0", marginLeft: "2.3rem", marginTop: "0.5rem" }}></p>
                    </div>
                    {ProfileCardSection("Order #236978", "12 Items", "Jan 12 2022 • 12:18 PM", "€ 3,030.00", "Confirming Order")}
                </div>
            </div>
            <Footer />
        </>
    )
}
export default ProfileOrderListInfo;