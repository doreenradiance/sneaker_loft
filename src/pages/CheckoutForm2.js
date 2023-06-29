import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CheckoutSideForm from "../components/CheckoutSideForm";
import CartSummary from "../components/CartSummary";
import "../styles/cart.scss"
import "../styles/checkOut.scss";
import CheckoutSideImages from "../components/CheckoutSideImages";

function CheckoutForm1() {
    return (
        <>
            <div style={{ backgroundColor: "#F5F5F5" }}>
                <NavBar />
                <div className="grid checkout_main_div" >
                    <div className="col-6">
                        <CheckoutSideForm />
                    </div>

                    <div style={{ marginTop: "9rem" }} className="col-6">
                        <CheckoutSideImages />
                        <div >
                            <CartSummary />
                        </div>
                        <div style={{ backgroundColor: 'white', width: "29rem", padding: "1rem", marginTop: "2rem" }}>
                            <p style={{ fontWeight: "700", marginBottom: "0.5rem", fontSize: "18px" }}>Shipping Address</p>
                            <p className="shipping_details" >James Anderson</p>
                            <p className="shipping_details">17 Allis Miles</p>
                            <p className="shipping_details" >Idaho 8238</p>
                            <p className="shipping_details">+1 434 723 3489</p>
                        </div>
                    </div >
                </div>
                <Footer />
            </div>
        </>
    )
}
export default CheckoutForm1;