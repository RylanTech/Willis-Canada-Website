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
                        Email: email@email.com<br />
                        or call {`(111)`}-111-1111
                    </div>
                </Row>
            </Container>
        </>
    )
}
export default Footer