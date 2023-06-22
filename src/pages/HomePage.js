import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/homePage.scss"
import ShoesCarousel from "./ShoesCarousel";

function HomePage() {

    return (
        <>
            <div>
                <div className="background_img" style={{ paddingLeft: "5rem" }}>
                    <NavBar design="home-page_navBar" />
                    <div className="home-title">
                        <div className="home-title-content">
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
                <div style={{}}>
                    <div style={{ margin: "20px", marginLeft: "4rem", backgroundColor: "#fff", width: "1600px", height: "50px", top: "836px", display: "flex", flex: "row", justifyContent: "space-between" }}>
                        <button className="home-category" style={{ background: "#F3DF77" }}>All Shoes</button>
                        <button className="home-category">Suede</button>
                        <button className="home-category">Hiking</button>
                        <button className="home-category">Apparel</button>
                        <button className="home-category">Football</button>
                        <button className="home-category">Training</button>
                        <button className="home-category">Workout & Gym</button>
                        <button className="home-category">Basketball</button>
                        <button className="home-category">Golf</button>
                        <button className="home-category">Slippers</button>
                    </div>
                </div>
                <div style={{ backgroundColor: "#F9F8F5", paddingLeft: "4rem"}}>
                    <ShoesCarousel />
                </div>

            </div >
            <Footer />
        </>
    )
}

export default HomePage
