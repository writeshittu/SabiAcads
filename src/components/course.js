import React from "react";
import StarBar from './courseRating';
import Card from 'react-bootstrap/Card';
import { Modal, Button } from "react-bootstrap";

class Cards extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            modalTitle : "",
            url : ""
        };

    }

    setModalHide = () => {
        this.setState({ modalShow: false, modalTitle : "", url : "" })
    }

    setModalShow = (title, url) => {
        this.setState({ modalShow: true, modalTitle : title, url : url })
    }

    render() {
        return (
            <div>
                <Card >
                    <Card.Img variant="top" src={this.props.image} height={200} onClick={() => this.setModalShow(this.props.title, this.props.links[0].url)} />
                    <Card.Body >
                        {/* <Card.Title></Card.Title> */}
                        <Card.Text>
                            {this.props.title}
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        <StarBar />
                    </Card.Footer>
                </Card>

                <Modal
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state.modalShow}
                    onHide={() => this.setModalHide(false)}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {this.state.modalTitle}
        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div class="embed-responsive embed-responsive-21by9">
                        <iframe src={this.state.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => { this.setState({ modalShow: false }) }}>Close</Button>
                    </Modal.Footer>
                </Modal>


            </div>
        )
    }
}

class Courses extends React.Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row tc">
                        {
                            this.props.data.map(data =>
                                <div className="col-sm-3">
                                    <Cards title={data.name} description={data.description} links={data.links} image={data.image} />
                                </div>
                            )
                        }

                        {/* <div className="col-sm-3">
                            <Cards/>
                        </div>
                        <div className="col-sm-3">
                            <Cards/>
                        </div>
                        <div className="col-sm-3">
                            <Cards/>
                        </div> */}

                    </div>

                </div>
            </div>
        )
    }
}
export default Courses;