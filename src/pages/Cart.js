import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

function Cart() {
    return (
        <>
            <div style={{ backgroundColor: "#F5F5F5" }}>
                <NavBar />
                <p style={{ fontSize: "30px", fontWeight: "600", marginBottom: "6rem",paddingLeft: "4rem" }}>Your Cart</p>

                <div style={{
                    textAlign: "center", width: "300px", height: "420px", margin: " 0 auto",
                    color: "#000000", display: "flex", flexDirection: "column"
                }}>
                    <img src="./images/Group.png" alt="" style={{ height: "160px", width: "200px", alignSelf: "center", marginTop: "2rem" }} />
                    <p style={{ marginTop: "1.5rem", fontWeight: "500", fontFamily: " Aeonik", }}>There currently are no items in your cart.</p>

                    <button
                        style={{
                            fontFamily: " Aeonik", fontSize: "16px", fontWeight: "700", marginTop: "2rem", height: "3rem", width: "12rem", border: "none",
                            borderRadius: "0.2rem", color: "#000000", backgroundColor: "#F3DF77", alignSelf: "center",marginBottom:"5rem"
                        }}>
                        Start Shopping
                        <FontAwesomeIcon icon={faBagShopping} style={{ marginLeft: "1rem", height: "1rem", width: "1rem" }} /></button>
                </div>
            </div>
            <Footer />

        </>

    )
}
export default Cart;