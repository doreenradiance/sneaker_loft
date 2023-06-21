import React from "react";


function CheckoutSideForm() {
    return (
        <>
            <div style={{ padding: "2rem" }} >
                <h2>Checkout</h2>
                <div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <p>Contact Information</p>
                        <div style={{ display: "flex", flexDirection: "row", }}> <p style={{ fontSize: "12px" }}>Already have an account?</p>
                            <p style={{ textDecoration: "underline", fontSize: "12px" }}>Login</p>
                        </div>
                    </div>

                    <input style={{ width: "99%", height: "2rem" }} placeholder="Email Address" />
                    <div style={{ display: "flex", flexDirection: "row", }}>
                        <input type="checkbox" id="" name="" value="" style={{ marginRight: "0.5rem" }} />
                        <p>Send me news and offers by email</p>
                    </div>
                    <p style={{}}>Shipping Address</p>
                    <select style={{ width: "99.8%", height: "2.5rem" }} name="Country/Region" id="Country/Region">
                        <option value="Country/Region">Country/Region</option>
                    </select>
                    <div style={{ display: "flex", flexDirection: "row", marginTop: "1rem", justifyContent: "space-between" }}>
                        <input style={{ width: "47%", height: "2rem", }} placeholder="First Name" />
                        <input style={{ width: "47%", height: "2rem", }} placeholder="Last Name" />
                    </div>
                    <input placeholder="Company (Optional)" style={{ width: "99%", height: "2rem", marginTop: "1rem" }} />
                </div>
            </div>
        </>
    )
}

export default CheckoutSideForm;