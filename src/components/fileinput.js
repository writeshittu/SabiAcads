import React from "react";
import {Form,Button} from 'react-bootstrap'
class FileInput extends React.Component {
  // constructor(props) {
  //   super(props);
    
    // this.state = {value: ''};
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.fileInput = React.createRef();
  // }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Thank You`
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Course Name</Form.Label>
          <Form.Control type="text" placeholder="Course" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Course Title </Form.Label>
          <Form.Control type="text" placeholder="course title" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Course Decsription</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.File
            id="File"
            label="Upload File"
            custom
            
          />
        </Form.Group>
        <Button onClick={()=>this.handleSubmit} variant="primary" type="submit">
          Upload 
        </Button>
      </form>
    );
  }
}

export default FileInput;