import Row from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import './Footer.css'
function footer(){
    return(
        <footer>
            <Container>
                <Row>
                    <Col>
                        <h2>رسالت کد نویسی</h2>
                        <p>میلکدکخقلعقثکخلعثقدلهقتیحلخثصضجثقلقهپللقلتدپقکدا</p>
                    </Col>
                    <Col style={{textAlign:'left'}}>
                        <img src="https://cdn.zarinpal.com/badges/trustLogo/1.png" alt="" />
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default footer