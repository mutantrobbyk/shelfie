import React, {Component} from 'react'

export default class Product extends Component {
    render () {
        return(
            this.props.inventory.map((el) => { 
                return(
       <div>
            <img className='realimage' src={el.image} alt=""/>
        </div>

          
                )

            }
        ))
        )
    }
}
       
       
       
       