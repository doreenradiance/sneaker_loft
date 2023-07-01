import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/homePage.scss"
import "../styles/men's collection.scss"
import ShoesCarouselProducts from "../components/Shoes_Carousel_Products";

function WomenCollection() {

    return (
        <>
            <div>
                <div className="women_background_img" style={{ paddingLeft: "5rem" }}>
                    <NavBar backgroundColor="home-page_navBar" textColor="home-page_navBar_text_color" />
                    <div className="grid home-title" style={{ margin: "auto", width: "90%", padding: "10px", top: "150px" }}>
                        <div className="col-12 md:col-12 lg:col-12 sm:col-12 home-title-content" style={{ textAlign: "center" }}>
                            <span style={{ fontFamily: "Nohemi", fontWeight: "600px", fontSize: "86px", lineHeight: "100px" }}>
                                Women's shoe collection
                            </span>
                            <span style={{ fontFamily: "Aeonik", fontWeight: "500px", fontSize: "24px", lineHeight: "28.8px" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </span>
                        </div>
                    </div>
                </div>
                <div className="men_category_div">
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
                <div style={{ backgroundColor: "#F9F8F5", paddingLeft: "4rem" }}>
                    <ShoesCarouselProducts title={"Featured..."} />
                </div>
            </div >
            <Footer />
        </>
    )
}

export default WomenCollection
