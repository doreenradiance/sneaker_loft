import React from "react";
import { Row, Col } from "reactstrap";


function Category() {


    <Row className="mb-4" style={{ display: "flex", flexDirection: "row" }}>
        <Col md="3" className="mb-2">
            <h1 style={{
                paddingLeft: "1.2rem", paddingTop: "2rem", fontSize: "40px", height: "29px", fontFamily: 'Nohemi', fontWeight: "600",
                color: "#000000"
            }}> Men's Category</h1>

            <div style={{ backgroundColor: "#FDF7F1", borderRadius: "0.2rem", width: "500px", height: "96px", marginRight: "3rem", marginLeft: "1rem", }}>
                <div>
                    <p
                        style={{ color: "#000000", width: "128px", paddingLeft: "0.5rem", paddingTop: "0.4rem", fontSize: "20px", fontStyle: "normal", fontWeight: "600", fontFamily: 'Nohemi', }}
                    >  Most popular
                    </p>
                </div>
                <p style={{ paddingLeft: "0.5rem", fontSize: "20px", color: "#b3b3b3" }}> See most viewed shoes</p>
                <div>
                    <i className="pi pi-arrow-right" />
                </div>
            </div>

            <div style={{ marginLeft: "1rem", }}>
                <p style={{ fontSize: "20px", fontWeight: "600", fontFamily: 'Nohemi', }}>New Arrival</p>
                <p style={{
                    color: "#b3b3b3", fontSize: "20px",
                }}>Latest arrival of our shoe collection</p>
            </div>
            <div style={{ marginLeft: "1rem", }}>
                <p style={{ fontSize: "20px", fontWeight: "600", fontFamily: 'Nohemi', }}>View All</p>
                <p style={{
                    color: "#b3b3b3", fontSize: "20px",
                }}>See all men's shoes</p>
            </div>
        </Col>
        <Col md="5" style={{ marginTop: "50px", }} className="mb-2">
            <img style={{ height: "310px", width: "310px", marginRight: "30px", }} src="images/maksim-larin-NOpsC3nWTzY-unsplash.jpg" alt="men" />
        </Col>
        <Col md="5" className="mb-2">
            <img style={{ height: "310px", width: "310px", marginTop: "50px", }} src="images/men.jpg" alt="men" />
        </Col>
    </Row>
}

export default Category;