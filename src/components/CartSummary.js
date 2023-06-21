import React from "react"


function CartSummary() {
    return (
        <div className="orderSummary_div">
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
        </div>)
}
export default CartSummary;