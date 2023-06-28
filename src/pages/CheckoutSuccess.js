import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

function CheckoutSuccess() {
    return (
        <>
            <div style={{ backgroundColor: "#F5F5F5" }}>
                <NavBar />

                <div className="checkout_main_div">
                    <img src="./images/Frame 4335.png" alt="" className="first-img" />
                    <img src="./images/Frame 3982.png" alt="" className="second-img" />
                    <p className="checkout_text">Your order was processed successfully</p>

                    <button className="btn_txt"
                    >Continue Shipping
                        <FontAwesomeIcon icon={faBagShopping} className="bag_icon" /></button>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default CheckoutSuccess;