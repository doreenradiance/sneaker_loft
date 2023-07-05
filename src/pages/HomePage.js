import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/homePage.scss"
import ShoesCarousel from "../components/ShoesCarousel";

function HomePage() {
    return (
        <>
            <div>
                <div className="background_img">
                    <NavBar backgroundColor="home-page_navBar" textColor="home-page_navBar_text_color" />
                    <div className="home-title" style={{ marginTop: "3rem" }}>
                        <div className="home-title-content grid" style={{ alignItems: "flex-start", marginLeft: "3rem" }}>
                            <div className="col-12 md:col-6 lg:col-5 sm:col-10" style={{ fontFamily: "Nohemi", fontWeight: "600px", fontSize: "86px", lineHeight: "100px" }}>
                                Stunning collection of shoes
                            </div>
                            <div className="col-12 md:col-10 lg:col-10 sm:col-10" style={{ fontFamily: "Aeonik", fontWeight: "500px", fontSize: "24px", lineHeight: "28.8px" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </div>
                            <div className="col-12 md:col-6 lg:col-7 sm:col-5">
                                <button style={{ backgroundColor: "#F3DF77", borderRadius: "5px", color: "black", width: "233px", height: "60px", border: "none", fontWeight: "bolder" }}>
                                    <span style={{ fontFamily: "Aeonik", fontWeight: "600px", fontSize: "18px", alignContent: "center" }}>Shop Collection  <i style={{ marginLeft: "2rem" }} className="pi pi-shopping-bag" /></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ marginLeft: "2rem" }}>
                    <div className="men_category_div ">
                        <button className="men-category" style={{ background: "#F3DF77" }}>All Shoes</button>
                        <button className="men-category">Suede</button>
                        <button className="men-category">Hiking</button>
                        <button className="men-category">Apparel</button>
                        <button className="men-category">Football</button>
                        <button className="men-category">Training</button>
                        <button className="men-category">Workout & Gym</button>
                        <button className="men-category">Basketball</button>
                        <button className="men-category">Golf</button>
                        <button className="men-category">Slippers</button>
                        <button className="men-category">Micro Sports</button>
                        <button className="men-category">Boots</button>
                    </div>
                </div>
                <div style={{ backgroundColor: "#F9F8F5", paddingLeft: "4rem" }}>
                    <ShoesCarousel />
                </div>
            </div >
            <Footer />
        </>
    )
}

export default HomePage
