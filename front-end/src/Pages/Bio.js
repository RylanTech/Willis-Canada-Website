import { Container, Row } from "react-bootstrap"
import NavigationBar from "../Components/NavigationBar"
import Footer from "../Components/Footer"

function Bio() {
    return (
        <>
            <NavigationBar />
            <Container>
                <Row className="infoCard">
                    <div className="bioRow">
                        <Row>
                            <img className="col-12 col-md-4 willisCanadaBioImg" src="https://cress.gigsalad.com/s3/w/willis_canada_orlando/57977c93799b8_480_sq" />
                            <div className="col-12 col-md-8">
                                <p className="bioHeading">Biography</p>
                                <br/>
                                <p>
                                Willis Canada has traveled for over 25 years spreading the love of Jesus Christ through Southern Gospel Music. He is the recipient of many prestigious honors and awards: TWO HONORARY DOCTORATE DEGREES (DIVINITY AND OF SACRED MUSIC), WHO'S WHO IN SOUTHERN GOSPEL MUSIC, 1996 Commissioned Colonel for the States of Kentucky and Georgia, an Honorary Alabama Colonel, a Colonel, Aide-de-Camp from the Governor of New Mexico, Certificate of Special Commendation from the Governor of Virginia, an Ambassador of Goodwill Award from the states of Arkansas, Mississippi, and Florida, and honorary citizen of the states of Oklahoma and Lousiana.
                                <br/><br/>
                                Willis has apppeared on the Trinity Broadcasting Network ("Love Special" hosted by NANCY HARMON), He has appeared on The Gary McSpadden Gospel Hour from Branson, Missouri and on the hit show Swann's Place. He has also appeared with Dr. Pat Robertson CBN Regent University Performing Arts Center, Virginia Beach, Virginia. His tenor voice and warm personality have shared the stage with the CATHEDRALS, the McGRUDERS, GOLD CITY, the GREENES, JOHN STARNES, SHIRLEY CAESAR,LULU ROMAN, THE LATE DONNA DOUGLAS (ELLA MAY CLAPTON) and KAREN WHEATON, to name a few. He has also been a musical guest onboard the Cruise Ship Carnival and the Royal Caribean.  Audiences have been tremendously blessed by his originality in delivering the message in song.
                                <br/><br/>
                                Willis believes that he has been called to take God's message to all who will listen. He feels it is expedient to tell the non-Christian of God's love and saving power, and to tell the body of Christ that we can be "Sealed to the Day Redemption."
                                <br/><br/>
                                Willis has ministered to many denominational and non-denominational churches, plus crusades, campmeetings, concerts, and social meetings.
                                <br/><br/>
                                Latest Project
                                Willis' latest single "ON SOME ORDINARY DAY"  is receiving  very positive response via  radio airplay. His music is also being played on XM Satelite Radio and The Radio Gold Popular Network in Carpento Al Italy
 
                                </p>
                           </div>
                        </Row>
                    </div>
                </Row>
            </Container>
            <Footer/>

        </>
    )
}
export default Bio