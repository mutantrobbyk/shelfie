import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: "",
      image: ""
    };
  }
  handleChange(e) {
    this.setState({
      [e.target.placeholder]: e.target.value
    });
  }
  submitItem(body) {
    axios.post("/api/product", body).then(res => {
      this.setState({
        inventory: res.data
      });
    });
  }
  render() {
    return (
      <div>
        <div className="form">
          <img
            className="formimage"
            src="https://i0.wp.com/www.littlebitesofbeauty.com/wp-content/uploads/2015/06/default-placeholder.png?resize=1170%2C658&ssl=1"
            alt=""
          />
          <form onSubmit={e => e.preventDefault()}>
            <p>Image URL:</p>
            <input
              onChange={e => this.handleChange(e)}
              type="text"
              placeholder="image"
              value={this.state.image}
            />
            <p>Product Name:</p>
            <input
              onChange={e => this.handleChange(e)}
              type="text"
              placeholder="name"
              value={this.state.name}
            />
            <p>Price:</p>
            <input
              onChange={e => this.handleChange(e)}
              type="text"
              placeholder="price"
              value={this.state.price}
            />
            <div>
              <button onClick={this.cancel}>Cancel</button>
              <button
                onClick={() => {
                  this.submitItem(this.state)
                  this.props.getThings()
                  this.setState({
                    name: "",
                    price: "",
                    image: ""
                  });
                }}
              >
                Add to Inventory
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

//   cancel = () => {
//       this.setState({
//         name: "",
//         price: "",
//         imgurl: ""
//       })
//   }
