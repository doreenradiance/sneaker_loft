import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../styles/cart.scss";
import CartSummary from "../components/CartSummary";

const decrease_icon = <i className="pi pi-minus-circle decrease_icon" />
const increase_icon = <i className="pi pi-plus-circle increase_icon" />
const trash = <i className="pi pi-trash trash_icon" />
const hr = <p className="cart_hr"></p>
const hr_last = <p className="cart_hr_last"></p>

const CartMoreInfoSection = (cloudmonster_text, max_cushioning_text, price, decrease_icon, counts, increase_icon, trash_icon, hr) => {
    return (
        <>
            <div>
                <p className="cloudmonster_text" >{cloudmonster_text}</p>
                <p className="max_cushioning_text">{max_cushioning_text}</p>
                <p className="price">{price}</p>
                <div className="grid" style={{ marginTop: "1.5rem" }}>
                    <div className="col-12 md:col-6 lg:col-10 flex_div">
                        {decrease_icon}
                        <p className="p_1">{counts}</p>
                        {increase_icon}
                    </div>
                    <div className="col-12 md:col-6 lg:col-2">
                        {trash_icon}
                    </div>
                </div>
            </div>
            {hr}
        </>
    )
}

function CartMoreInfo() {
    return (
        <>
            <div style={{ backgroundColor: "#F5F5F5" }}>
                <NavBar backgroundColor="profile-info-page_navBar" style={{ position: "relative" }} />
            </div>

            <div style={{ backgroundColor: "whiteSmoke" }} className="grid">
                <div className="col-12 md:col-6 lg:col-6">
                    <p className="your_cart_text">Your Cart</p>
                    <div style={{ marginLeft: "2rem" }}>
                        <div style={{ display: "flex", flexDirection: "row", marginRight: "3rem" }}>
                            <div> <img src="images/[removal 2.png" alt="shoe" className="images" /></div>
                            {CartMoreInfoSection("Cloud Monster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00",
                                decrease_icon, "1", increase_icon, trash)}
                        </div>
                        {hr}
                        <div className="flex_div" >
                            <div> <img src="images/[removal 3.png" alt="shoe" className="images" /></div>
                            {CartMoreInfoSection("Cloud Monster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00",
                                decrease_icon, "2", increase_icon, trash,)}
                        </div>
                        {hr}

                        <div className="flex_div" >
                            <div><img src="images/[removal 4.png" alt="shoe" className="images" /></div>
                            {CartMoreInfoSection("Cloud Monster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00",
                                decrease_icon, "1", increase_icon, trash)}
                        </div>
                        {hr_last}
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-6">
                        <CartSummary />
                </div>
            </div>

            <Footer />
        </>
    )
}
export default CartMoreInfo;