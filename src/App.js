import React, {Component} from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import Product from './components/Product/Product'

class App extends Component{
  constructor () {
    super ()
    this.state = {
      inventory: [{
        name: 'pants',
        price: 50,
        image: 'http://cdn.shopify.com/s/files/1/0266/4899/products/PassagePant_Moss_Flat_550x.jpg?v=1562884875'
      },
      {
        name: 'shirt',
        price: 30,
        image: 'https://bonobos-prod-s3.imgix.net/products/139033/original/Casual-Shirts_Short-Sleeve-Shirts_23759-MVB66_40_category-outfitter.jpg?1561584872=&auto=format%2Ccompress&fit=clip&ixlib=react-8.6.1&h=1&w=385'
      }
      ]
    }
  }
  render() {
    return (
      <div>
       <header> <Header /></header>
      <div className="App">
       <div className='dashboard'>
         <Dashboard inventory={this.state.inventory}>
         <Product inventory={this.state.inventory} />
         </Dashboard>
         </div> 
        <Form />
      </div>
      </div>
    );
  }
  }

export default App;
