import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CheckoutSideForm from "../components/CheckoutSideForm";
import CartSummary from "../components/CartSummary";
import CheckoutSideImages from "../components/CheckoutSideImages";
import "../styles/cart.scss"
import "../styles/checkOut.scss";

function CheckoutForm1() {
    return (
        <>
            <div style={{ backgroundColor: "#F5F5F5" }}>
                <NavBar />
                <div className="grid">
                    <div className="checkout_main_div">
                        <div className="col-12 md:col-6 lg:col-6">
                            <CheckoutSideForm />
                        </div>

                        <div style={{ marginTop: "10rem" }} className="col-12 md:col-6 lg:col-6">
                            <CheckoutSideImages />
                            {/* <div className="checkout_images_div">
                                <div style={{ display: "flex", flexDirection: "row", margin: "0" }}>
                                    <img src="images/[removal 2.png" alt="" className="checkout_images1" />
                                    <div style={{ marginTop: "2rem", marginLeft: "2rem" }}>
                                        <p className="cloudmonster_text" style={{ margin: "0" }} >Cloud Monster Sensa</p>
                                        <p className="max_cushioning" style={{ margin: "0" }}>Maximum cushioning, road runs, all-day performance</p>
                                        <p className="price" style={{ margin: "0" }}>£189.00</p>
                                    </div>
                                </div>
                                <p className="checkout_hr"></p>
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <img src="images/[removal 3.png" alt="" className="checkout_images" />
                                    <div style={{ marginTop: "1.5rem", marginLeft: "2rem" }}>
                                        <p className="cloudmonster_text" style={{ margin: "0" }} >Cloud Monster Sensa</p>
                                        <p className="max_cushioning" style={{ margin: "0" }}>Maximum cushioning, road runs, all-day performance</p>
                                        <p className="price" style={{ margin: "0" }}>£189.00</p>
                                    </div>
                                </div>
                            </div> */}
                            <div >
                                <CartSummary />
                            </div>
                        </div >
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default CheckoutForm1;