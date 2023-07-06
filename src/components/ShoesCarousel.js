import React from 'react'
import "../styles/profile.scss";

const ShoesCarousel = () => {
    const cardSection = (title, cloud_txt, max_txt, price) => {
        return (
            <div className='context_div'>
                <div className="ltd_edt_txt" >{title}</div>
                <div className="cloud_txt">{cloud_txt}</div>
                <div className="max_txt">{max_txt}</div>
                <div id="price">{price}</div>
            </div>
        )
    }
    return (
        <div>
            < div className='grid carousel_title'>
                <div className='col-12 md:col-6 lg:col-10 sm:col-10'>
                    <span className="my_shoe-carousel-title">New Arrivals...</span>
                </div>
                <div className='col-12 md:col-2 lg:col-2 sm:col-1'>
                    <button className='drag_btn'>
                        <span className='drag_txt'>Drag</span>
                    </button>
                </div>
            </div>

            <div className="grid carousel_section">
                <div className="col-12 md:col-6 lg:col-4 sm:col-3 carousel_div">
                    <div className="carousel_img1">
                        <p className="Italy_txt">MADE IN ITALY</p>
                    </div>
                    {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                </div>
                <div className="col-12 md:col-6 lg:col-4 sm:col-3 carousel_div">
                    <div className="carousel_img2">
                        <p className="Italy_txt">MADE IN ITALY</p>
                    </div>
                    {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                </div>
                <div className="col-12 md:col-6 lg:col-4 sm:col-3 carousel_div">
                    <div className="carousel_img3">
                        <p className="Italy_txt">NEW</p>
                    </div>
                    {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                </div>
            </div>
            <div>
                < div className='grid carousel_title'>
                    <div className='col-12 md:col-6 lg:col-10 sm:col-10'>
                        <span className="my_shoe-carousel-title">Featured...</span>
                    </div>
                    <div className='col-12 md:col-2 lg:col-2 sm:col-1'>
                        <button className='drag_btn'>
                            <span className='drag_txt'>Drag</span>
                        </button>
                    </div>
                </div>

                <div className="grid carousel_section">
                    <div className="col-12 md:col-6 lg:col-4 sm:col-3 carousel_div" >
                        <div className="shoe-page_background_img">
                            <p className="Italy_txt">MADE IN ITALY</p>
                        </div>
                        {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                    </div>
                    <div className="col-12 md:col-6 lg:col-4 sm:col-3 carousel_div">
                        <img style={{ width: "auto", height: "500px" }} src="images/GREATS-Womens-Charlie-Blanco-01_Web.jpg.png"
                            className="carousel-sizing" alt="two" />
                        {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                    </div>
                    <div className="col-12 md:col-6 lg:col-4 sm:col-3 carousel_div">
                        <div className="shoe-page_background_img2">
                            <p className="Italy_txt">MADE IN ITALY</p>
                        </div>
                        {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                    </div>
                </div>

                <div className="grid carousel_section">
                    <div className="col-12 md:col-6 lg:col-4 sm:col-3 carousel_div" >
                        <div className="carousel_background_img1">
                            <p className="Italy_txt">NEW</p>
                        </div>
                        {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                    </div>
                    <div className="col-12 md:col-6 lg:col-4 sm:col-3 carousel_div">
                        <img src="images/GREATS-Womens-St.JamesLow-Blanco-01_Web.jpg.png"
                            className="carousel-sizing shoe-page-img" alt="two" />
                        {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                    </div>
                    <div className="col-12 md:col-6 lg:col-4 sm:col-3 carousel_div">
                        <div className="carousel_background_img_last">
                            <p className="Italy_txt">NEW</p>
                        </div>
                        {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                    </div>
                </div>
            </div>
            <div style={{ height: "6rem" }} />
        </div>
    )
}

export default ShoesCarousel