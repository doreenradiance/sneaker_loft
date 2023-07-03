import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "../styles/women_men.scss"

function Men() {

    const renderMen = (
        <div className="grid  renderMen_div">
            <div className="col-12 md-col-6 lg:col-6" >
                <h1 className="h1">Men Category</h1>
                <div className="grid div1" >
                    <div className="col-12 md:col-6 lg:col-10" style={{ padding: "0" }}>
                        <p className="most_popular_txt">Most popular</p>
                        <p className="most_viewed"> See most viewed shoes</p>
                    </div>
                    <div className="col-12 md:col-6 lg:col-2 icon_div" >
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>

                <div className="div2" >
                    <p className="new_arrival_txt">New Arrival</p>
                    <p className="latest_arrival_txt">Latest arrival of our shoe collection</p>
                </div>
                <div className="div3">
                    <span className="view_all_txt">View All</span>
                    <p className="see_all_txt">See all men shoes</p>
                </div>
            </div>
            <div className="col-12 md-col-6 lg:col-6 " style={{ marginTop: "2rem" }}>
                <div className="grid">
                    <div className="col-12 md-col-6 lg:col-6 ">
                        <img className="images_men_women" src="images/Rectangle 22.png" alt="men" />
                    </div>
                    <div className="col-12 md-col-6 lg:col-6 ">
                        <img className="images_men_women" src="images/shoe_info_main.png" alt="men" />
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div >
            {renderMen}
        </div>
    )
}

export default Men;