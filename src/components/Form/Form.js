import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: "",
      imgurl: ""
    };
  }
  handleChange(e) {
    this.setState({
      [e.target.placeholder]: e.target.value
    });
  }
//   cancel = () => {
//       this.setState({
//         name: "",
//         price: "",
//         imgurl: ""
//       })
//   }
//   submitItem () {
//     axios.post("/api/items", {item_name, last_seen_location, last_seen_time}).then ( res => {
//         this.setState({
//           items: res.data
//         })
//       });
//   }
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
              placeholder="imgurl"
            />
            <p>Product Name:</p>
            <input
              onChange={e => this.handleChange(e)}
              type="text"
              placeholder="name"
            />
            <p>Price:</p>
            <input
              onChange={e => this.handleChange(e)}
              type="text"
              placeholder="price"
            />
            <div>
              <button onClick={this.cancel}>Cancel</button>
              <button onClick={this.submitItem}>Add to Inventory</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
