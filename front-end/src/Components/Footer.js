import { Container, Row } from "react-bootstrap"

function Footer() {
    return (
        <>
            <Container>
                <Row>
                    <div className='footerR'>
                        Website made by Rylan Workman
                    </div>
                    <div className='footerL'>
                        Email: willisc@mindspring.com<br />
                        or call (804)-740-4048
                    </div>
                </Row>
            </Container>
        </>
    )
}
export default Footer