import React from 'react'
import "../styles/profile.scss";

const ShoesCarousel = () => {
    const cardSection = (title, cloud_txt, max_txt, price) => {
        return (
            <div className="fav_texts_div" style={{ backgroundColor: "white", width: "400px" }}>
                <p className="ltd_edt_txt" >{title}</p>
                <p className="cloud_txt">{cloud_txt}</p>
                <p className="max_txt">{max_txt}</p>
                <p className="price">{price}</p>
            </div>
        )
    }
    return (
        <div>
            < div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
                <span className="my_shoe-carousel-title">New Arrivals...</span>
            </div>
            <div className="grid" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <div className="col-4" >
                    {/* <p className="Italy_txt">Made in Italy</p> */}
                    <div>  <img className="carousel-sizing" src="images\GREATS-Mens-EssexPennyLoafer-BlackMulti-01_Web.jpg.png" alt="one" /></div>
                    {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                </div>
                <div className="col-4">
                    {/* <p className="Italy_txt">Made in Italy</p> */}
                    <img src="images/GREATS-Womens-Charlie-Blanco-01_Web.jpg.png"
                        className="carousel-sizing" alt="two" />
                    {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                </div>
                <div className="col-4">
                    {/* <p className="Italy_txt">Made in Italy</p> */}
                    <img src="images\GREATS-Mens-RoyaleKnit-TonalOlive-01_Web.jpg.png"
                        className="carousel-sizing" alt="three" />
                    {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                </div>
            </div>
            < div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
                <span className="my_shoe-carousel-title">Featured...</span>
            </div>
            <div className="grid" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <div className="col-4" >
                    {/* <p className="Italy_txt">Made in Italy</p> */}
                    <div>  <img className="carousel-sizing" src="images/GREATS-Mens-Reign-RetroBlue-Black-01_Web.jpg.png" alt="one" /></div>
                    {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                </div>
                <div className="col-4">
                    {/* <p className="Italy_txt">Made in Italy</p> */}
                    <img src="images/removal1.png"
                        className="carousel-sizing" alt="two" />
                    {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                </div>
                <div className="col-4">
                    {/* <p className="Italy_txt">Made in Italy</p> */}
                    <img src="images/GREATS-Womens-Charlie-Blanco-01_Web.jpg.png"
                        className="carousel-sizing" alt="three" />
                    {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                </div>
            </div>
            <div className="grid" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "3rem" }}>
                <div className="col-4" >
                    {/* <p className="Italy_txt">Made in Italy</p> */}
                    <div>  <img className="carousel-sizing" src="images/GREATS-Mens-RoyaleKnit-Delta-01_Web.jpg (1).png" alt="one" /></div>
                    {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                </div>
                <div className="col-4">
                    {/* <p className="Italy_txt">Made in Italy</p> */}
                    <img src="images/GREATS-Womens-St.JamesLow-Blanco-01_Web.jpg (1).png"
                        className="carousel-sizing" alt="two" />
                    {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                </div>
                <div className="col-4">
                    {/* <p className="Italy_txt">Made in Italy</p> */}
                    <img src="images/GREATS-Womens-RoyaleKnit-Fog-01_Web.jpg.png"
                        className="carousel-sizing" alt="three" />
                    {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                </div>
            </div>
            <hr style={{ marginTop: "3rem", marginBottom: "3rem" }} />
            <div style={{ height: "1rem" }} />
        </div>
    )
}

export default ShoesCarousel