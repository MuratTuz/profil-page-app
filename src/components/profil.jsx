import { Container, Row, Col } from 'react-bootstrap';

import LeftPanel from './leftPanel';
import RightPanel from './rightPanel';


const Profil = () => {
    return (
        <Container>
            <Row>
                <Col md='5'>
                    <LeftPanel />
                </Col>
                <Col md='7'>
                    <RightPanel />
                </Col>
            </Row>
        </Container>
    )
}

export default Profil;