import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/blog.scss"

function BlogInfo() {
    return (
        <>
            <div style={{ backgroundColor: "#F5F5F5" }}>
                <NavBar />

                <div style={{ marginLeft: "24rem", width: "50vw", padding: "1rem", marginBottom: "4rem" }}>
                    <img className="col-12 md:col-6 lg:col-6" style={{ marginTop: "2rem", width: "49vw", marginBottom: "0" }} src="images/Market_AmirBlog_Header_1920x1080-1100x619.png.png" alt="bloginfo_image" />
                    <div style={{ display: "flex", flexDirection: "row", backgroundColor: "", paddingTop: "0" }}>
                        <div style={{ display: "flex", flexDirection: "column" }} >
                            <img src="images/fb.png" alt="fb" className="blog_icons" />
                            <img src="images/in.png" alt="in" className="blog_icons" />
                            <img src="images/twitter.png" alt="twit" className="twitter_icons" />
                        </div>
                        <div>
                            <p style={{ display: "flex", alignContent: "center", color: "#6B7C93", fontSize: "14px" }}>Inside BLOG</p>
                            <p>How Japan and France are changing the shoe making industry with their new...</p>
                            <p>Last edited: May 17, 2023</p>
                            <p>Published: May 2, 2023</p>
                            <p>Mi quis hendrerit dolor magna eget est lorem. Nulla facilisi nullam vehicula ipsum a</p>
                            <p>  arcu cursus vitae. Vitae sapien pellentesque habitant morbi tristique senectus et netus..</p>
                            <p>  Sed cras ornare arcu dui.vivamus arcu felis. Nibh tellus</p>
                            <p> molestie nunc non blandit massa enim.</p>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <img src="images/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg" style={{ height: "5rem", width: "5rem", borderRadius: "2.5rem", marginTop: "1rem", marginRight: "1rem" }} alt="" />
                                <div >
                                    <p style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "0.2rem" }}>Amir Movafaghi</p>
                                    <p style={{}}>CEO @ Mixpanel</p>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Sagittis vitae et leo duis ut diamquam nulla porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit,  </p>
                            <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sagittis vitae et leo duis ut diam quam nulla  </p>
                            <p>porttitor. Suspendisse potenti nullam ac tortor vitae purus faucibus.Quam pellentesque nec nam aliquam sem. Purus  </p>
                            <p>gravida quis blandit turpis.Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur.</p>

                            <p style={{ marginTop: "3rem" }}>Erat pellentesque adipiscing commodo elit. Pulvinar etiam non quam lacus suspendisse faucibus. Odio pellentesque diam</p>
                            <p>volutpat commodo sed egestas. Morbi tristique senectus et netus et malesuada. Sapien pellentesque habitant morbi tristique</p>
                            <p>senectus et netus. Sem viverra aliquet eget sit. Vivamus at augue eget arcu dictum.</p>

                            <h2>What’s new in2023?</h2>

                            <p>Erat pellentesque adipiscing commodo elit. Pulvinar etiam non quam lacus suspendisse faucibus. Odio pellentesque diam</p>
                            <p>volutpat commodo sed egestas. Morbi tristique senectus et netus et malesuada. Sapien pellentesque habitant morbi tristique </p>
                            <p>Senectus et netus. Sem viverra aliquet eget sit. Vivamus at augue eget arcu dictum. </p>

                            <p style={{ marginTop: "3rem" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Sagittis vitae et leo duis ut diam quam nulla porttitor. Suspendisse potenti nullam ac tortor vitae purus faucibus.</p>
                            <p>Quam pellentesque nec nam aliquam sem. Purus gravida quis blandit turpis. Suspendisse faucibus interdum posuere</p>
                            <p>lorem ipsum dolor sit amet consectetur.</p>

                            <p style={{ marginTop: "3rem" }}>Erat pellentesque adipiscing commodo elit. Pulvinar etiam non quam lacus suspendisse faucibus. Odio pellentesque diam</p>
                            <p>volutpat commodo sed egestas. Morbi tristique senectus et netus et malesuada. Sapien pellentesque habitant morbi tristique</p>
                            <p>senectus et netus. Sem viverra aliquet eget sit. Vivamus at augue eget arcu dictum.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default BlogInfo;
