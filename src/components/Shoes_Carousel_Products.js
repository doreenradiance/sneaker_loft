import React from 'react'
import "../styles/profile.scss";
import "../styles/carousel.scss";

const ShoesCarouselProducts = ({ title }) => {
    const cardSection = (title, cloud_txt, max_txt, price) => {
        return (
            <div className="fav_texts_div" style={{ backgroundColor: "white", width: "360px" }}>
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
                <div className='col-10'>
                    <span className="my_shoe-carousel-title">New Arrivals...</span>
                </div>
                <div className='col-2'>
                    <button className='drag_btn'>
                        <span className='drag_txt'>Drag</span>
                    </button>
                </div>
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
                    <img src="images\GREATS-Mens-RoyaleKnit-TonalOlive-01_Web.jpg.png" style={{ width: "360px" }}
                        className="carousel-sizing" alt="three" />
                    {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                </div>
            </div>

            < div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
                <span className="my_shoe-carousel-title">{title}</span>
            </div>
            {/* <div> */}
            <div className="grid">
                {/* <div className="col-12 md:col-6 lg:col-4" > */}
                <div className="col-3" style={{ backgroundColor: "white", width: "290px", height: "583px" }} >
                    {/* </div> */}
                </div>
                <div className="col-3" >
                    <div className="profile_back-img1">
                        <p className="Italy_txt">Made in Italy</p>
                    </div>
                    {/* <div>  <img className=" fav_image1" src="images/GREATS-Mens-Reign-RetroBlue-Black-01_Web.jpg.png" alt="one" /></div> */}
                    {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                </div>
                <div className="col-3">
                    {/* <p className="Italy_txt">Made in Italy</p> */}
                    <div className="profile_back-img2">
                        <p className="Italy_txt">Made in Italy</p>
                    </div>
                    {/* <img src="images/removal1.png"
                        className="fav_image2" alt="two" /> */}
                    {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                </div>
                <div className="col-3">
                    {/* <p className="Italy_txt">Made in Italy</p>
                    <img src="images/GREATS-Womens-Charlie-Blanco-01_Web.jpg.png"
                        className=" fav_image3" alt="three" /> */}
                    <div className="profile_back-img2">
                        <p className="Italy_txt">Made in Italy</p>
                    </div>
                    {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                </div>
                {/* </div> */}
                {/* </div> */}
                {/* </div> */}
            </div>

            {/* </div> */}
            <div>

                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <div className="col-4" >
                        {/* <p className="Italy_txt">Made in Italy</p> */}
                        <div>  <img className="men-carousel-sizing" src="images/GREATS-Mens-Reign-RetroBlue-Black-01_Web.jpg.png" alt="one" /></div>
                        {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                    </div>
                    <div className="col-4">
                        {/* <p className="Italy_txt">Made in Italy</p> */}
                        <img src="images/removal1.png"
                            className="men-carousel-sizing" alt="two" />
                        {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                    </div>
                    <div className="col-4">
                        {/* <p className="Italy_txt">Made in Italy</p> */}
                        <img src="images/GREATS-Womens-Charlie-Blanco-01_Web.jpg.png"
                            className="men-carousel-sizing" alt="three" />
                        {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <div className="col-4" >
                        {/* <p className="Italy_txt">Made in Italy</p> */}
                        <div>  <img className="men-carousel-sizing" src="images/GREATS-Mens-Reign-RetroBlue-Black-01_Web.jpg.png" alt="one" /></div>
                        {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                    </div>
                    <div className="col-4">
                        {/* <p className="Italy_txt">Made in Italy</p> */}
                        <img src="images/removal1.png"
                            className="men-carousel-sizing" alt="two" />
                        {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                    </div>
                    <div className="col-4">
                        {/* <p className="Italy_txt">Made in Italy</p> */}
                        <img src="images/GREATS-Womens-Charlie-Blanco-01_Web.jpg.png"
                            className="men-carousel-sizing" alt="three" />
                        {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                    </div>
                </div>
                {/* </div> */}
            </div>
            {/* </div> */}
            <hr style={{ marginTop: "3rem", marginBottom: "3rem" }} />
            <div style={{ height: "1rem" }} />
        </div>
    )
}

export default ShoesCarouselProducts