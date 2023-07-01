import React from 'react'
import "../styles/profile.scss";

const ShoesCarousel = () => {
    const cardSection = (title, cloud_txt, max_txt, price) => {
        return (
            <div className="fav_texts_div" style={{ backgroundColor: "white", width: "400px", marginTop: "0" }}>
                <p className="ltd_edt_txt" >{title}</p>
                <p className="cloud_txt">{cloud_txt}</p>
                <p className="max_txt">{max_txt}</p>
                <p id="price">{price}</p>
            </div>
        )
    }
    return (
        <div>
            < div className='grid' style={{ marginTop: "3rem", marginBottom: "3rem" }}>
                <div className='col-12 md:col-6 lg:col-10 sm:col-10'>
                    <span className="my_shoe-carousel-title">New Arrivals...</span>
                </div>
                <div className='col-12 md:col-2 lg:col-2 sm:col-1'>
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
            <div>
                < div className='grid' style={{ marginTop: "3rem", marginBottom: "3rem" }}>
                    <div className='col-12 md:col-6 lg:col-10 sm:col-10'>
                        <span className="my_shoe-carousel-title">Featured...</span>
                    </div>
                    <div className='col-12 md:col-2 lg:col-2 sm:col-1'>
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
                <div className="grid" style={{ marginTop: "3rem", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
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
            </div>
            <hr style={{ marginTop: "3rem", marginBottom: "3rem" }} />
            <div style={{ height: "1rem" }} />
        </div>
    )
}

export default ShoesCarousel