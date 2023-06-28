import React from "react";
import "../styles/checkOut.scss";

function CheckoutSideForm() {
    return (
        <>
            <div style={{ padding: "" }} >
                <h2 className="checkout">Checkout</h2>
                <div style={{ display: "flex", flexDirection: "row",justifyContent:"space-between" }}>
                    <p className="contact_info">Contact Information</p>
                    <div style={{ display: "flex", flexDirection: "row", }}>
                        <p style={{ fontSize: "12px", marginLeft: "2rem" }}>Already have an account?</p>
                        <p className="login_text">Login</p>
                    </div>
                </div>

                <input className="checkout_inputs" style={{ width: "90%", height: "2rem", marginTop: "0.5rem" }} placeholder="Email Address" />
                <div style={{ display: "flex", flexDirection: "row", }}>
                    <input className="checkout_inputs" type="checkbox" id="" name="" value="" style={{ marginRight: "0.5rem",marginLeft:"2rem" }} />
                    <p>Send me news and offers by email</p>
                </div>
                <p style={{ marginTop: "2rem" }}>Shipping Address</p>
                <select className="checkout_inputs" style={{ width: "90%", height: "2.5rem" }} name="Country/Region" id="Country/Region">
                    <option value="Country/Region">Country/Region</option>
                </select>
                <div
                    style={{ display: "flex", flexDirection: "row", marginTop: "2rem", marginLeft:"2rem"}}
                >
                    <input className="checkout_inputs" style={{ width: "20rem", height: "2rem" }} placeholder="First Name" />
                    <input className="checkout_inputs" style={{ width: "20rem", height: "2rem" }} placeholder="Last Name" />
                </div>
                <input className="checkout_inputs" placeholder="Street and house number" style={{ width: "90%", height: "2rem", marginTop: "2rem" }} />
                <input className="checkout_inputs" placeholder="Apartment,premises,etc (Optional)" style={{ width: "90%", height: "2rem", marginTop: "2rem" }} />
                <div
                    style={{ display: "flex", flexDirection: "row", marginTop: "1rem", justifyContent: "",marginLeft:"2rem" }}
                >
                    <input className="checkout_inputs" style={{ width: "110px", height: "2rem" }} placeholder="Post code" />
                    <input className="checkout_inputs" style={{ width: "110px", height: "2rem", }} placeholder="Town" />
                    <select className="checkout_inputs" style={{ width: "150px", height: "2.3rem", }}>
                        <option>Province</option>
                    </select>
                </div>
                <input placeholder="Telephone" className="checkout_inputs" style={{ width: "90%", height: "2rem", marginTop: "2rem" }} />
                <div style={{ display: "flex", flexDirection: "row",marginLeft:"2rem" }}>
                    <input type="checkbox" className="checkout_inputs" id="" name="" value="" style={{ marginRight: "0.5rem" }} />
                    <p> Save this information for later use.</p>
                </div>
                <button style={{ height: "3rem", width: "30rem", color: "#F3DF77", backgroundColor: "#000000", borderRadius: "0.3rem", marginTop: "2.5rem" }}>Continue Shipping</button>
            </div>
        </>
    )
}

export default CheckoutSideForm;