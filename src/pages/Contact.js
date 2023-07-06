import React from "react";
import Footer from "../components/Footer";
import "../styles/contact.scss";
import NavBar from "../components/NavBar";

function Contact() {
    return (
        <div style={{ width: "100%" }}>
            <div className="main_div">
                <NavBar />
                <div className="second_div">
                    <h1 className="h1_txt"> Contact Us </h1>
                    <p style={{ marginTop: "0", marginBottom: "3.5rem" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>

            <div className="grid" style={{ display: "flex", flexDirection: "row" }}>
                <div className="col-12 md:col-6 lg:col-6 left_side_div">
                    <div style={{ marginLeft: "1rem" }}>
                        <p className="drop_msg">Drop us a message</p>
                        <p className="p_concerns">Tells us about any issue or any other concerns.</p>
                        <form>
                            <div className="last_first_div" >
                                <div className="first_name_div">
                                    <label className="form_imp_texts ">First Name</label>
                                    <input className="name_inputs" placeholder="Enter First Name"></input>
                                </div>
                                <div className="last_name_div">
                                    <label className="form_imp_texts ">Last Name</label>
                                    <input className="name_inputs" placeholder="Enter Last Name"></input>
                                </div>
                            </div>
                            <div className="msg_phone_input">
                                <label className="form_imp_texts phone_message" >Phone Number</label>
                                <input className="phone_input" placeholder="Enter Email Address"></input>
                            </div>

                            <div className="msg_phone_input">
                                <label className="form_imp_texts phone_message" >Message</label>
                                <input className="message_input" placeholder="Write your message here"></input>
                            </div>
                            <button className="sumbit-btn">Submit Contact</button>
                        </form>
                    </div>
                </div>

                <div className="col-12 md:col-6 lg:col-6 last_div">
                    <p className="bold_texts">Chat to us</p>
                    <p className="lighter_texts">Our friendly team is here to help</p>
                    <p className="imp_texts">contact@shoez.com</p>

                    <p className="bold_texts b_text">Call us</p>
                    <p className="lighter_texts">Our friendly team is here to help</p>
                    <p className="imp_texts" >+6111585787645348</p>

                    <p className="bold_texts b_text">Visit us</p>
                    <p className="lighter_texts">Come say hello at our office</p>
                    <p className="imp_texts">Level 2,441 Kent street, Sydney NSW 2000</p>

                    <div className="contact_icons_div">
                        <img src="images/ig.png" alt="ig" className="contact_icons1" />
                        <img src="images/fb.png" alt="fb" className="contact_icons" />
                        <img src="images/in.png" alt="in" className="contact_icons" />
                        <img src="images/yt.png" alt="yt" className="contact_icons" />
                        <img src="images/tt.png" alt="yt" className="contact_icons" />
                    </div>
                </div>
            </div>

            <img src="images/Rectangle Map.png" alt="ig" className="map" />
            <Footer />
        </div>
    )
}

export default Contact;