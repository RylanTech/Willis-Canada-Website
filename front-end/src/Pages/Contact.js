import { Container, Row } from "react-bootstrap"
import Footer from "../Components/Footer"
import NavigationBar from "../Components/NavigationBar"

function Contact() {
    return (
        <>
            <NavigationBar />
            <Container>
                <Row>
                    <center>
                        <div className="eventHeaderOver">
                            <h2 className="eventHeader">
                                Contact
                            </h2>
                        </div>
                    </center>
                    <div className="col-xl-2" />
                    <div className="OverContactInfo col-12 col-xl-8">
                        <div className="contactInfo">
                            <p>
                                Booking Information <br /><br />
                                Thank you for your interest in the ministry of Willis Canada. Whether you are considering Willis Canada for an upcoming event, or if you've already booked Willis and are needing to download/print promotional materials, this is the page for you! For additional assistance or if you would rather receive printed copies by mail of any of the following documents, please don't hesitate to contact us at:
                            </p>
                            <Row>
                                <div className="col-6">
                                    <b>Willis Canada Music Ministry</b><br />
                                    P.O. Box 25182<br />
                                    Richmond, VA 23260<br />
                                    Phone/Fax (804)-740-4048
                                </div>
                                <div className="col-6">
                                    <b>All other inquiries</b><br />
                                    Please email Willis at: <a href="mailto:willisc@mindspring.com">willisc@mindspring.com</a>
                                </div>
                            </Row>
                            <br /><br />
                            Publicity Image and Poster
                            In order to download my publicity images, right click the link with your mouse and select SAVE AS or SAVE TARGET AS, to save the image to your Hard Drive. You will be able to use these images to help promote your event. If you do not have the Adobe Acrobat Reader, get it here...
                            <br /><br />
                            <Row>
                                <div className="col-4">
                                    <center>
                                    <a href="Photos/willisheadshot.jpg">
                                        <img className="willisHeadShot" src="Photos/willisheadshot.jpg" /><br/>
                                        8" X 10" Photo
                                    </a>
                                    </center>
                                </div>
                                <div className="col-4"/>
                                <div className="col-4">
                                    <center>
                                    <a href="PDFs/willispdf.pdf">
                                        <img className="flyer" src="Photos/small_pdf.jpg" /><br/>
                                        PDF Event Poster
                                    </a>
                                    </center>
                                </div>
                            </Row>
                        </div>
                    </div>
                    <div className="col-xl-2" />
                </Row>
            </Container>
            <Footer />
        </>
    )
}
export default Contact