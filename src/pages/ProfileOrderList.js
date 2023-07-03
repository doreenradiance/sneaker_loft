import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MyProfileSidebar from "../components/MyProfileSidebar";
import "../styles/profile.scss";

const ProfileCardSection = (order_text, no_items, date, price, confirming_order, styling) => {

    return (
        <div >
            <div className="both_components">
                <div style={{ display: "flex", flexDirection: "row", }}>
                    <img src="images/Frame3927.png" alt="bag" className="bag_img" />
                    <div style={{ display: "flex", flexDirection: "column", padding: "0rem 0rem 0rem 1rem" }} >
                        <div>
                            <span className="order_text">{order_text}</span> <button className="items_text">{no_items}</button>
                        </div>
                        <div>
                            <span className="date">{date}</span>
                        </div>
                    </div>
                </div>
                <div className="right_texts">
                    <p className="confirm-order-price">{price}</p>
                    <p className="confirm_order_txt" >{confirming_order}</p>
                </div>
            </div>
            <p className={`${styling}`}></p>

        </div>
    )
}
function ProfileOrderList() {
    return (
        <>
            <div style={{ backgroundColor: "#F5F5F5" }} >
                <NavBar />
            </div>
            <div className="grid info_main_div">
                <div className="col-12 md:col-6 lg:col-4" >
                    <MyProfileSidebar />
                </div>
                <div className="col-12 md:col-6 lg:col-8 profileCardSection">
                    <>
                        {ProfileCardSection("Order #236978", "12 Items", "Jan 12 2022 • 12:18 PM", "€ 3,030.00", "Confirming Order", "p_hr")}
                    </>
                    <>
                        {ProfileCardSection("Order #236978", "12 Items", "Jan 12 2022 • 12:18 PM", "€ 3,030.00", "Confirming Order", "p_hr")}
                    </>
                    <>
                        {ProfileCardSection("Order #236978", "12 Items", "Jan 12 2022 • 12:18 PM", "€ 3,030.00", "Confirming Order", "p_hr")}
                    </>
                    <>
                        {ProfileCardSection("Order #236978", "12 Items", "Jan 12 2022 • 12:18 PM", "€ 3,030.00", "Confirming Order", "p_hr")}
                    </>
                    <>
                        {ProfileCardSection("Order #236978", "12 Items", "Jan 12 2022 • 12:18 PM", "€ 3,030.00", "Confirming Order")}
                    </>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default ProfileOrderList;