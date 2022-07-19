import React, { Component } from 'react';
import axios from 'axios';
import { Progress } from 'reactstrap';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class FilesUploadComponent extends Component {
  constructor(props) {
    super(props);

    this.onFileChange = this.onFileChange.bind(this);

    this.onNameChange = this.onNameChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      image: '',
      Name: '',
      selectFile: null,
      Text:'',
      loaded: 0,
    };
  }

  onFileChange(e) {
    this.setState({ image: e.target.files[0] });

    //this.setState({ gestureName: e.target.gestureName });
    //console.log(e.target.gestureName);
  }
  onNameChange(e) {
    this.setState({ Name: e.target.value });
    console.log(e.target.value);
    //console.log('The link was clicked.');
  }
  onTextChange(e) {
    this.setState({ Text: e.target.value });
    console.log(e.target.value);
    //console.log('The link was clicked.');
  }


  onSubmit(e) {
    e.preventDefault();

    let formData = new FormData();
    console.log('type: ', typeof this.state.video);
    formData.append('image', this.state.image, this.state.image.name);
    formData.append('Name', this.state.Name);
    formData.append('Text', this.state.Text);
    console.log('state: ', this.state);
    axios
      .post('http://localhost:5000/api/upload', formData, {
        onUploadProgress: (ProgressEvent) => {
          this.setState({
            loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100,
          });
        },
      })
      .then((res) => {
        console.log(res);
        toast.success(
          'Uploaded successfully! Your Blog is uploaded! '
        );
      });
  }

  render() {
    return (
      <div class='containerpk'>
      <div class="row">
   
      <div className='profile-header'>
       
        
      </div>
      </div>
      <div className='container mt-4'>
       
        <h4 className='display-4 text-centre mb-4'>
          <i className='fas fa-upload'></i>
          Upload a Blog
        </h4>
        <form onSubmit={this.onSubmit}>
          <div class='form-group'>
            <ToastContainer />
          </div>
          <div className='form-group'>
            <input
              type='value'
              className='form-control'
              placeholder='Blog Name'
              //value={this.state.gestureName}
              onChange={this.onNameChange}
            />
          </div>
          <div className='custom-file'>
       

            <input
              type='file'
              id='image'
               className='custom-file-input'
              name='image'
              onChange={(e) => this.onFileChange(e)}
            />
            <label className='custom-file-label' for='customFile'>
              Choose image
            </label>
          </div>

          <div class='form-group'>
            {' '}
            <p> </p>
            <Progress max='100' color='success' value={this.state.loaded}>
              {Math.round(this.state.loaded, 2)}%
            </Progress>
          </div>
          <div className='form-group'>
          <textarea
              
              className='form-control'
              placeholder='Write your Blog.......'
               value={this.state.Text}
               onChange={this.onTextChange}
            />
          </div>
          
          <div className='form-group'>
            <button className='btn btn-primary' type='submit'>
              Upload
            </button>
            <Link className='btn btn-light my-1' to='/dashboard'>
              Go Back
            </Link>
          </div>
        </form>
      </div>
      </div>
    );
  }
}