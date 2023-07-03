import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/blog.scss"

function BlogInfo() {
    return (
        <>
            <div style={{ backgroundColor: "#F5F5F5" }}>
                <div style={{ marginBottom: "2rem" }}>
                    <NavBar />
                </div>

                <div className="grid">
                    <div className="col-1" />

                    <div className="col-10" style={{ paddingRight: "1.5rem" }}>
                        <div style={{ marginBottom: "1.5rem" }}>
                            <img className="col-12 md:col-6 lg:col-6" style={{ width: "100%" }} src="images/Market_AmirBlog_Header_1920x1080-1100x619.png.png" alt="bloginfo_image" />
                        </div>
                        <div className="grid">
                            <div className="col-1 social_logos">
                                <p><img src="images/Item ⏵ Link.png" alt="in" className="" /></p>
                                <p><img src="images/Item ⏵ Link (1).png" alt="fb" className="" /></p>
                                <p><img src="images/Item ⏵ Link (2).png" alt="twit" className="" /></p>
                            </div>
                            <div className="col-10" style={{ marginBottom: "4rem" }} >
                                <p className="inside_blog_text" >INSIDE BLOG</p>
                                <div>
                                    <p className="title">How Japan and France are changing the shoe making industry with their new...</p>
                                </div>
                                <p className="last_edited_txt" >Last edited: May 17, 2023</p>
                                <p className="published">Published: May 2, 2023</p>
                                <p className="paragraphs">Mi quis hendrerit dolor magna eget est lorem. Nulla facilisi nullam vehicula ipsum a</p>
                                <p className="paragraphs">  arcu cursus vitae. Vitae sapien pellentesque habitant morbi tristique senectus et netus..</p>
                                <p className="paragraphs">  Sed cras ornare arcu dui.vivamus arcu felis. Nibh tellus</p>
                                <p className="paragraphs"> molestie nunc non blandit massa enim.</p>
                                <div className="avatar-div">
                                    <img src="images/div.avatar.png" className="avatar" alt="" />
                                    <div className="avatar_txt">
                                        <span className="Amir_txt">Amir Movafaghi</span>
                                        <span className="CEO_txt">CEO @ Mixpanel</span>
                                    </div>
                                </div>
                                <p className="paragraphs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p className="paragraphs">Sagittis vitae et leo duis ut diamquam nulla porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit,  </p>
                                <p className="paragraphs">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sagittis vitae et leo duis ut diam quam nulla  </p>
                                <p className="paragraphs">porttitor. Suspendisse potenti nullam ac tortor vitae purus faucibus.Quam pellentesque nec nam aliquam sem. Purus  </p>
                                <p className="paragraphs">gravida quis blandit turpis.Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur.</p>

                                <p className="p-margins">Erat pellentesque adipiscing commodo elit. Pulvinar etiam non quam lacus suspendisse faucibus. Odio pellentesque diam</p>
                                <p className="paragraphs">volutpat commodo sed egestas. Morbi tristique senectus et netus et malesuada. Sapien pellentesque habitant morbi tristique</p>
                                <p className="paragraphs">senectus et netus. Sem viverra aliquet eget sit. Vivamus at augue eget arcu dictum.</p>

                                <h2 className="whats_new_txt">What’s new in2023?</h2>

                                <p className="paragraphs">Erat pellentesque adipiscing commodo elit. Pulvinar etiam non quam lacus suspendisse faucibus. Odio pellentesque diam</p>
                                <p className="paragraphs">volutpat commodo sed egestas. Morbi tristique senectus et netus et malesuada. Sapien pellentesque habitant morbi tristique </p>
                                <p className="paragraphs">Senectus et netus. Sem viverra aliquet eget sit. Vivamus at augue eget arcu dictum. </p>

                                <p className="p-margins" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p className="paragraphs">Sagittis vitae et leo duis ut diam quam nulla porttitor. Suspendisse potenti nullam ac tortor vitae purus faucibus.</p>
                                <p className="paragraphs">Quam pellentesque nec nam aliquam sem. Purus gravida quis blandit turpis. Suspendisse faucibus interdum posuere</p>
                                <p className="paragraphs">lorem ipsum dolor sit amet consectetur.</p>

                                <p className="p-margins" >Erat pellentesque adipiscing commodo elit. Pulvinar etiam non quam lacus suspendisse faucibus. Odio pellentesque diam</p>
                                <p className="paragraphs">volutpat commodo sed egestas. Morbi tristique senectus et netus et malesuada. Sapien pellentesque habitant morbi tristique</p>
                                <p className="paragraphs">senectus et netus. Sem viverra aliquet eget sit. Vivamus at augue eget arcu dictum.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-1" />
                </div>


            </div>
            <Footer />
        </>
    )
}

export default BlogInfo;
