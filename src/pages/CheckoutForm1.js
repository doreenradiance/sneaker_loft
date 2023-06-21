import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CheckoutSideForm from "../components/CheckoutSideForm";
import CartSummary from "../components/CartSummary";
import "../styles/cart.scss"
import "../styles/checkOut.scss";

function CheckoutSideForm1() {
    return (
        <>
            <NavBar />
            <div className="grid" style={{ backgroundColor: "#F5F5F5" }}>
                <div className="col-12 md:col-6 lg:col-7" style={{ padding: "1rem" }}>
                    <CheckoutSideForm />
                </div>

                <div className="col-12 md:col-6 lg:col-5">
                    <div style={{ backgroundColor: "white", width: "29rem", padding: "1rem", marginTop: "2rem" }}>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <img src="" alt="" />
                            <div>
                                <p className="cloudmonster_text" >Cloud Monster Sensa</p>
                                <p className="max_cushioning">Maximum cushioning, road runs, all-day performance</p>
                                <p className="price">£189.00</p>
                            </div>
                        </div>
                        <p className="checkout_hr"></p>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <img src="" alt="" />
                            <div>
                                <p className="cloudmonster_text" >Cloud Monster Sensa</p>
                                <p className="max_cushioning">Maximum cushioning, road runs, all-day performance</p>
                                <p className="price">£189.00</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <CartSummary />
                    </div>
                </div >
            </div>
            <Footer />
        </>
    )
}
export default CheckoutSideForm1;