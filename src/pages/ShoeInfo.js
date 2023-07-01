import { React } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/homePage.scss"


const ShoeInfo = () => {

    return (
        <>
            <div style={{ backgroundColor: "#F9F8F5", paddingLeft: "5rem" }}>
                <NavBar />
                <div className="grid" style={{ marginTop: "40px", marginBottom: "5rem" }}>
                    <div className="grid" style={{ marginTop: "80px", marginBottom: "2rem" }}>
                        <div className="col-12 md:col-6 lg:col-6 sm:col-3">
                            <div style={{ marginBottom: "2rem" }}>
                                <img style={{ width: "95%", height: "80%" }} src="images\shoe_info_main.png" alt="shoe-info-main" />
                            </div>
                            <div className="grid" style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                                <img style={{ width: "10%", height: "5%" }} src="images\shoe_info_main.png" alt="shoe-info-main" />
                                <img style={{ width: "10%", height: "5%" }} src="images\shoe_info_faded.png" alt="shoe-info-faded" />
                                <img style={{ width: "10%", height: "5%" }} src="images\shoe_info_faded.png" alt="shoe-info-faded" />
                                <img style={{ width: "10%", height: "5%" }} src="images\shoe_info_faded.png" alt="shoe-info-faded" />
                                <img style={{ width: "10%", height: "5%" }} src="images\shoe_info_faded.png" alt="shoe-info-faded" />
                                <img style={{ width: "10%", height: "5%" }} src="images\shoe_info_faded.png" alt="shoe-info-main" />
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-6 sm:col-3">
                            <div className="grid">
                                <div>
                                    <div className="col-12 md:col-12 lg:col-12 sm:col-3">
                                        <span style={{ font: "Montserrat", fontWeight: "bolder", fontSize: "32px" }}>
                                            Cloudmonster Sensa Shoe
                                        </span>
                                    </div>
                                    <div className="col-6 md:col-12 lg:col-12 sm:col-3" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", height: "auto" }}>
                                        <div style={{ alignItems: "center" }}>
                                            <span style={{ font: "Montserrat", fontWeight: "bolder", fontSize: "42px", lineHeight: "41.74px", alignItems: "center" }}> €30.00</span>
                                        </div>
                                        <div className="col-6 md:col-12 lg:col-3 sm:col-3" style={{ width: "auto" }}>
                                            <span style={{ fontSize: "12.5px", fontWeight: "bold", border: "none", color: "#FF3820", backgroundColor: "#FAD1CA", width: "auto", padding: "4px 10px 4px 10px", borderRadius: "18px" }}>
                                                Out of Stock
                                            </span>
                                        </div>
                                        <div className="col-6 md:col-12 lg:col- sm:col-3" style={{ width: "auto", top: "2px", marginBottom: "3rem" }}>
                                            <span style={{ fontSize: "16.7px", fontWeight: "bold", border: "none", color: "#fff", backgroundColor: "#29D63A", width: "auto", padding: "10px 10px 10px 10px", alignItems: "center" }}>
                                                Save 67%
                                            </span>
                                        </div>
                                        <div className="col-12 md:col-12 lg:col-12 sm:col-12">
                                            <span style={{ fontSize: "16.7px", border: "1px solid #E5E9ED", color: "#334553", backgroundColor: "#fff", width: "auto", padding: "10px 10px 10px 10px", alignItems: "center" }}>
                                                <i className="pi pi-heart" style={{ marginRight: "10px" }} />  Add to Favorites
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-12 md:col-12 lg:col-12 sm:col-3">
                                        <span style={{ color: "#141415", fontSize: "14.61px", lineHeight: "25.04px", fontFamily: "Montserrat" }}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod lacinia aliquam. Morbi est nis, at lacus. Donec ornare, dui vel facilisis luctus, metus mi ttitor erat sapien scelerisque nunc. Pellentesque ornare elit tellus... Read More
                                        </span>
                                    </div>
                                    <div className="col-12 md:col-12 lg:col-12 sm:col-3">
                                        <div className="grid" style={{ alignItems: "center" }}>
                                            <div className="col-3" style={{ marginRight: "10px" }}><span style={{ fontWeight: "bold" }}>Size<span style={{ color: "red" }}>*</span></span></div>
                                            <div className="col-5" >
                                                <select className="checkout_inputs" style={{ textAlign: "start", width: "100%", height: "2rem" }} name="Shirt/RoundNeck" id="Country/Region">
                                                    <option value="Shirt/Round" className="checkout_inputs" style={{ textAlign: "start", width: "100%", height: "2rem" }}>Select a shirt size</option>
                                                </select>
                                            </div>
                                            <div className="col-3" ><input className="checkout_inputs" placeholder="View Size Chart" style={{ textAlign: "center", width: "65%", height: "2rem", backgroundColor: "#EEF2F5" }} /></div>
                                        </div>
                                        <div className="grid" style={{ alignItems: "center" }}>
                                            <div className="col-3" style={{ marginRight: "10px" }}><span style={{ fontWeight: "bold" }}>Name</span></div>
                                            <div className="col-7" ><input className="checkout_inputs" placeholder="What name would you want in the shirt" style={{ textAlign: "start", width: "100%", height: "2rem" }} /></div>
                                        </div>
                                        <div className="grid" style={{ alignItems: "center" }}>
                                            <div className="col-3" style={{ marginRight: "10px" }}><span style={{ fontWeight: "bold" }}>Number on Shirt</span></div>
                                            <div className="col-7" ><input className="checkout_inputs" placeholder="Enter a number between 0 and 99" style={{ textAlign: "start", width: "100%", height: "2rem" }} /></div>
                                        </div>
                                        <div className="grid" style={{ alignItems: "center" }}>
                                            <div className="col-3" style={{ marginRight: "10px" }}><span style={{ fontWeight: "bold" }}>Patch</span></div>
                                            <div className="col-7" >
                                                <select className="checkout_inputs" style={{ textAlign: "start", width: "100%", height: "2rem" }} name="Patch" id="Country/Region">
                                                    <option value="Patch" className="checkout_inputs" style={{ textAlign: "start", width: "100%", height: "2rem" }}>Select a patch</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="grid" style={{ alignItems: "center" }}>
                                            <div className="col-3" style={{ marginRight: "10px", fontWeight: "bold" }}><span>Number</span></div>
                                            <div className="col-7" ><input className="checkout_inputs" placeholder="1" style={{ textAlign: "start", width: "20%", height: "2rem" }} /></div>
                                        </div>
                                        <div>
                                            <button className="checkout_buttons" placeholder="Apartment,premises,etc (Optional)" style={{ color: "yellow", backgroundColor: "black", width: "90%", height: "3rem", borderRadius: "4px", border: "none", marginTop: "25px" }}>
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", marginBottom: "2rem" }}>
                    <div style={{ width: "auto", height: "100px", fontWeight: "bolder", fontSize: "58px", lineHeight: "100px", marginBottom: "40px" }}>
                        More Details
                    </div>
                    <div style={{ fontWeight: "400", fontSize: "25px", lineHeight: "39px" }}>
                        <div className="grid" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <div className="col-11"> Return Policy</div>
                            <div className="col-1"><i className="pi pi-plus" /></div>
                        </div>
                        <hr style={{ marginTop: "35px" }} />
                    </div>
                    <div style={{ fontWeight: "400", fontSize: "25px", lineHeight: "39px" }}>
                        <div className="grid" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <div className="col-11"> Shipping & Pickup</div>
                            <div className="col-1"><i className="pi pi-plus" /></div>
                        </div>
                        <hr style={{ marginTop: "35px" }} />
                    </div>
                    <div style={{ fontWeight: "400", fontSize: "25px", lineHeight: "39px" }}>
                        <div className="grid" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <div className="col-11">  Materials & Transparency</div>
                            <div className="col-1"><i className="pi pi-plus" /></div>
                        </div>
                        <hr style={{ marginTop: "35px" }} />
                    </div>
                </div>
                <div>
                    < div className='gri' style={{ marginTop: "3rem", marginBottom: "3rem" }}>
                        <div className='col-10'>
                            <span style={{ width: "auto", height: "100px", fontWeight: "bolder", fontSize: "58px", lineHeight: "100px", marginBottom: "40px" }}>More Like this</span>
                        </div>
                    </div>
                    <div className="grid" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <div className="col-12 md:col-6 lg:col-4 sm:col-3" style={{ display: "flex", flexDirection: "column", color: "black" }} >
                            {/* <p className="Italy_txt">Made in Italy</p> */}
                            <img style={{ width: "auto", height: "500px" }} className="carousel-sizing" src="images\GREATS-Mens-EssexPennyLoafer-BlackMulti-01_Web.jpg.png" alt="one" />
                            <div style={{ width: "100%", height: "25%", backgroundColor: 'white', display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                <div className="ltd_edt_txt" >LIMITED EDITION</div>
                                <div className="cloud_txt">Cloudmonster Sensa</div>
                                <div className="max_txt">Maximum cushioning, road runs, all-day performance</div>
                                <div id="price">£189.00</div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-4 sm:col-3" style={{ display: "flex", flexDirection: "column", color: "black" }}>
                            {/* <p className="Italy_txt">Made in Italy</p> */}
                            <img style={{ width: "auto", height: "500px" }} src="images/GREATS-Womens-Charlie-Blanco-01_Web.jpg.png"
                                className="carousel-sizing" alt="two" />
                            <div style={{ width: "100%", height: "25%", backgroundColor: 'white', display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                <div className="ltd_edt_txt" >LIMITED EDITION</div>
                                <div className="cloud_txt">Cloudmonster Sensa</div>
                                <div className="max_txt">Maximum cushioning, road runs, all-day performance</div>
                                <div id="price">£189.00</div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-4 sm:col-3" style={{ display: "flex", flexDirection: "column", color: "black" }}>
                            {/* <p className="Italy_txt">Made in Italy</p> */}
                            <img style={{ width: "auto", height: "500px" }} src="images\GREATS-Mens-RoyaleKnit-TonalOlive-01_Web.jpg.png"
                                className="carousel-sizing" alt="three" />
                            <div style={{ width: "100%", height: "25%", backgroundColor: 'white', display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                <div className="ltd_edt_txt" >LIMITED EDITION</div>
                                <div className="cloud_txt">Cloudmonster Sensa</div>
                                <div className="max_txt">Maximum cushioning, road runs, all-day performance</div>
                                <div id="price">£189.00</div>
                            </div>
                        </div>
                    </div>
                    < div style={{ marginTop: "3rem", marginBottom: "3rem" }} >
                        <span style={{ width: "auto", height: "100px", fontWeight: "bolder", fontSize: "58px", lineHeight: "100px", marginBottom: "40px" }}>Recently Viewed</span>
                    </div>
                    <div className="grid" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <div className="col-12 md:col-6 lg:col-4 sm:col-3" style={{ display: "flex", flexDirection: "column", color: "black" }}>
                            {/* <p className="Italy_txt">Made in Italy</p> */}
                            <img style={{ width: "100%", height: "500px" }} className="carousel-sizing" src="images/GREATS-Mens-Reign-RetroBlue-Black-01_Web.jpg.png" alt="one" />
                            <div style={{ width: "100%", height: "25%", backgroundColor: 'white', display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                <div className="ltd_edt_txt" >LIMITED EDITION</div>
                                <div className="cloud_txt">Cloudmonster Sensa</div>
                                <div className="max_txt">Maximum cushioning, road runs, all-day performance</div>
                                <div id="price">£189.00</div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-4 sm:col-3" style={{ display: "flex", flexDirection: "column", color: "black" }}>
                            {/* <p className="Italy_txt">Made in Italy</p> */}
                            <img style={{ width: "100%", height: "500px" }} src="images/removal1.png"
                                className="carousel-sizing" alt="two" />
                            <div style={{ width: "100%", height: "25%", backgroundColor: 'white', display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                <div className="ltd_edt_txt" >LIMITED EDITION</div>
                                <div className="cloud_txt">Cloudmonster Sensa</div>
                                <div className="max_txt">Maximum cushioning, road runs, all-day performance</div>
                                <div id="price">£189.00</div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-4 sm:col-3" style={{ display: "flex", flexDirection: "column", color: "black" }}>
                            {/* <p className="Italy_txt">Made in Italy</p> */}
                            <img style={{ width: "100%", height: "500px" }} src="images/GREATS-Womens-Charlie-Blanco-01_Web.jpg.png"
                                className="carousel-sizing" alt="three" />
                            <div style={{ width: "100%", height: "25%", backgroundColor: 'white', display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                <div className="ltd_edt_txt" >LIMITED EDITION</div>
                                <div className="cloud_txt">Cloudmonster Sensa</div>
                                <div className="max_txt">Maximum cushioning, road runs, all-day performance</div>
                                <div id="price">£189.00</div>
                            </div>
                        </div>
                    </div>
                    <hr style={{ marginTop: "3rem", marginBottom: "3rem" }} />
                    <div style={{ height: "1rem", marginBottom: "3rem" }} />
                </div>
            </div >
            <Footer />
        </>
    )
}

export default ShoeInfo