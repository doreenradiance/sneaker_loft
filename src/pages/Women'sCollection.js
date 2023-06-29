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
                <div className="women_background_img">
                    <NavBar backgroundColor="home-page_navBar" textColor="home-page_navBar_text_color" />
                    <div className="home-title collection-main-div">
                        <div className="home-title-content" style={{ textAlign: "center" }}>
                            <span className="collection-txt">
                                Women's shoe collection
                            </span>
                            <span className="lorem-txt">
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
