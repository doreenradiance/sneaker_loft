import React from "react";

function CheckoutSideImages() {
    return (
        <div>
            <div className="checkout_images_div">
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
            </div>
        </div>
    )
}
export default CheckoutSideImages;