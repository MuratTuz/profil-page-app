import { Container, Row, Col, Image, Table } from 'react-bootstrap';
import imgUrl from '../image/profil-photo.jpg';
import '../App.css';


const LeftPanel = () => {
    return (
        <Container className='bg-info'>
            <Row>
                <Photo />
            </Row>
            <Row>
                <Summary />
            </Row>
            <Row>
                <Skills />
            </Row>
            <Row>
                <Languages />
            </Row>
        </Container>
    )
}


function Photo() {
    return (
        <Col variant='primary' className='my-3'>
            <Image className='Image-size' src={imgUrl} roundedCircle alt='Image cannot be shown' />
        </Col>
    )

}

const Summary = () => {
    return (
        <Col>
            <h3>
                Murat TUZLALI
            </h3>
            <p>19.08.1982</p>
            <p>Software development leader with a 10+ years history of
            transforming business initiatives into successful software
            implementation plans and projects. Strong engineering professional
                with a Master of Computer Applications focused on Computer Science. </p>
        </Col>
    )

}


const Skills = () => {
    return (
        <Col className='mt-3'>
            <Container>
                <Row>
                    <Col>
                        <p><i><u>Languages :</u></i></p>
                    </Col>
                    <Col>
                        <p>Java, Python, C#, C, Scala, JavaScript, TypeScript, jQuery, HTML, CSS</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p><i><u>Operating System :</u></i></p>
                    </Col>
                    <Col>
                        <p>Windows, Linux, MacOS, IBM AIX</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p><i><u>Web :</u></i></p>
                    </Col>
                    <Col>
                        <p>React, Angular, Node.js</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p><i><u>Databases :</u></i></p>
                    </Col>
                    <Col>
                        <p>MS SQL Server, Oracle, MySQL, MS Access, PostgreSQL, MongoDB, Hibernate</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p><i><u>IDE :</u></i></p>
                    </Col>
                    <Col>
                        <p>Visual Studio, IntelliJ, PyCharm, Brackets, Eclipse, Anaconda</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p><i><u>Soft Skills :</u></i></p>
                    </Col>
                    <Col>
                        <p>Communication with different cultures, harmonious, team player,
                    test-driven-development, Scrum-Agile, problem-solving, fast-learning</p>
                    </Col>
                </Row>
            </Container>
        </Col>
    )

}
const Languages = () => {
    return (
        <Col className='mt-5'>
            <Table borderless>
                <tbody>
                    <tr>
                        <td><i>English</i></td>
                        <td>(Advanced)</td>
                    </tr>
                    <tr>
                        <td><i>French</i></td>
                        <td>(Intermediate)</td>
                    </tr>
                    <tr>
                        <td><i>German</i></td>
                        <td>(Elementary)</td>
                    </tr>
                    <tr>
                        <td><i>Turkish</i></td>
                        <td>(Native)</td>
                    </tr>

                </tbody>
            </Table>
        </Col >
    )
}



export default LeftPanel;