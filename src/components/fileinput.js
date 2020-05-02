import React from "react";
import { Form} from "react-bootstrap";
import axios from "axios";
import util from '../util/util'
import uuid from 'react-uuid'
class FileInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      uploading: false,
      invalidData:true
    };
    this.handleChange = this.handleChange.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
  }

  handleChange(event) {
    let nam = event.target.name;
    this.setState({
      [nam]: event.target.value
    })
  }

  async uploadFile(e) {
    e.preventDefault();
    let nam = e.target.value;
    if (nam === '') {
      alert(" input require field");
    }
      const uploadPreset = "h13wbqtf";
      const url = "https://api.cloudinary.com/v1_1/undercover/upload";
      let formData = new FormData();
      let file = this.imageUpload.files[0];
      // console.log(file.name); 
      formData.append("file", file);
      formData.append("upload_preset", uploadPreset);
      formData.append("tags", `uploaded by ${window.localStorage.getItem("name")}`);
      console.dir(formData);
      this.setState({ uploading: true });
      try {
        var res = await axios.post(url, formData);
        console.log("Successfully uploaded image", res);
        var imageUrl;
        var videoUrl;
        if (res.data !== undefined && res.data.url !== undefined) {
          console.log("About uploading video");

          imageUrl = res.data.url;
          formData = new FormData();
          let videoFile = this.videoUpload.files[0];
          formData.append("file", videoFile);
          formData.append("upload_preset", uploadPreset);
          formData.append("tags", `uploaded by ${window.localStorage.getItem("name")}`);
          res = await axios.post(url, formData);
          console.log("Successfully uploaded video", res);

          if (res.data !== undefined && res.data.url !== undefined) {
            console.log("About uploading course");

            videoUrl = res.data.url;
            let uuidString = uuid();
            console.log(uuidString)
            let course = {
              "name": this.state.name,
              "image": imageUrl,
              "description": this.state.description,
              "links": [
                {
                  "url": videoUrl,
                  "title": this.state.id
                }
              ]
            };
            axios.post(`${util.API_BASE_URL}courses`, course, { headers: { 'content-type': 'application/json' } })
              .then(res => {
                console.log("Response is ", res);
              }).catch(err => {
                console.error("Error occurred while uploading course to json server due to ", err)
              })

          }
        }


      } catch (err) {
        alert("Error occurred during file upload");
      }
      
    
    }

  render() {
    return (
      <Form onSubmit={this.uploadFile}>
        <Form.Group controlId="Form.ControlInput1">
          <Form.Label>Course Name</Form.Label>
          <Form.Control onChange={this.handleChange} name="name" type="text" placeholder="Course" />
        </Form.Group>
        <Form.Group controlId="Form.ControlInput2">
          <Form.Label>Course Title </Form.Label>
          <Form.Control onChange={this.handleChange} name="id" type="text" placeholder="course title" />
        </Form.Group>
        <Form.Group controlId="Form.ControlTextarea1">
          <Form.Label>Course Description</Form.Label>
          <Form.Control onChange={this.handleChange} name="description" as="textarea" rows="3" />
        </Form.Group>
        <Form.Group controlId="Form.ControlFile1">
        <Form.Label>Choose Video to Upload </Form.Label>
        
          <input type="file" name="file" label= "Choose Video to upload"
            id="videoFile"
            ref={
              file => (this.videoUpload = file)
            }
            custom
          />
        </Form.Group>
        <Form.Label>Choose Image to Upload </Form.Label>
          <input type="file" name="file"
            label= "Choose Image to upload"
            id="imageFile"
            ref={
              file => (this.imageUpload = file)
            }
            custom
          />
          <p id="filename"> </p>
        
        <input type='submit' variant="primary" className='btn btn-primary btn-sm' 
        value={!this.state.uploading ? 'Update  Course Content ' : 'Upload in progress'} 
        disabled={this.state.uploading && !(this.state.description)} />
        

      </Form>
    );
  }
}

export default FileInput;
