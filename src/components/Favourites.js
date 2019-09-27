import React from 'react'
import App from '../App'

class Favourites extends React.Component {
    constructor(props) {
        super(props)
    }

         remove = (id) => {
             this.setState({
                 pleaseUpdate: id,
             })
            this.drinks.forEach((drink, index) => {
                if(id === drink.id) {
                      this.drinks.splice(index, 1);
                } 
            } );
            localStorage.setItem('drinks', JSON.stringify(this.drinks) );
            console.log('please!')
        }

       

 drinks = JSON.parse(localStorage.getItem('drinks'))

        render (){
    return (
        <div>
            <h1>Favourites</h1>
            
                {this.drinks ? this.drinks.map(drink => (
            <div key={drink.id}> 
                <p>{drink.name}</p>
                <button className="remove-btn" onClick={() => this.remove(drink.id)}>X</button>
                <img className="fav-img" src={drink.image} alt=""/>
            </div>
                )) : ''}
            <p>{this.props.id}</p>
            </div>
        
        )
    }
}

export default Favourites;