import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faCircleMinus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import "../styles/cart.scss"
import CartSummary from "../components/CartSummary";

function CartMoreInfo() {
    return (
        < >
            <NavBar />

            <div style={{ backgroundColor: "whiteSmoke" }} className="grid">
                <div className="col-12 md:col-6 lg:col-6">
                    <p className="your_cart_text">Your Cart</p>
                    <div style={{ marginLeft: "2rem" }}>
                        <div style={{ display: "flex", flexDirection: "row", marginRight: "3rem" }}>
                            <div> <img src="images/transparent.1.jfif" alt="shoe" className="images" /></div>
                            <div>
                                <p className="cloudmonster_text" >Cloud Monster Sensa</p>
                                <p className="max_cushioning_text">Maximum cushioning, road runs, all-day performance</p>
                                <p className="price">£189.00</p>
                                <div className="grid">
                                    <div className="col-12 md:col-6 lg:col-10">
                                        <div className="flex_div">
                                            <FontAwesomeIcon className="decrease_icon" icon={faCircleMinus} />
                                            <p className="p_1">1</p>
                                            <FontAwesomeIcon className="increase_icon" icon={faCirclePlus} />
                                        </div>
                                    </div>
                                    <div className="col-12 md:col-6 lg:col-2">
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="cart_hr"></p>

                        <div className="flex_div" >
                            <div> <img src="images/transparent.2.jfif" alt="shoe" className="images" /></div>
                            <div>
                                <p className="cloudmonster_text" >Cloud Monster Sensa</p>
                                <p className="max_cushioning_text">Maximum cushioning, road runs, all-day performance</p>
                                <p className="price">£189.00</p>
                                <div className="grid">
                                    <div className="col-12 md:col-6 lg:col-10">
                                        <div className="flex_div" >
                                            <FontAwesomeIcon className="decrease_icon" icon={faCircleMinus} />
                                            <p className="p_1">1</p>
                                            <FontAwesomeIcon className="increase_icon" icon={faCirclePlus} />
                                        </div>
                                    </div>
                                    <div className="col-12 md:col-6 lg:col-2" >
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="cart_hr"></p>

                        <div className="flex_div" >
                            <div><img src="images/transparent.3.jfif" alt="shoe" className="images" /></div>
                            <div>
                                <p className="cloudmonster_text" >Cloud Monster Sensa</p>
                                <p className="max_cushioning_text">Maximum cushioning, road runs, all-day performance</p>
                                <p className="price">£189.00</p>
                                <div className="grid">
                                    <div className="col-12 md:col-6 lg:col-10">
                                        <div className="flex_div">
                                            <FontAwesomeIcon className="decrease_icon" icon={faCircleMinus} />
                                            <p className="p_1">1</p>
                                            <FontAwesomeIcon className="increase_icon" icon={faCirclePlus} />
                                        </div>
                                    </div>
                                    <div className="col-12 md:col-6 lg:col-2">
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <p className="cart_hr"></p>
                    </div>

                </div>
                <div className="col-12 md:col-6 lg:col-6">
                    <CartSummary />
                    {/* <div className="orderSummary_div">
                        <p className="summary_header">Order Summary</p>
                        <div className="grid">
                            <div className="col-12 md:col-6 lg:col-8"> <input className="input" placeholder="Discount Code" /></div>
                            <div className="col-12 md:col-6 lg:col-4">  <button className="apply_button">Apply</button></div>
                        </div>
                        <div className="grid">
                            <div className="col-12 md:col-6 lg:col-10 summary" ><p>Item in cart</p></div>
                            <div className="col-12 md:col-6 lg:col-2 p_3 summary_prices"><p>3</p></div>
                        </div>
                        <div className="grid">
                            <div className="col-12 md:col-6 lg:col-10 summary"><p>Subtotal</p></div>
                            <div className="col-12 md:col-6 lg:col-2 summary_prices"><p>£570</p></div>
                        </div>
                        <div className="grid">
                            <div className="col-12 md:col-6 lg:col-10 summary"><p>Shipping Cost</p></div>
                            <div className="col-12 md:col-6 lg:col-2 summary_prices"><p>£3.78</p></div>
                        </div>
                        <div className="grid">
                            <div className="col-12 md:col-6 lg:col-10 summary"><p>Discount</p></div>
                            <div className="col-12 md:col-6 lg:col-2 summary_prices"><p>-</p></div>
                        </div>
                        <div className="grid">
                            <div className="col-12 md:col-6 lg:col-10 summary_total"><p>TOTAL</p></div>
                            <div className="col-12 md:col-6 lg:col-2 summary_prices"><p>£61.48</p></div>
                        </div>
                        <button className="proceed_btn">Proceed to checkout</button>
                    </div> */}


                </div>
            </div>

            <Footer />
        </ >
    )
}
export default CartMoreInfo;