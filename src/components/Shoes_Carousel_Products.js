import React from 'react'
import "../styles/profile.scss";
import "../styles/carousel.scss";

const ShoesCarouselProducts = ({ title }) => {
    const cardSection = (title, cloud_txt, max_txt, price) => {
        return (
            <div style={{ width: "100%", height: "25%", backgroundColor: 'white', display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div className="ltd_edt_txt" >{title}</div>
                <div className="cloud_txt">{cloud_txt}</div>
                <div className="max_txt">{max_txt}</div>
                <div id="price">{price}</div>
            </div>
        )
    }
    return (
        <div>
            <div className='grid' style={{ marginTop: "3rem", marginBottom: "3rem" }}>
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

                    <img style={{ width: "auto", height: "500px" }} className="carousel-sizing" src="images\GREATS-Mens-EssexPennyLoafer-BlackMulti-01_Web.jpg.png" alt="one" />
                    {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                </div>
                <div className="col-12 md:col-6 lg:col-4 sm:col-3" style={{ display: "flex", flexDirection: "column", color: "black" }}>

                    <img style={{ width: "auto", height: "500px" }} src="images/GREATS-Womens-Charlie-Blanco-01_Web.jpg.png"
                        className="carousel-sizing" alt="two" />
                    {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                </div>
                <div className="col-12 md:col-6 lg:col-4 sm:col-3" style={{ display: "flex", flexDirection: "column", color: "black" }}>

                    <img style={{ width: "auto", height: "500px" }} src="images\GREATS-Mens-RoyaleKnit-TonalOlive-01_Web.jpg.png"
                        className="carousel-sizing" alt="three" />
                    {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                </div>
            </div>
            < div className='grid' style={{ marginTop: "3rem", marginBottom: "3rem" }}>
                <div className='col-12 md:col-6 lg:col-10 sm:col-3'>
                    <span className="my_shoe-carousel-title">Products</span>
                </div>
            </div>
            <div className="grid">
                <div className="col-3" style={{ fontWeight: "bold", marginRight: "2rem", width: "280px", height: "50%", backgroundColor: "white" }}>
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
                <div className="col-9">
                    <div className="grid" style={{ marginBottom: "4rem", display: "flex" }}>
                        <div className="col-12 md:col-6 lg:col-4 sm:col-3" style={{ display: "flex", flexDirection: "column", color: "black" }} >
                            <img style={{ width: "auto", height: "500px" }} className="carousel-sizing" src="images\GREATS-Mens-Reign-RetroBlue-Black-01_Web.jpg.png" alt="one" />
                            {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                        </div>
                        <div className="col-12 md:col-6 lg:col-4 sm:col-3" style={{ display: "flex", flexDirection: "column", color: "black" }}>
                            <img style={{ width: "auto", height: "500px" }} src="images/GREATS-Womens-Charlie-Blanco-01_Web.jpg.png"
                                className="carousel-sizing" alt="two" />
                            {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                        </div>
                        <div className="col-12 md:col-6 lg:col-4 sm:col-3" style={{ display: "flex", flexDirection: "column", color: "black" }}>
                            <img style={{ width: "auto", height: "500px" }} src="images\GREATS-Womens-St.JamesLow-Blanco-01Web.png"
                                className="carousel-sizing" alt="three" />
                            {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                        </div>
                    </div>
                    <div className="grid" style={{ marginBottom: "4rem", display: "flex" }}>
                        <div className="col-12 md:col-6 lg:col-4 sm:col-3" style={{ display: "flex", flexDirection: "column", color: "black" }} >

                            <img style={{ width: "auto", height: "500px" }} className="carousel-sizing" src="images\GREATS-Mens-Reign-RetroBlue-Black-01_Web.jpg.png" alt="one" />
                            {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                        </div>
                        <div className="col-12 md:col-6 lg:col-4 sm:col-3" style={{ display: "flex", flexDirection: "column", color: "black" }}>
                            <img style={{ width: "auto", height: "500px" }} src="images/GREATS-Womens-Charlie-Blanco-01_Web.jpg.png"
                                className="carousel-sizing" alt="two" />
                            {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                        </div>
                        <div className="col-12 md:col-6 lg:col-4 sm:col-3" style={{ display: "flex", flexDirection: "column", color: "black" }}>
                            <img style={{ width: "auto", height: "500px" }} src="images\GREATS-Womens-St.JamesLow-Blanco-01Web.png"
                                className="carousel-sizing" alt="three" />
                            {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                        </div>
                    </div>
                    <div className="grid" style={{ display: "flex" }}>
                        <div className="col-12 md:col-6 lg:col-4 sm:col-3" style={{ display: "flex", flexDirection: "column", color: "black" }} >
                            <img style={{ width: "auto", height: "500px" }} className="carousel-sizing" src="images\GREATS-Mens-Reign-RetroBlue-Black-01_Web.jpg.png" alt="one" />
                            {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                        </div>
                        <div className="col-12 md:col-6 lg:col-4 sm:col-3" style={{ display: "flex", flexDirection: "column", color: "black" }}>
                            <img style={{ width: "auto", height: "500px" }} src="images/GREATS-Womens-Charlie-Blanco-01_Web.jpg.png"
                                className="carousel-sizing" alt="two" />
                            {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                        </div>
                        <div className="col-12 md:col-6 lg:col-4 sm:col-3" style={{ display: "flex", flexDirection: "column", color: "black" }}>
                            <img style={{ width: "auto", height: "500px" }} src="images\GREATS-Womens-St.JamesLow-Blanco-01Web.png"
                                className="carousel-sizing" alt="three" />
                            {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
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