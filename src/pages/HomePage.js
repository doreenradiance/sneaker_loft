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
                    <div className="home-title">
                        <div className="home-title-content" style={{ alignItems: "flex-start" }}>
                            <span style={{ fontFamily: "Nohemi", fontWeight: "600px", fontSize: "86px", lineHeight: "100px" }}>
                                Stunning collection of shoes
                            </span>
                            <span style={{ fontFamily: "Aeonik", fontWeight: "500px", fontSize: "24px", lineHeight: "28.8px" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </span>
                            <button style={{ backgroundColor: "#F3DF77", borderRadius: "5px", color: "black", width: "233px", height: "60px", border: "none", fontWeight: "bolder" }}>
                                <span style={{ fontFamily: "Aeonik", fontWeight: "600px", fontSize: "18px", alignContent: "center" }}>Shop Collection  <i style={{ marginLeft: "2rem" }} class="pi pi-shopping-bag" /></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="home_category_div">
                        <button className="home-category" style={{ background: "#F3DF77", marginLeft: "3rem" }}>All Shoes</button>
                        <button className="home-category">Suede</button>
                        <button className="home-category">Hiking</button>
                        <button className="home-category">Apparel</button>
                        <button className="home-category">Football</button>
                        <button className="home-category">Training</button>
                        <button className="home-category">Workout & Gym</button>
                        <button className="home-category">Basketball</button>
                        <button className="home-category">Golf</button>
                        <button className="home-category" style={{ marginRight: "3rem" }}>Slippers</button>
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
