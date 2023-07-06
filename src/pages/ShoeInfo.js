import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/profile.scss";

function ShoeInfo() {

    const cardSection = (title, cloud_txt, max_txt, price) => {
        return (
            <div className="card-sections-content">
                <div className="ltd_edt_txt" >{title}</div>
                <div className="cloud_txt">{cloud_txt}</div>
                <div className="max_txt">{max_txt}</div>
                <div id="price">{price}</div>
            </div>
        )
    }
    return (
        <>
            <div className="main-div-layout">
                <div style={{ marginBottom: "2rem" }}>
                    <NavBar />
                </div>
                <div className="grid">
                    <div className="col-5">
                        <div style={{ marginBottom: "2rem" }}>
                            <img className="shoe-info-image" src="images\shoe_info_main.png" alt="shoe-info-main" />
                        </div>
                        <div className="grid sub-images">
                            <img className="sub-img" src="images\shoe_info_main.png" alt="shoe-info-main" />
                            <img className="sub-img" src="images\shoe_info_faded.png" alt="shoe-info-faded" />
                            <img className="sub-img" src="images\shoe_info_faded.png" alt="shoe-info-faded" />
                            <img className="sub-img" src="images\shoe_info_faded.png" alt="shoe-info-faded" />
                            <img className="sub-img" src="images\shoe_info_faded.png" alt="shoe-info-faded" />
                            <img className="sub-img" src="images\shoe_info_faded.png" alt="shoe-info-main" />
                        </div>
                    </div>
                    <div className="col-7">
                        <div>
                            <div className="title"> Cloudmonster Sensa Shoe</div>
                            <div>
                                <div className="grid center" >
                                    <div className="col-7 md:col-6 lg:col-3 sm:col-12 money-txt">
                                        €30.00
                                    </div>
                                    <div className="col-7 md:col-6 lg:col-2 sm:col-12 out_of_stock center" >
                                        <span className="btn-1">
                                            Out of Stock
                                        </span>
                                    </div>
                                    <div className="col-7 md:col-6 lg:col-2 sm:col-12 save">
                                        <span className="btn-2">
                                            Save 67%
                                        </span>
                                    </div>
                                    <div className="col-7 md:col-6 lg:col-4 sm:col-12 add-fav-button">
                                        <span className="btn-3">
                                            <i className="pi pi-heart heart" />  Add to Favorites
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p>
                                <div className="col-12 md:col-12 lg:col-12 sm:col-3">
                                    <span className="side-menu-info">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod lacinia aliquam. Morbi est nis, at lacus. Donec ornare, dui vel facilisis luctus, metus mi ttitor erat sapien scelerisque nunc. Pellentesque ornare elit tellus... Read More
                                    </span>
                                </div>
                            </p>
                            <p>
                                <div className="col-12 md:col-12 lg:col-12 sm:col-3">
                                    <div className="grid center" >
                                        <div className="col-3 margin-right"><span className="bold-fonts">Size<span style={{ color: "red" }}>*</span></span></div>
                                        <div className="col-5" >
                                            <select className="checkout_inputs input" name="Shirt/RoundNeck" id="Country/Region">
                                                <option value="Shirt/Round" className="checkout_inputs input" >Select a shirt size</option>
                                            </select>
                                        </div>
                                        <div className="col-3" ><input className="checkout_inputs view-size" placeholder="View Size Chart" /></div>
                                    </div>
                                    <div className="grid center" >
                                        <div className="col-3 margin-right"><span className="bold-fonts">Name</span></div>
                                        <div className="col-7" ><input className="checkout_inputs input" placeholder="What name would you want in the shirt" /></div>
                                    </div>
                                    <div className="grid center" >
                                        <div className="col-3 margin-right"><span className="bold-fonts">Number on Shirt</span></div>
                                        <div className="col-7" ><input className="checkout_inputs input" placeholder="Enter a number between 0 and 99" /></div>
                                    </div>
                                    <div className="grid center" >
                                        <div className="col-3 margin-right"><span className="bold-fonts">Patch</span></div>
                                        <div className="col-7" >
                                            <select className="checkout_inputs input" name="Patch" id="Country/Region">
                                                <option value="Patch" className="checkout_inputs input" >Select a patch</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="grid center" >
                                        <div className="col-3 margin-right" style={{ marginRight: "10px", fontWeight: "bold" }}><span>Quantity</span></div>
                                        <div className="col-7" ><input className="checkout_inputs quantity" placeholder="1" /></div>
                                    </div>
                                    <div>
                                        <button className="checkout_buttons cart" placeholder="Apartment,premises,etc (Optional)">
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                            </p>
                        </div>
                    </div>
                </div >
                <div className="more-details">
                    <div className="more-details-txt">
                        More Details
                    </div>
                    <div className="sub-rows">
                        <div className="grid sub-rows-layout">
                            <div className="col-11"> Return Policy</div>
                            <div className="col-1"><i className="pi pi-plus" /></div>
                        </div>
                        <hr style={{ marginTop: "35px" }} />
                    </div>
                    <div className="sub-rows">
                        <div className="grid sub-rows-layout">
                            <div className="col-11"> Shipping & Pickup</div>
                            <div className="col-1"><i className="pi pi-plus" /></div>
                        </div>
                        <hr style={{ marginTop: "35px" }} />
                    </div>
                    <div className="sub-rows">
                        <div className="grid sub-rows-layout">
                            <div className="col-11">  Materials & Transparency</div>
                            <div className="col-1"><i className="pi pi-plus" /></div>
                        </div>
                        <hr style={{ marginTop: "35px" }} />
                    </div>
                </div>
                <div>
                    < div className='grid' style={{ marginTop: "3rem", marginBottom: "3rem" }}>
                        <div className='col-10'>
                            <span className="more-details-txt">More Like this</span>
                        </div>
                    </div>
                    <div className="grid sub-rows-layout">
                        <div className="col-12 md:col-6 lg:col-4 sm:col-3 right_texts"  >
                            <div className="shoe-page_background_img">
                                <p className="Italy_txt">MADE IN ITALY</p>
                            </div>
                            {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                        </div>
                        <div className="col-12 md:col-6 lg:col-4 sm:col-3 right_texts" >
                            <img src="images/GREATS-Womens-Charlie-Blanco-01_Web.jpg.png"
                                className="carousel-sizing shoe-page-img" alt="two" />
                            {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                        </div>
                        <div className="col-12 md:col-6 lg:col-4 sm:col-3 right_texts" >
                            <div className="shoe-page_background_img2">
                                <p className="Italy_txt">MADE IN ITALY</p>
                            </div>
                            {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                        </div>
                    </div>

                    < div style={{ marginTop: "3rem", marginBottom: "3rem" }} >
                        <span className="more-details-txt">Recently Viewed</span>
                    </div>

                    <div className="grid sub-rows-layout">
                        <div className="col-12 md:col-6 lg:col-4 sm:col-3 right_texts" >
                            <div className="recently_viewed_back_img1">
                                <p className="Italy_txt">MADE IN ITALY</p>
                            </div>
                            {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                        </div>

                        <div className="col-12 md:col-6 lg:col-4 sm:col-3 right_texts" >
                            <img src="images/Market_AmirBlog_Header_1920x1080-768x432.png.png"
                                className="carousel-sizing shoe-page-img" alt="two" />
                            {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                        </div>
                        <div className="col-12 md:col-6 lg:col-4 sm:col-3 right_texts" >
                            <img src="images/GREATS-Womens-St.JamesLow-Blanco-01_Web.jpg.png"
                                className="carousel-sizing shoe-page-img" alt="two" />
                            {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                        </div>
                    </div>
                    <div style={{ height: "1rem", marginBottom: "3rem" }} />
                </div>
            </div>
            <Footer />
        </>
    )
}
export default ShoeInfo;