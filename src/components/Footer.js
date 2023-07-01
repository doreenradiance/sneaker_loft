import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "../styles/contact.scss";
import "../styles/footer.scss";

function Footer() {
    return (
        <>
            <div style={{ padding: "2rem", backgroundColor: "#FFFFFF" }}>
                <div className="grid">
                    <div className="col-12 md:col-6 lg:col-6">
                        <p className="footer_header">Stay In The Know</p>
                        <p className="footer_p">Sign up to get dibs on new launches,</p>
                        <p className="footer_p">promos 20% off your first purchase and other</p>
                        <p className="footer_p">news.</p>
                        <InputText className="footer_input" placeholder="Enter Email" /><Button className="footer_button" type="submit" label="SIGN UP" />
                    </div>
                    <div className="col-12 md:col-6 lg:col-6" style={{ marginTop: "1rem" }} >
                        <div className="grid">
                            <div className="col-12 md:col-6 lg:col-6"><p className="bold_texts">About us</p>
                                <div className="grid">
                                    <div className="col-12 md:col-6 lg:col-6">
                                        <div>
                                            <div className="about_us_div">
                                                <p className="footer_p">Our Story</p>
                                                <p className="footer_p">Review</p>
                                                <p className="footer_p">Military Discount</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 md:col-6 lg:col-6">
                                        <div>
                                            <div className="about_us_div">
                                                <p className="footer_p">The Play book</p>
                                                <p className="footer_p">Teacher Discount</p>
                                                <p className="footer_p">Student Discount</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-6 lg:col-6">
                                <p className="bold_texts">Customer Service</p>
                                <div className="grid">
                                    <div className="col-12 md:col-6 lg:col-6">
                                        <p className="footer_p"> Live Chat</p>
                                        <p className="footer_p">FAQ</p>
                                        <p className="footer_p">Size Guide</p>
                                        <p className="footer_p">Shipping</p>
                                        <p className="footer_p">Accessibilty</p>
                                    </div>
                                    <div className="col-12 md:col-6 lg:col-6">
                                        <p className="footer_p">Returns</p>
                                        <p className="footer_p">Contact Us</p>
                                        <p className="footer_p">Gift Cards</p>
                                        <p className="footer_p">Refer A Friend</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid footer_last_div" style={{ alignItems: "center" }} >
                    <div className="col-12 md:col-6 lg:col-4">
                        <div className="grid" style={{ marginLeft: "1.6rem" }}>
                            <img src="images/igtransparent.png" alt="ig" className="footer_icons" style={{ marginRight: "1rem" }} />
                            <img src="images/png-fbtransparent.png" alt="fb" className="footer_icons" style={{ marginRight: "1rem" }} />
                            <img src="images/twitter.png" alt="twit" className="footer_icons" style={{ marginRight: "1rem" }} />
                            <img src="images/yttrans.png" alt="fb" className="footer_icons" />
                        </div>
                    </div>
                    <div className="col-12 md:col-6 lg:col-8" >
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div><img src="images/rr.png" alt="rr" className="reserved_icon" /></div>
                                <div> <p className="rights_res_text">2023 All Rights Reserved.</p></div>
                            </div>
                            <div className=""><p className="policy_text">Privacy Policy</p></div>
                            <div className=""> <p className="terms">Terms & Conditions</p></div>
                            <div className="">  <p className="personal_info_text">Do not sell my personal information</p> </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;