import React from 'react'
import "../styles/profile.scss";
import "../styles/carousel.scss";

const ShoesCarouselProducts = ({ title }) => {
    return (
        <div>
            < div className='grid' style={{ marginTop: "3rem", marginBottom: "3rem" }}>
                <div className='col-12 md:col-6 lg:col-10 sm:col-3'>
                    <span className="my_shoe-carousel-title">New Arrivals...</span>
                </div>
                <div className='col-12 md:col-12 lg:col-2 sm:col-3'>
                    <button className='drag_btn'>
                        <span className='drag_txt'>Drag</span>
                    </button>
                </div>
            </div>

            <div className="grid" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <div className="col-12 md:col-6 lg:col-4 sm:col-3" style={{ display: "flex", flexDirection: "column", color: "black" }} >
                    {/* <p className="Italy_txt">Made in Italy</p> */}
                    <img style={{ width: "auto", height: "500px" }} className="carousel-sizing" src="images\GREATS-Mens-EssexPennyLoafer-BlackMulti-01_Web.jpg.png" alt="one" />
                    <div style={{ width: "100%", height: "12rem", backgroundColor: 'white', display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
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
                    <div style={{ width: "100%", height: "12rem", backgroundColor: 'white', display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
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
                    <div style={{ width: "100%", height: "12rem", backgroundColor: 'white', display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <div className="ltd_edt_txt" >LIMITED EDITION</div>
                        <div className="cloud_txt">Cloudmonster Sensa</div>
                        <div className="max_txt">Maximum cushioning, road runs, all-day performance</div>
                        <div id="price">£189.00</div>
                    </div>
                </div>
            </div>
            < div className='grid' style={{ marginTop: "3rem", marginBottom: "3rem" }}>
                <div className='col-12 md:col-6 lg:col-10 sm:col-3'>
                    <span className="my_shoe-carousel-title">Products</span>
                </div>
            </div>
            <div className="grid">
                <div className="col-4" style={{ fontWeight: "bold", marginRight: "2rem", width: "280px", height: "50%", backgroundColor: "white" }}>
                    <div className="grid" style={{ marginBottom: "2rem" }}>
                        <div className="col-10">Size</div>
                        <div className="col-1"><i className="pi pi-plus" /></div>
                    </div>
                    <hr />
                    <div className="grid" style={{ marginBottom: "2rem" }}>
                        <div className="col-10">Brand</div>
                        <div className="col-1"><i className="pi pi-plus" /></div>
                    </div>
                    <hr />
                    <div className="grid" style={{ marginBottom: "2rem" }}>
                        <div className="col-10">Sneaker Style</div>
                        <div className="col-1"><i className="pi pi-plus" /></div>
                    </div>
                    <hr />
                    <div className="grid" style={{ marginBottom: "2rem" }}>
                        <div className="col-10">Type</div>
                        <div className="col-1"><i className="pi pi-plus" /></div>
                    </div>
                    <hr />
                    <div className="grid" style={{ marginBottom: "2rem" }}>
                        <div className="col-12">
                            <button className="checkout_buttons" placeholder="Apartment,premises,etc (Optional)" style={{ color: "yellow", backgroundColor: "black", width: "100%", height: "3rem", borderRadius: "4px", border: "none", marginTop: "25px" }}>
                                Apply Filters
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="grid" style={{ marginBottom: "4rem", display: "flex" }}>
                        <div className="col-12 md:col-6 lg:col-4 sm:col-3" style={{ display: "flex", flexDirection: "column", color: "black" }} >
                            {/* <p className="Italy_txt">Made in Italy</p> */}
                            <img style={{ width: "auto", height: "500px" }} className="carousel-sizing" src="images\GREATS-Mens-EssexPennyLoafer-BlackMulti-01_Web.jpg.png" alt="one" />
                            <div style={{ width: "100%", height: "40%", backgroundColor: 'white', display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
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
                            <div style={{ width: "100%", height: "40%", backgroundColor: 'white', display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
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
                            <div style={{ width: "100%", height: "40%", backgroundColor: 'white', display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                <div className="ltd_edt_txt" >LIMITED EDITION</div>
                                <div className="cloud_txt">Cloudmonster Sensa</div>
                                <div className="max_txt">Maximum cushioning, road runs, all-day performance</div>
                                <div id="price">£189.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="grid" style={{ display: "flex" }}>
                        <div className="col-12 md:col-6 lg:col-4 sm:col-3" style={{ display: "flex", flexDirection: "column", color: "black" }} >
                            {/* <p className="Italy_txt">Made in Italy</p> */}
                            <img style={{ width: "auto", height: "500px" }} className="carousel-sizing" src="images\GREATS-Mens-EssexPennyLoafer-BlackMulti-01_Web.jpg.png" alt="one" />
                            <div style={{ width: "100%", height: "40%", backgroundColor: 'white', display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
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
                            <div style={{ width: "100%", height: "40%", backgroundColor: 'white', display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
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
                            <div style={{ width: "100%", height: "40%", backgroundColor: 'white', display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                <div className="ltd_edt_txt" >LIMITED EDITION</div>
                                <div className="cloud_txt">Cloudmonster Sensa</div>
                                <div className="max_txt">Maximum cushioning, road runs, all-day performance</div>
                                <div id="price">£189.00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{ marginTop: "3rem", marginBottom: "3rem" }} />
            <div style={{ height: "1rem" }} />
        </div>
    )
}

export default ShoesCarouselProducts