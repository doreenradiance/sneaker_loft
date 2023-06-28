import { React, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/homePage.scss"
import ShoesCarousel from "./ShoesCarousel";
import { InputText } from "primereact/inputtext";
import { Dropdown } from 'primereact/dropdown';
import { Button } from "reactstrap";

const ShoeInfo = () => {
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
        <>
            <div style={{ backgroundColor: "#F9F8F5", paddingLeft: "5rem" }}>
                <NavBar />
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "80px", marginBottom: "5rem" }}>
                    <div>
                        <div style={{ marginBottom: "2rem" }}>
                            <img style={{ width: "774px", height: "656px" }} src="images\shoe_info_main.png" alt="shoe-info-main" />
                        </div>
                        <div className="grid" style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                            <img style={{ width: "111px", height: "94px", left: "90px", top: "833px" }} src="images\shoe_info_main.png" alt="shoe-info-main" />
                            <img style={{ width: "111px", height: "94px", left: "90px", top: "833px" }} src="images\shoe_info_faded.png" alt="shoe-info-faded" />
                            <img style={{ width: "111px", height: "94px", left: "90px", top: "833px" }} src="images\shoe_info_faded.png" alt="shoe-info-faded" />
                            <img style={{ width: "111px", height: "94px", left: "90px", top: "833px" }} src="images\shoe_info_faded.png" alt="shoe-info-faded" />
                            <img style={{ width: "111px", height: "94px", left: "90px", top: "833px" }} src="images\shoe_info_faded.png" alt="shoe-info-faded" />
                            <img style={{ width: "111px", height: "94px", left: "90px", top: "833px" }} src="images\shoe_info_faded.png" alt="shoe-info-main" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <div style={{ marginBottom: "2rem" }}>
                                <span style={{ font: "Montserrat", fontWeight: "bolder", fontSize: "32px", lineHeight: "41.74px" }}>
                                    Cloudmonster Sensa Shoe
                                </span>
                            </div>
                            <div className="gri" style={{ alignItems: "center", display: "flex", flexDirection: "row", marginBottom: "2rem" }}>
                                <div style={{ marginRight: "25px", alignItems: "center" }}>
                                    <span style={{ font: "Montserrat", fontWeight: "bolder", fontSize: "32px", lineHeight: "41.74px", alignItems: "center" }}> €30.00</span>
                                </div>
                                <div style={{ marginRight: "25px" }}>
                                    <span style={{ fontSize: "12.5px", fontWeight: "bold", border: "none", color: "#FF3820", backgroundColor: "#FAD1CA", width: "97.87px", height: "23.35px", padding: "4px 10px 4px 10px", borderRadius: "18px" }}>
                                        Out of Stock
                                    </span>
                                </div>
                                <div style={{ marginRight: "80px" }}>
                                    <span style={{ fontSize: "16.7px", fontWeight: "bold", border: "none", color: "#fff", backgroundColor: "#29D63A", width: "94.7px", height: "40.35px", padding: "10px 10px 10px 10px", alignItems: "center" }}>
                                        Save 67%
                                    </span>
                                </div>
                                <div style={{}}>
                                    <span style={{ fontSize: "16.7px", border: "1px solid #E5E9ED", color: "#334553", backgroundColor: "#fff", width: "94.7px", height: "40.35px", padding: "10px 10px 10px 10px", alignItems: "center" }}>
                                        <i className="pi pi-heart" style={{ marginRight: "10px" }} />  Add to Favorites
                                    </span>
                                </div>
                            </div>
                            <div style={{ width: "576px", height: "83.48px", top: "303.52px", left: "944px", opacity: "80%", marginBottom: "2rem" }}>
                                <span style={{ color: "#141415", fontSize: "14.61px", lineHeight: "25.04px", fontFamily: "Montserrat" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod lacinia aliquam. Morbi est nis, at lacus. Donec ornare, dui vel facilisis luctus, metus mi ttitor erat sapien scelerisque nunc. Pellentesque ornare elit tellus... Read More
                                </span>
                            </div>
                        </div>
                        {/* <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <div>
                                <span> Shirt</span>
                            </div>
                            <div>
                                <Dropdown
                                    placeholder="Select a city"
                                />
                            </div>
                            <Button>CLick me</Button>
                        </div> */}
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
                    < div className='grid' style={{ marginTop: "3rem", marginBottom: "3rem" }}>
                        <div className='col-10'>
                            <span style={{ width: "auto", height: "100px", fontWeight: "bolder", fontSize: "58px", lineHeight: "100px", marginBottom: "40px" }}>More Like this</span>
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
                            <img src="images\GREATS-Mens-RoyaleKnit-TonalOlive-01_Web.jpg.png"
                                className="carousel-sizing" alt="three" />
                            {cardSection("LIMITED EDITION", "Cloudmonster Sensa", "Maximum cushioning, road runs, all-day performance", "£189.00")}
                        </div>
                    </div>
                    < div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
                        <span style={{ width: "auto", height: "100px", fontWeight: "bolder", fontSize: "58px", lineHeight: "100px", marginBottom: "40px" }}>Recently Viewed</span>
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
                    <hr style={{ marginTop: "3rem", marginBottom: "3rem" }} />
                    <div style={{ height: "1rem", marginBottom: "3rem" }} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ShoeInfo