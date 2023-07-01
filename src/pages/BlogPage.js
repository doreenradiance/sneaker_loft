import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/homePage.scss"
import { TabView, TabPanel } from 'primereact/tabview';

const BlogPage = () => {

    return (
        <div style={{ backgroundColor: "#F9F8F5" }}>
            <div className="grid">
                <div className="col-12 md:col-12 lg:col-12 sm:col-12">

                    <div className="women_background_img" style={{ paddingLeft: "5rem" }}>
                        <NavBar backgroundColor="home-page_navBar" textColor="home-page_navBar_text_color" />
                        <div className="grid home-title" style={{ margin: "auto", width: "90%", padding: "10px", top: "150px" }}>
                            <div className="col-12 md:col-12 lg:col-12 sm:col-12 home-title-content" style={{ textAlign: "center" }}>
                                <span style={{ fontFamily: "Nohemi", fontWeight: "600px", fontSize: "86px", lineHeight: "100px" }}>
                                    Blog and Media
                                </span>
                                <span style={{ fontFamily: "Aeonik", fontWeight: "500px", fontSize: "24px", lineHeight: "28.8px" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div>
                <div className="grid" style={{ marginTop: "80px", marginBottom: "2rem" }}>
                    <div className="col-12 md:col-6 lg:col-7 sm:col-3">
                        <div style={{ marginLeft: "2rem", marginBottom: "2rem" }}>
                            <img style={{ width: "100%", height: "50%" }} src="images\blog-page-home.png" alt="blog-page" />
                        </div>
                    </div>
                    <div className="col-12 md:col-6 lg:col-4 sm:col-3">
                        <div style={{ marginLeft: "4rem" }}>
                            <div style={{ marginBottom: "0.5rem" }}>
                                <span style={{ font: "Inter", fontWeight: "700", fontSize: "12.41px", lineHeight: "20.22px", color: "#6B7C93" }}>
                                    INSIDE BLOG
                                </span>
                            </div>
                            <div style={{ marginBottom: "0.5rem", width: "396.98px", height: "180px" }}>
                                <span style={{ font: "Nohemi", fontWeight: "600", fontSize: "31.49px", lineHeight: "45px", color: "#37383C" }}>
                                    How Japan and France are changing the shoe making industry with their new...                                </span>
                            </div>
                            <div style={{ width: "411px", height: "111px", top: "2px", marginBottom: "3rem" }}>
                                <span style={{ color: "#141415", fontSize: "14.61px", lineHeight: "25.04px", fontFamily: "Montserrat" }}>
                                    Mi quis hendrerit dolor magna eget est lorem. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Sed cras ornare arcu dui vivamus arcu felis. Nibh tellus molestie nunc non blandit massa enim.                                </span>
                            </div>
                            <div className="grid" style={{ alignItems: "center", display: "flex", flexDirection: "row" }}>
                                <div style={{ alignItems: "center" }}>
                                    <img style={{ width: "45.8px", height: "45.8px", borderRadius: "23px" }} src="images\manager-avatar.png" alt="blog-page" />
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "199.8px", height: "41px", padding: "0px 12px 0px 14px" }}>
                                    <div style={{ fontFamily: "Inter", fontWeight: "700", fontSize: "13.36px", lineHeight: "22.9px" }}>Kavan Sabnani</div>
                                    <div style={{ color: "#6B7C93", fontFamily: "Inter", fontWeight: "400", fontSize: "10.5px", lineHeight: "17.2px" }}>Staff Product Manager @shoez</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card" style={{ marginLeft: "40px" }}>
                    <TabView>
                        <TabPanel header="Popular" style={{ marginRight: "20px", marginBottom: "10px", fontWeight: "500", fontSize: "12.1px", color: "#1868FB" }}>
                            <div className="grid" style={{ marginBottom: "20px" }}>
                                <div className="col-12 md:col-6 lg:col-3 sm:col-3" style={{ color: "black" }} >
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        {/* <p className="Italy_txt">Made in Italy</p> */}
                                        <img src="images\div.product_slider_img_main (2).png" alt="one"
                                            style={{ width: "85%", height: "270px" }} />
                                        <div className="fav_texts_div card-sections" style={{ width: "85%", padding: "1rem" }}>
                                            <p style={{ color: "#6B7C93", fontFamily: "Inter", fontWeight: "700", fontSize: "12.41px", lineHeight: "16.13px" }} >BLOG POST</p>
                                            <p style={{ color: "#37383C", fontFamily: "Inter", fontWeight: "700", fontSize: "16px", lineHeight: "23.88px" }} >How to know quality shoe products when delivered</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 md:col-6 lg:col-3 sm:col-3" style={{ color: "black" }} >
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        {/* <p className="Italy_txt">Made in Italy</p> */}
                                        <img src="images\Link ⏵ Mixpanel-Boards_collaboration-product-insights--768x432.png.png"
                                            style={{ width: "85%", height: "270px" }} alt="two" />
                                        <div className="fav_texts_div card-sections" style={{ width: "85%", padding: "1rem" }}>
                                            <p style={{ color: "#6B7C93", fontFamily: "Inter", fontWeight: "700", fontSize: "12.41px", lineHeight: "16.13px" }} >BLOG POST</p>
                                            <p style={{ color: "#37383C", fontFamily: "Inter", fontWeight: "700", fontSize: "16px", lineHeight: "23.88px" }} >How to know quality shoe products when delivered</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 md:col-6 lg:col-3 sm:col-3" style={{ color: "black" }} >
                                    <div style={{ display: "flex", flexDirection: "column" }}>                                    {/* <p className="Italy_txt">Made in Italy</p> */}
                                        <img src="images\GREATS-Mens-EssexPennyLoafer-BlackMulti-01_Web.jpg.png"
                                            style={{ width: "85%", height: "270px" }} alt="three" />
                                        <div className="fav_texts_div card-sections" style={{ width: "85%", padding: "1rem" }}>
                                            <p style={{ color: "#6B7C93", fontFamily: "Inter", fontWeight: "700", fontSize: "12.41px", lineHeight: "16.13px" }} >INSIDE MIXPANEL</p>
                                            <p style={{ color: "#37383C", fontFamily: "Inter", fontWeight: "700", fontSize: "16px", lineHeight: "23.88px" }} >How to know quality shoe products when delivered</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 md:col-6 lg:col-3 sm:col-3" style={{ color: "black" }} >
                                    <div style={{ display: "flex", flexDirection: "column" }}>                                    {/* <p className="Italy_txt">Made in Italy</p> */}
                                        <img src="images\Link ⏵ DataVC_Blog_1914x1075-768x433.png.png"
                                            style={{ width: "85%", height: "270px" }} alt="three" />
                                        <div className="fav_texts_div card-sections" style={{ width: "85%", padding: "1rem" }}>
                                            <p style={{ color: "#6B7C93", fontFamily: "Inter", fontWeight: "700", fontSize: "12.41px", lineHeight: "16.13px" }} >BLOG POST</p>
                                            <p style={{ color: "#37383C", fontFamily: "Inter", fontWeight: "700", fontSize: "16px", lineHeight: "23.88px" }} >How to know quality shoe products when delivered</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ color: "black", marginBottom: "3rem" }}>
                                <div style={{ fontFamily: "Nohemi", fontWeight: "600", fontSize: "20.04px", lineHeight: "35.27px" }}>Browse our news collection</div>
                                <div style={{ marginBottom: "1.5rem" }}>
                                    <span style={{ color: "#6B7C93", fontFamily: "Inter", fontWeight: "400", fontSize: "14.31px", lineHeight: "27.67px" }}> Mi quis hendrerit dolor magna eget est loremant
                                    </span>
                                </div>
                                <div style={{ marginBottom: "5rem", display: "flex", flexDirection: "row", width: "auto", marginRight: "10px", height: "auto", top: "82.97px" }}>
                                    <button style={{ color: "#1868FB", width: "auto", marginRight: "10px", height: "auto", borderRadius: "4px", border: "1px solid #1868FB", padding: "3px 9px 4px 9px" }}>All</button>
                                    <button style={{ width: "auto", marginRight: "10px", height: "auto", borderRadius: "4px", border: "1px solid #CFD6E4", padding: "3px 9px 4px 9px", }}>Shoe Purchase</button>
                                    <button style={{ width: "auto", marginRight: "10px", height: "auto", borderRadius: "4px", border: "1px solid #CFD6E4", padding: "3px 9px 4px 9px", }}>Shoe Maintenance</button>
                                    <button style={{ width: "auto", marginRight: "10px", height: "auto", borderRadius: "4px", border: "1px solid #CFD6E4", padding: "3px 9px 4px 9px", }}>Shoe Launch</button>
                                    <button style={{ width: "auto", marginRight: "10px", height: "auto", borderRadius: "4px", border: "1px solid #CFD6E4", padding: "3px 9px 4px 9px", }}>New Arrivals</button>
                                    <button style={{ width: "auto", marginRight: "10px", height: "auto", borderRadius: "4px", border: "1px solid #CFD6E4", padding: "3px 9px 4px 9px", }}>Inside Blog</button>
                                    <button style={{ width: "auto", height: "auto", borderRadius: "4px", border: "1px solid #CFD6E4", padding: "3px 9px 4px 9px" }}>Company News</button>
                                </div>
                                <div>
                                    <div className="grid" style={{ marginBottom: "20px" }}>
                                        <div className="col-12 md:col-6 lg:col-4 sm:col-3" style={{ display: "flex", flexDirection: "column", color: "black" }} >
                                            {/* <p className="Italy_txt">Made in Italy</p> */}
                                            <img style={{ width: "90%", height: "60%" }} src="images\Market_AmirBlog_Header_1920x1080-768x432.png.png" alt="one" />
                                            <div className="fav_texts_div card-sections" style={{ height: "100%", backgroundColor: "white", width: "90%", padding: "1rem" }}>
                                                <p style={{ color: "#6B7C93", fontFamily: "Inter", fontWeight: "700", fontSize: "12.41px", lineHeight: "16.13px" }} >INSIDE BLOG</p>
                                                <p style={{ color: "#37383C", fontFamily: "Inter", fontWeight: "700", fontSize: "16px", lineHeight: "23.88px" }}> How to know quality shoe products when delivered </p>
                                                <p style={{ color: "#6B7C93", fontFamily: "Inter", fontWeight: "400", fontSize: "14.3px", lineHeight: "22.9px" }} >There are a lot of factors to weigh when choosing a new pair of shoes. To some it can be overwhelming so we have decided to help you through it....</p>
                                                <div className="grid" style={{ alignItems: "center", display: "flex", flexDirection: "row" }}>
                                                    <div style={{ alignItems: "center" }}>
                                                        <img style={{ width: "45.8px", height: "45.8px", borderRadius: "23px" }} src="images\Picture ⏵ T024QH38W-U04CKSNU7GD-629d9ab9196e-512-62x62.jpeg.png" alt="blog-page" />
                                                    </div>
                                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "199.8px", height: "41px", padding: "0px 12px 0px 14px" }}>
                                                        <div style={{ fontFamily: "Inter", fontWeight: "700", fontSize: "13.36px", lineHeight: "22.9px" }}>Kavan Sabnani</div>
                                                        <div style={{ color: "#6B7C93", fontFamily: "Inter", fontWeight: "400", fontSize: "10.5px", lineHeight: "17.2px" }}>Staff Product Manager @shoez</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 md:col-6 lg:col-4 sm:col-3" style={{ display: "flex", flexDirection: "column", color: "black" }} >
                                            {/* <p className="Italy_txt">Made in Italy</p> */}
                                            <img style={{ width: "90%", height: "60%" }} src="images\Link ⏵ DataVC_Blog_1914x1075-768x433.png.png" alt="one" />
                                            <div className="fav_texts_div card-sections" style={{ height: "100%", backgroundColor: "white", width: "90%", padding: "1rem" }}>
                                                <p style={{ color: "#6B7C93", fontFamily: "Inter", fontWeight: "700", fontSize: "12.41px", lineHeight: "16.13px" }} >INSIDE BLOG</p>
                                                <p style={{ color: "#37383C", fontFamily: "Inter", fontWeight: "700", fontSize: "16px", lineHeight: "23.88px" }}> How to know quality shoe products when delivered </p>
                                                <p style={{ color: "#6B7C93", fontFamily: "Inter", fontWeight: "400", fontSize: "14.3px", lineHeight: "22.9px" }} >There are a lot of factors to weigh when choosing a new pair of shoes. To some it can be overwhelming so we have decided to help you through it....</p>
                                                <div className="grid" style={{ alignItems: "center", display: "flex", flexDirection: "row" }}>
                                                    <div style={{ alignItems: "center" }}>
                                                        <img style={{ width: "45.8px", height: "45.8px", borderRadius: "23px" }} src="images\div.avatar (1).png" alt="blog-page" />
                                                    </div>
                                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "199.8px", height: "41px", padding: "0px 12px 0px 14px" }}>
                                                        <div style={{ fontFamily: "Inter", fontWeight: "700", fontSize: "13.36px", lineHeight: "22.9px" }}>Kavan Sabnani</div>
                                                        <div style={{ color: "#6B7C93", fontFamily: "Inter", fontWeight: "400", fontSize: "10.5px", lineHeight: "17.2px" }}>Staff Product Manager @shoez</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 md:col-6 lg:col-4 sm:col-3" style={{ display: "flex", flexDirection: "column", color: "black" }} >
                                            {/* <p className="Italy_txt">Made in Italy</p> */}
                                            <img style={{ width: "90%", height: "60%" }} src="images\Market_AmirBlog_Header_1920x1080-768x432.png.png" alt="one" />
                                            <div className="fav_texts_div card-sections" style={{ height: "100%", backgroundColor: "white", width: "90%", padding: "1rem" }}>
                                                <p style={{ color: "#6B7C93", fontFamily: "Inter", fontWeight: "700", fontSize: "12.41px", lineHeight: "16.13px" }} >INSIDE BLOG</p>
                                                <p style={{ color: "#37383C", fontFamily: "Inter", fontWeight: "700", fontSize: "16px", lineHeight: "23.88px" }}> How to know quality shoe products when delivered </p>
                                                <p style={{ color: "#6B7C93", fontFamily: "Inter", fontWeight: "400", fontSize: "14.3px", lineHeight: "22.9px" }} >There are a lot of factors to weigh when choosing a new pair of shoes. To some it can be overwhelming so we have decided to help you through it....</p>
                                                <div className="grid" style={{ alignItems: "center", display: "flex", flexDirection: "row" }}>
                                                    <div style={{ alignItems: "center" }}>
                                                        <img style={{ width: "45.8px", height: "45.8px", borderRadius: "23px" }} src="images\div.avatar (1).png" alt="blog-page" />
                                                    </div>
                                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "199.8px", height: "41px", padding: "0px 12px 0px 14px" }}>
                                                        <div style={{ fontFamily: "Inter", fontWeight: "700", fontSize: "13.36px", lineHeight: "22.9px" }}>Kavan Sabnani</div>
                                                        <div style={{ color: "#6B7C93", fontFamily: "Inter", fontWeight: "400", fontSize: "10.5px", lineHeight: "17.2px" }}>Staff Product Manager @shoez</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="grid" style={{ marginBottom: "20px" }}>
                                        <div className="col-12 md:col-6 lg:col-4 sm:col-3" style={{ display: "flex", flexDirection: "column", color: "black" }} >
                                            {/* <p className="Italy_txt">Made in Italy</p> */}
                                            <img style={{ width: "90%", height: "60%" }} src="images\Market_AmirBlog_Header_1920x1080-768x432.png.png" alt="one" />
                                            <div className="fav_texts_div card-sections" style={{ height: "100%", backgroundColor: "white", width: "90%", padding: "1rem" }}>
                                                <p style={{ color: "#6B7C93", fontFamily: "Inter", fontWeight: "700", fontSize: "12.41px", lineHeight: "16.13px" }} >INSIDE BLOG</p>
                                                <p style={{ color: "#37383C", fontFamily: "Inter", fontWeight: "700", fontSize: "16px", lineHeight: "23.88px" }}> How to know quality shoe products when delivered </p>
                                                <p style={{ color: "#6B7C93", fontFamily: "Inter", fontWeight: "400", fontSize: "14.3px", lineHeight: "22.9px" }} >There are a lot of factors to weigh when choosing a new pair of shoes. To some it can be overwhelming so we have decided to help you through it....</p>
                                                <div className="grid" style={{ alignItems: "center", display: "flex", flexDirection: "row" }}>
                                                    <div style={{ alignItems: "center" }}>
                                                        <img style={{ width: "45.8px", height: "45.8px", borderRadius: "23px" }} src="images\div.avatar (3).png" alt="blog-page" />
                                                    </div>
                                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "199.8px", height: "41px", padding: "0px 12px 0px 14px" }}>
                                                        <div style={{ fontFamily: "Inter", fontWeight: "700", fontSize: "13.36px", lineHeight: "22.9px" }}>Kavan Sabnani</div>
                                                        <div style={{ color: "#6B7C93", fontFamily: "Inter", fontWeight: "400", fontSize: "10.5px", lineHeight: "17.2px" }}>Staff Product Manager @shoez</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 md:col-6 lg:col-4 sm:col-3" style={{ display: "flex", flexDirection: "column", color: "black" }} >
                                            {/* <p className="Italy_txt">Made in Italy</p> */}
                                            <img style={{ width: "90%", height: "60%" }} src="images\FoundationTemplates_Blog-768x432.png.png" alt="one" />
                                            <div className="fav_texts_div card-sections" style={{ height: "100%", backgroundColor: "white", width: "90%", padding: "1rem" }}>
                                                <p style={{ color: "#6B7C93", fontFamily: "Inter", fontWeight: "700", fontSize: "12.41px", lineHeight: "16.13px" }} >INSIDE BLOG</p>
                                                <p style={{ color: "#37383C", fontFamily: "Inter", fontWeight: "700", fontSize: "16px", lineHeight: "23.88px" }}> How to know quality shoe products when delivered </p>
                                                <p style={{ color: "#6B7C93", fontFamily: "Inter", fontWeight: "400", fontSize: "14.3px", lineHeight: "22.9px" }} >There are a lot of factors to weigh when choosing a new pair of shoes. To some it can be overwhelming so we have decided to help you through it....</p>
                                                <div className="grid" style={{ alignItems: "center", display: "flex", flexDirection: "row" }}>
                                                    <div style={{ alignItems: "center" }}>
                                                        <img style={{ width: "45.8px", height: "45.8px", borderRadius: "23px" }} src="images\Picture ⏵ T024QH38W-U04CKSNU7GD-629d9ab9196e-512-62x62.jpeg.png" alt="blog-page" />
                                                    </div>
                                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "199.8px", height: "41px", padding: "0px 12px 0px 14px" }}>
                                                        <div style={{ fontFamily: "Inter", fontWeight: "700", fontSize: "13.36px", lineHeight: "22.9px" }}>Kavan Sabnani</div>
                                                        <div style={{ color: "#6B7C93", fontFamily: "Inter", fontWeight: "400", fontSize: "10.5px", lineHeight: "17.2px" }}>Staff Product Manager @shoez</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 md:col-6 lg:col-4 sm:col-3" style={{ display: "flex", flexDirection: "column", color: "black" }} >
                                            {/* <p className="Italy_txt">Made in Italy</p> */}
                                            <img style={{ width: "90%", height: "60%" }} src="images\Mixpanel-Brand-4-768x432.png.png" alt="one" />
                                            <div className="fav_texts_div card-sections" style={{ height: "100%", backgroundColor: "white", width: "90%", padding: "1rem" }}>
                                                <p style={{ color: "#6B7C93", fontFamily: "Inter", fontWeight: "700", fontSize: "12.41px", lineHeight: "16.13px" }} >INSIDE BLOG</p>
                                                <p style={{ color: "#37383C", fontFamily: "Inter", fontWeight: "700", fontSize: "16px", lineHeight: "23.88px" }}> How to know quality shoe products when delivered </p>
                                                <p style={{ color: "#6B7C93", fontFamily: "Inter", fontWeight: "400", fontSize: "14.3px", lineHeight: "22.9px" }} >There are a lot of factors to weigh when choosing a new pair of shoes. To some it can be overwhelming so we have decided to help you through it....</p>
                                                <div className="grid" style={{ alignItems: "center", display: "flex", flexDirection: "row" }}>
                                                    <div style={{ alignItems: "center" }}>
                                                        <img style={{ width: "45.8px", height: "45.8px", borderRadius: "23px" }} src="images\Picture ⏵ T024QH38W-U04CKSNU7GD-629d9ab9196e-512-62x62.jpeg.png" alt="blog-page"/>
                                                    </div>
                                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "199.8px", height: "41px", padding: "0px 12px 0px 14px" }}>
                                                        <div style={{ fontFamily: "Inter", fontWeight: "700", fontSize: "13.36px", lineHeight: "22.9px" }}>Kavan Sabnani</div>
                                                        <div style={{ color: "#6B7C93", fontFamily: "Inter", fontWeight: "400", fontSize: "10.5px", lineHeight: "17.2px" }}>Staff Product Manager @shoez</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel header="Latest" style={{ marginRight: "20px", fontWeight: "500", fontSize: "12.1px" }}>
                        </TabPanel>
                    </TabView>
                    <div style={{ height: "1rem", marginBottom: "3rem" }} />
                </div>
            </div >
            <Footer />
        </div>
    )
}

export default BlogPage