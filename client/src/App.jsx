import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      address: '',
      file: null,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleFileChange = (e) => {
    this.setState({ file: e.target.files[0] });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('name', this.state.name);
    formData.append('password', this.state.password);
    formData.append('address', this.state.address);
    formData.append('file', this.state.file);

    try {
      const response = await axios.post('http://localhost:3000/user', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data); 
    } catch (error) {
      console.error('Error:', error);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>User Registration</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Address:</label>
            <textarea
              name="address"
              value={this.state.address}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Upload File:</label>
            <input
              type="file"
              name="file"
              accept=".jpg, .jpeg, .png"
              onChange={this.handleFileChange}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default App;
