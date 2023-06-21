import React from "react";
import { Card, CardBody } from "reactstrap";
import Footer from "../components/Footer";
import "../styles/contact.scss";
import NavBar from "../components/NavBar";

function Contact() {
    return (
        <div style={{ width: "100%" }}>
            <Card>
                <CardBody>
                    <div className="main_div">
                        <NavBar />
                        <div className="second_div">
                            <h1 style={{ marginBottom: "0.8rem", fontWeight: "bold", fontSize: "50px" }}> Contact Us </h1>
                            <p style={{ marginTop: "0", marginBottom: "3.5rem", }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div style={{ width: "50%", backgroundColor: "#f9f6f3" }}>
                            <div style={{ marginLeft: "1rem", }}>
                                <p style={{ fontSize: "35px", fontWeight: "bold", marginBottom: "0", }}>Drop us a message</p>
                                <p style={{ color: "#b3b3b3", fontSize: "15px", margin: "0" }}>Tells us about any issue or any other concerns.</p>
                                <form>
                                    <div style={{ display: "flex", flexDirection: "row", marginTop: "2rem" }}>
                                        <div style={{ display: "flex", flexDirection: "column", marginRight: "0.8rem" }}>
                                            <label className="form_imp_texts ">First Name</label>
                                            <input className="name_inputs" placeholder="Enter First Name"></input>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                            <label className="form_imp_texts ">Last Name</label>
                                            <input className="name_inputs" placeholder="Enter Last Name"></input>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", marginTop: "1rem" }}>
                                        <label className="form_imp_texts " style={{ marginLeft: "0.2rem" }}>Phone Number</label>
                                        <input className="phone_input" placeholder="Enter Email Address"></input>
                                    </div>

                                    <div style={{ display: "flex", flexDirection: "column", marginTop: "1rem" }}>
                                        <label className="form_imp_texts " style={{ marginLeft: "0.2rem" }}>Message</label>
                                        <input className="message_input" placeholder="Write your message here"></input>
                                    </div>
                                    <button style={{ borderRadius: "0.2rem", marginLeft: "0.3rem", marginTop: "1.7rem", marginBottom: "3rem", width: "320px", height: "30px", backgroundColor: "black", color: "#F3DF77", fontFamily: 'Nohemi', }}>Submit Contact</button>
                                </form>
                            </div>
                        </div>

                        <div style={{ paddingLeft: "5rem", paddingTop: "2rem" }}>
                            <p className="bold_texts">Chat to us</p>
                            <p className="lighter_texts">Our friendly team is here to help</p>
                            <p className="imp_texts">contact@shoez.com</p>

                            <p className="bold_texts b_text">Call us</p>
                            <p className="lighter_texts">Our friendly team is here to help</p>
                            <p className="imp_texts" >+6111585787645348</p>

                            <p className="bold_texts b_text">Visit us</p>
                            <p className="lighter_texts">Come say hello at our office</p>
                            <p className="imp_texts">Level 2,441 Kent street, Sydney NSW 2000</p>

                            <div style={{ display: "flex", flexDirection: "row", marginTop: "2rem" }} >
                                <img src="images/ig.png" alt="ig" className="contact_icons" />
                                <img src="images/fb.png" alt="fb" className="contact_icons" />
                                <img src="images/in.png" alt="in" className="contact_icons" />
                                <img src="images/yt.png" alt="yt" className="contact_icons" />
                                <img src="images/tt.png" alt="yt" className="contact_icons" />
                            </div>
                        </div>
                    </div>

                    <img src="images/GoogleMap.webp" alt="ig" style={{ width: "100%", height: "400px" }} />
                    <Footer />
                </CardBody>
            </Card>
        </div>
    )
}

export default Contact;