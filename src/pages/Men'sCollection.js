import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/homePage.scss"
import ShoesCarousel_Products from "./ShoesCarousel_Products";

function MensCollection() {

    return (
        <>
            <div>
                <div className="men_background_img" style={{ paddingLeft: "5rem" }}>
                    <NavBar backgroundColor="home-page_navBar" textColor="home-page_navBar_text_color" />
                    <div className="home-title" style={{ margin: "auto", width: "90%", padding: "10px", top: "150px" }}>
                        <div className="home-title-content" style={{ textAlign: "center" }}>
                            <span style={{ fontFamily: "Nohemi", fontWeight: "600px", fontSize: "86px", lineHeight: "100px" }}>
                                Men's shoe collection
                            </span>
                            <span style={{ fontFamily: "Aeonik", fontWeight: "500px", fontSize: "24px", lineHeight: "28.8px" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </span>
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
                        <button className="home-category">Micro Sports</button>
                        <button className="home-category">Boots</button>
                    </div>
                </div>
                <div style={{ backgroundColor: "#F9F8F5", paddingLeft: "4rem" }}>
                    <ShoesCarousel_Products title={"Products"} />
                </div>

            </div >
            <Footer />
        </>
    )
}

export default MensCollection
