import React from "react";
import Footer from "../components/Footer";

function LinkSuccess() {
    return (
        <div style={{ backgroundColor: "#F5F5F5"}}>
            <button style={{margin:"4rem",
                border: "none", top: "41px", background: "#F3DF77", width: "168px", height: "56.662px",
                flexShrink: "0", borderRadius: "32.805px", fontWeight: "bold", fontSize: "17.121px"
            }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                    <i className="pi pi-reddit" style={{ color: "white", fontSize: "20px" }} />
                    <div>Sneakerloft</div>
                </div>
            </button>
            <div style={{ textAlign: "center", width: "300px", height: "320px", margin: " 0 auto", backgroundColor: "white", color: "#000000", display: "flex", flexDirection: "column", marginBottom: "4rem" }}>
                <img src="./images/Frame 3983.png" alt="" style={{ height: "40px", width: "40px", alignSelf: "center", marginTop: "3rem" }} />
                <div style={{ marginTop: "1.5rem" }}>New password set sucessfully.</div>

                <button style={{ marginTop: "5rem", height: "3rem", width: "13rem", borderRadius: "0.2rem", color: "#F3DF77", backgroundColor: "#000000", alignSelf: "center" }}>Back To Login</button>
            </div>
            <Footer />
        </div>
    )
}
export default LinkSuccess;