import { Container, Row, Col, ListGroup } from 'react-bootstrap';



const RightPanel = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <ProfessionalExperience />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Education />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Courses />
                </Col>
            </Row>
        </Container>
    );
}

function ProfessionalExperience() {
    return (
        <>
            <h3><u>Professional Experiences</u></h3>
            <Container>
                <Row className='mt-4'>
                    <Col>
                        <h5>Software Engineer (Freelance), IT Club Oberland, Zürich</h5>
                        <ListGroup>
                            <ListGroup.Item>
                                ·	Education Management Project (Java, Spring, React)
                        </ListGroup.Item>
                            <ListGroup.Item>
                                ·	Unix Shell Scripting, Batch Processing and Log Analyze
                        </ListGroup.Item>
                            <ListGroup.Item>
                                ·	Agile methodology with understanding Scrum and Sprint
                        </ListGroup.Item>
                            <ListGroup.Item>
                                ·	Developed test automation scripts for Regression, Functional, Unit and Integration Test cases
                        </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                <Row className='my-3'>
                    <Col>
                        <h5>Software Engineer, Turkish State Railways, Turkey</h5>
                        <ListGroup>
                            <ListGroup.Item>
                                ·	The project of the first high speed train in Turkey in partnership with German Railways
                        </ListGroup.Item>
                            <ListGroup.Item>
                                ·	Digital transformation of Turkish State Railways (SAP – IBM AIX)
                        </ListGroup.Item>
                            <ListGroup.Item>
                                ·	Installing servers and client computers and training the staff
                        </ListGroup.Item>
                            <ListGroup.Item>
                                ·	Performing duties of installing, developing and optimizing the applications.
                        </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                <Row className='my-3'>
                    <Col>
                        <h5>Technician of Rolling Stocks, Turkish State Railways, Turkey</h5>
                        <ListGroup borderless>
                            <ListGroup.Item>
                                ·	Controlling and maintaining of the mechanical and electronic parts of locomotives and wagons
                        </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

const Education = () => {
    return (
        <>
            <h3><u>Education</u></h3>
            <Container>
                <Row>
                    <Col>
                        <h6>Master – DIGITAL SYSTEMS AND SERVICES </h6>
                        <p>University of Geneva, Switzerland – Ongoing</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>Master – PUBLIC ADMINISTRATION AND POLITICAL SCIENCES  </h6>
                        <p>Ahmet Yesevi Turkish-Kazak International University, Kazakhstan – 2017</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>Bachelor – COMPUTER ENGINEERING </h6>
                        <p>Selcuk University, Turkey – 2006</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>RAILWAY HIGH SCHOOL </h6>
                        <p>Turkey – 1998</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

const Courses = () => {
    return (
        <>
            <h3><u>Courses</u></h3>
            <Container>
                <Row>
                    <Col>
                        <h6>French language B2/C1 </h6>
                        <p>Ifage Genève – 2021 </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>Agile with Atlassian Jira </h6>
                        <p>Atlassian (Coursera) – 2020</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>The Unix Workbench </h6>
                        <p>Johns Hopkins University (Coursera) – 2020 </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>Visual Elements of User Interface Design</h6>
                        <p>Calarts California Institute (Coursera) – 2020 </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>Visual Programming C#.NET</h6>
                        <p>Gazi University, Ankara/Turkey– 2018 </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>Front-End Web UI Frameworks and Tools</h6>
                        <p>The Hong Kong University (Coursera) – 2018 </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>Programming Foundations with JavaScript, HTML and CSS</h6>
                        <p>Duke University, (Coursera) – 2017 </p>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default RightPanel;