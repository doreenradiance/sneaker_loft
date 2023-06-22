import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CheckoutSideForm from "../components/CheckoutSideForm";
import CartSummary from "../components/CartSummary";
import "../styles/cart.scss"
import "../styles/checkOut.scss";

function CheckoutForm1() {
    return (
        <>
            <NavBar />
            <div className="grid checkout_main_div" >
                <div className="col-12 md:col-6 lg:col-6">
                    <CheckoutSideForm />
                </div>

                <div style={{ marginTop: "9rem" }} className="col-12 md:col-6 lg:col-6">
                    <div className="checkout_images_div">
                        <div style={{ display: "flex", flexDirection: "row", margin: "0" }}>
                            <img src="images/OIP (1).jfif" alt="" className="checkout_images1" />
                            <div style={{ marginTop: "6rem" }}>
                                <p className="cloudmonster_text" style={{ margin: "0" }} >Cloud Monster Sensa</p>
                                <p className="max_cushioning" style={{ margin: "0" }}>Maximum cushioning, road runs, all-day performance</p>
                                <p className="price" style={{ margin: "0" }}>£189.00</p>
                            </div>
                        </div>
                        <p className="checkout_hr"></p>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <img src="images/OIPP(1).jfif" alt="" className="checkout_images" />
                            <div style={{ marginTop: "4rem" }}>
                                <p className="cloudmonster_text" style={{ margin: "0" }} >Cloud Monster Sensa</p>
                                <p className="max_cushioning" style={{ margin: "0" }}>Maximum cushioning, road runs, all-day performance</p>
                                <p className="price" style={{ margin: "0" }}>£189.00</p>
                            </div>
                        </div>
                    </div>
                    <div >
                        <CartSummary />
                    </div>
                </div >
            </div>
            <Footer />
        </>
    )
}
export default CheckoutForm1;