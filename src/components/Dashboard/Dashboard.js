import React, { Component } from "react";
import Product from "../Product/Product";

export default class Dashboard extends Component {
  render() {
      
    return this.props.inventory.map(el => {
    return <Product el={el}/>;
  })
}
}
