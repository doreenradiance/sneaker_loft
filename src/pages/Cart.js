import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Cart() {
    return (
        <>
            <div style={{ backgroundColor: "#F5F5F5", height: "42rem" }}>
                <NavBar />
                <div>
                    <p style={{ fontSize: "30px", fontWeight: "600", marginLeft: "6rem" }}>Your Cart</p>
                </div>
            </div>
            <Footer />

        </>

    )
}
export default Cart;