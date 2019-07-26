import React, { Component } from "react";

export default class Product extends Component {
  render() {
        const {el} = this.props
      return (
        <div className='dashboard'>
          <img className="realimage" src={el.image} alt="" />
          <div>
          <p>{el.name}</p>
          <p>${el.price}</p>
          </div>
        </div>
      );
  }
}
