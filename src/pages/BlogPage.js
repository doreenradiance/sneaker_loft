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
                        <div className="grid home-title home-title-layout" >
                            <div className="col-12 md:col-12 lg:col-12 sm:col-12 home-title-content">
                                <span className="blog">
                                    Blog and Media
                                </span>
                                <span className="blog-txt">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div>
                <div className="grid side-content">
                    <div className="col-12 md:col-6 lg:col-7 sm:col-3">
                        <div className="img-layout" >
                            <img className="blog-image" src="images\blog-page-home.png" alt="blog-page" />
                        </div>
                    </div>
                    <div className="col-12 md:col-6 lg:col-4 sm:col-3">
                        <div style={{ marginLeft: "4rem" }}>
                            <div style={{ marginBottom: "0.5rem" }}>
                                <span className="inside-blog">
                                    INSIDE BLOG
                                </span>
                            </div>
                            <div className="text-info-layout">
                                <span className="text-info" >
                                    How Japan and France are changing the shoe making industry with their new...
                                </span>
                            </div>
                            <div className="next-text-layout" >
                                <span className="next-text">
                                    Mi quis hendrerit dolor magna eget est lorem. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Sed cras ornare arcu dui vivamus arcu felis. Nibh tellus molestie nunc non blandit massa enim.                                </span>
                            </div>
                            <div className="grid profile-info">
                                <div style={{ alignItems: "center" }}>
                                    <img className="img-avatar" src="images\manager-avatar.png" alt="blog-page" />
                                </div>
                                <div className="profile-txt" >
                                    <div className="profile-name" >Kavan Sabnani</div>
                                    <div className="profile-position" >Staff Product Manager @shoez</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card" style={{ marginLeft: "40px" }}>
                    <TabView>
                        <TabPanel header="Popular" className="tab-layout" >
                            <div className="grid" style={{ marginBottom: "20px" }}>
                                <div className="col-12 md:col-6 lg:col-3 sm:col-3" style={{ color: "black" }} >
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <img src="images\div.product_slider_img_main (2).png" alt="one"
                                            className="carousel-image" />
                                        <div className="fav_texts_div card-sections lyt" >
                                            <p className="img-text-blog">BLOG POST</p>
                                            <p className="img-text-blog-content" >How to know quality shoe products when delivered</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 md:col-6 lg:col-3 sm:col-3" style={{ color: "black" }} >
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <img src="images\Link ⏵ Mixpanel-Boards_collaboration-product-insights--768x432.png.png"
                                            className="carousel-image" alt="two" />
                                        <div className="fav_texts_div card-sections lyt">
                                            <p className="img-text-blog">BLOG POST</p>
                                            <p className="img-text-blog-content" >How to know quality shoe products when delivered</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 md:col-6 lg:col-3 sm:col-3" style={{ color: "black" }} >
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <img src="images\GREATS-Mens-EssexPennyLoafer-BlackMulti-01_Web.jpg.png"
                                            className="carousel-image" alt="three" />
                                        <div className="fav_texts_div card-sections lyt">
                                            <p className="img-text-blog">INSIDE MIXPANEL</p>
                                            <p className="img-text-blog-content" >How to know quality shoe products when delivered</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 md:col-6 lg:col-3 sm:col-3" style={{ color: "black" }} >
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <img src="images\Link ⏵ DataVC_Blog_1914x1075-768x433.png.png"
                                            className="carousel-image" alt="three" />
                                        <div className="fav_texts_div card-sections lyt">
                                            <p className="img-text-blog">BLOG POST</p>
                                            <p className="img-text-blog-content" >How to know quality shoe products when delivered</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ color: "black", marginBottom: "3rem" }}>
                                <div className="browse">Browse our news collection</div>
                                <div style={{ marginBottom: "1.5rem" }}>
                                    <span className="browse-info"> Mi quis hendrerit dolor magna eget est loremant
                                    </span>
                                </div>
                                <div className="blog-shoe-options">
                                    <button className="auto-btn">All</button>
                                    <button className="blog-btns">Shoe Purchase</button>
                                    <button className="blog-btns">Shoe Maintenance</button>
                                    <button className="blog-btns">Shoe Launch</button>
                                    <button className="blog-btns">New Arrivals</button>
                                    <button className="blog-btns">Inside Blog</button>
                                    <button className="company-btn">Company News</button>
                                </div>
                                <div>
                                    <div className="grid" style={{ marginBottom: "20px" }}>
                                        <div className="col-12 md:col-6 lg:col-4 sm:col-3 card-info" >
                                            <img className="blog-img" src="images\Market_AmirBlog_Header_1920x1080-768x432.png.png" alt="one" />
                                            <div className="fav_texts_div card-sections card-sections2">
                                                <p className="img-text-blog">INSIDE BLOG</p>
                                                <p className="img-text-blog-content"> How to know quality shoe products when delivered </p>
                                                <p className="card-txt-blog" >There are a lot of factors to weigh when choosing a new pair of shoes. To some it can be overwhelming so we have decided to help you through it....</p>
                                                <div className="grid profile-info" >
                                                    <div style={{ alignItems: "center" }}>
                                                        <img className="shoe-sizes" src="images\Picture ⏵ T024QH38W-U04CKSNU7GD-629d9ab9196e-512-62x62.jpeg.png" alt="blog-page" />
                                                    </div>
                                                    <div className="sub-info">
                                                        <div className="profile-name">Kavan Sabnani</div>
                                                        <div className="profile-position">Staff Product Manager @shoez</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 md:col-6 lg:col-4 sm:col-3 card-info"  >
                                            <img className="blog-img" src="images\Link ⏵ DataVC_Blog_1914x1075-768x433.png.png" alt="one" />
                                            <div className="fav_texts_div card-sections card-sections2">
                                                <p className="img-text-blog">INSIDE BLOG</p>
                                                <p className="img-text-blog-content"> How to know quality shoe products when delivered </p>
                                                <p className="card-txt-blog" >There are a lot of factors to weigh when choosing a new pair of shoes. To some it can be overwhelming so we have decided to help you through it....</p>
                                                <div className="grid profile-info" >
                                                    <div style={{ alignItems: "center" }}>
                                                        <img className="shoe-sizes" src="images\div.avatar (1).png" alt="blog-page" />
                                                    </div>
                                                    <div className="sub-info">
                                                        <div className="profile-name">Kavan Sabnani</div>
                                                        <div className="profile-position">Staff Product Manager @shoez</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 md:col-6 lg:col-4 sm:col-3 card-info" >

                                            <img className="blog-img" src="images\Market_AmirBlog_Header_1920x1080-768x432.png.png" alt="one" />
                                            <div className="fav_texts_div card-sections card-sections2">
                                                <p className="img-text-blog">INSIDE BLOG</p>
                                                <p className="img-text-blog-content"> How to know quality shoe products when delivered </p>
                                                <p className="card-txt-blog" >There are a lot of factors to weigh when choosing a new pair of shoes. To some it can be overwhelming so we have decided to help you through it....</p>
                                                <div className="grid profile-info" >
                                                    <div style={{ alignItems: "center" }}>
                                                        <img className="shoe-sizes" src="images\div.avatar (1).png" alt="blog-page" />
                                                    </div>
                                                    <div className="sub-info">
                                                        <div className="profile-name">Kavan Sabnani</div>
                                                        <div className="profile-position">Staff Product Manager @shoez</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="grid" style={{ marginBottom: "20px" }}>
                                        <div className="col-12 md:col-6 lg:col-4 sm:col-3 card-info"  >

                                            <img className="blog-img" src="images\Market_AmirBlog_Header_1920x1080-768x432.png.png" alt="one" />
                                            <div className="fav_texts_div card-sections card-sections2">
                                                <p className="img-text-blog">INSIDE BLOG</p>
                                                <p className="img-text-blog-content"> How to know quality shoe products when delivered </p>
                                                <p className="card-txt-blog" >There are a lot of factors to weigh when choosing a new pair of shoes. To some it can be overwhelming so we have decided to help you through it....</p>
                                                <div className="grid profile-info" >
                                                    <div style={{ alignItems: "center" }}>
                                                        <img className="shoe-sizes" src="images\div.avatar (3).png" alt="blog-page" />
                                                    </div>
                                                    <div className="sub-info">
                                                        <div className="profile-name">Kavan Sabnani</div>
                                                        <div className="profile-position">Staff Product Manager @shoez</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 md:col-6 lg:col-4 sm:col-3 card-info"  >

                                            <img className="blog-img" src="images\FoundationTemplates_Blog-768x432.png.png" alt="one" />
                                            <div className="fav_texts_div card-sections card-sections2">
                                                <p className="img-text-blog">INSIDE BLOG</p>
                                                <p className="img-text-blog-content"> How to know quality shoe products when delivered </p>
                                                <p className="card-txt-blog" >There are a lot of factors to weigh when choosing a new pair of shoes. To some it can be overwhelming so we have decided to help you through it....</p>
                                                <div className="grid profile-info" >
                                                    <div style={{ alignItems: "center" }}>
                                                        <img className="shoe-sizes" src="images\Picture ⏵ T024QH38W-U04CKSNU7GD-629d9ab9196e-512-62x62.jpeg.png" alt="blog-page" />
                                                    </div>
                                                    <div className="sub-info">
                                                        <div className="profile-name">Kavan Sabnani</div>
                                                        <div className="profile-position">Staff Product Manager @shoez</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 md:col-6 lg:col-4 sm:col-3 card-info"  >

                                            <img className="blog-img" src="images\Mixpanel-Brand-4-768x432.png.png" alt="one" />
                                            <div className="fav_texts_div card-sections card-sections2">
                                                <p className="img-text-blog">INSIDE BLOG</p>
                                                <p className="img-text-blog-content"> How to know quality shoe products when delivered </p>
                                                <p className="card-txt-blog" >There are a lot of factors to weigh when choosing a new pair of shoes. To some it can be overwhelming so we have decided to help you through it....</p>
                                                <div className="grid profile-info" >
                                                    <div style={{ alignItems: "center" }}>
                                                        <img className="shoe-sizes" src="images\Picture ⏵ T024QH38W-U04CKSNU7GD-629d9ab9196e-512-62x62.jpeg.png" alt="blog-page" />
                                                    </div>
                                                    <div className="sub-info">
                                                        <div className="profile-name">Kavan Sabnani</div>
                                                        <div className="profile-position">Staff Product Manager @shoez</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel header="Latest" className="tab-layout" style={{ color: "black" }}>
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