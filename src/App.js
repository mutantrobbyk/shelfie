import React, {Component} from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import axios from 'axios'
class App extends Component{
  constructor () {
    super ()
    this.state = {
      inventory: [],
    }
    this.getThings = this.getThings.bind(this)
  }
  componentDidMount() {
    this.getThings()
  }
  getThings() {
    axios.get('/api/inventory').then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }
  render() {
    return (
      <div>
       <header> <Header /></header>
      <div className="App">
       <div>
         <Dashboard inventory={this.state.inventory}/>
         </div> 
        <Form getThings={this.getThings}/>
      </div>
      </div>
    );
  }
  }

export default App;
