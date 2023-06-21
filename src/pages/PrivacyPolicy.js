import React from "react";
import Footer from "../components/Footer";
import "../styles/privacyPolicy.scss";
import NavBar from "../components/NavBar";

function PrivacyPolicy() {
    return (
        <>
            <div className="main_div">
                <NavBar />

                <div className="second_div">
                    <h1 className="privacy_h1">Privacy Policy</h1>
                    <p className="privacy_lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>

            <div className="p_main_div">
                <p className="privacy_p">Privacy Policy</p>
                <div >
                    <p> This Cookies Policy is an integral part of the Data Protection Policy of  FUTBOL , as the Data Controller. Access and navigation on</p>
                    <p>the website or the use of its services imply acceptance of our Data Protection Policy and Cookies Policy.</p>
                    <p className="first_ps">In any case, we inform you that  FUTBOL  is responsible for the cookies and the treatment of the data obtained through third-party</p>
                    <p>cookies,deciding on the purpose, content and use of the treatment in relation to the information collected.</p>
                </div>
                <div className="paragraph_div">
                    <p className="definition_text">1. DEFINITION AND FUNCTION OF COOKIES</p>
                    <div className="definition_text2_p">
                        <p className="definition_text2">What are cookies?</p> <p>Cookies are small files that are stored on the device you use to browse the Internet and that can save information </p>
                    </div>
                    <p> regarding the frequency that you most interested. This allows us, each time you access www.FootballHouseUK.com,</p>
                    <p> to improve the quality and use of our website. The set of "cookies" helps us to improve the quality of our website, allowing</p>
                    <p> us to control which pages our users find useful and which they do not.</p>
                    <p className="first_ps"> Cookies are essential for the Internet to function; they cannot damage the user's equipment/device and, if they are activated </p>
                    <p> in the browser settings,  they help us to identify and resolve possible errors in the operation of our website.</p>
                    <p>Cookies provide innumerable advantages in the provision of interactive services, facilitating the navigation and use of our website.</p>
                    <p className="first_ps">The information we provide below will help you understand the different types of cookies:</p>

                    <p className="first_ps">Types of cookies according to the entity that manages them</p>
                    <p >Depending on who is the entity that manages the computer or domain from which the cookies are sent and processes the data</p>
                    <p> obtained, we can distinguish:</p>

                    <p className="first_ps">-Own Cookies: These are those that are sent to the user's terminal equipment from a computer or domain managed by the editor itself</p>
                    <p>and from which the service requested by the user is provided.</p>

                    <p className="first_ps">- Third-party cookies: These are those that are sent to the user's terminal equipment from a computer or domain that is not managed </p>
                    <p>by the publisher, but by another entity that processes the data obtained through cookies.</p>

                    <p className="first_ps">Types of cookies according to the period of time they remain activated</p>
                    <p> According to the period of time that they remain activated in the terminal equipment, we can distinguish:</p>

                    <p className="first_ps">-Session Cookies: They are a type of cookies designed to collect and store data while the user accesses the website.</p>

                    <p className="first_ps">They are usually used to store information that is only interesting to keep for the provision of the service requested </p>
                    <p>by the user on a single occasion (for example: a list of products purchased).</p>

                    <p className="first_ps">-Persistent cookies: They are a type of cookie in which the data is still stored in the terminal and can be accessed</p>
                    <p>and processed for a period defined by the person responsible for the cookie, and which can range from a few minutes to several years.</p>

                    <p className="first_ps"> Types of cookies according to their purpose</p>
                    <p> Depending on the purpose for which the data obtained through cookies are processed, we can distinguish between</p>

                    <p className="first_ps">-Technical cookies: These are those that allow the user to navigate through the web page, platform or application and use the different </p>
                    <p>options or services that exist in it, such as, for example, controlling traffic and data communication, identifying the session, access restricted </p>
                    <p>parts, remember the elements that makeup an order, carry out the purchase process of an order, make the request for registration </p>
                    <p> access or participation in an event, use security elements during navigation, store content for broadcasting videos</p>
                    <p>or sound or sharing content through social networks.</p>

                    <p className="first_ps">-Personalization cookies: These are those that allow the user to access the service with some predefined general characteristics</p>
                    <p> based on a series of criteria in the user's terminal, such as, for example, the language, the type of browser through which you </p>
                    <p>access to the service, the locale from where you access the service.</p>

                    <p className="first_ps">-Analysis cookies: These are those that allow the person responsible for them to monitor and analyze the behavior</p>
                    <p>of the users of the websites to which they are linked. The information collected through this type of cookie is used</p>
                    <p> to measure the activity of the websites, applications or platforms and to create browsing profiles of the users of said sites, applications </p>
                    <p>and platforms, in order to introduce improvements in function of the analysis of the usage data made by the users of the service.</p>

                    <p className="first_ps">-Advertising cookies: These are those that allow the management, in the most efficient way possible, of the advertising</p>
                    <p>spaces that, where appropriate, the editor has included in the web page, application or platform from which the requested</p>
                    <p>service is provided based on criteria such as edited content or how often ads are shown.</p>

                    <p className="first_link" >http://www.google.com/policies/technologies/types/</p>
                    <p className="second_link">https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage#adanalytics</p>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default PrivacyPolicy;