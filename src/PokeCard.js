
import React, { Component } from 'react';
import './PokeCard.css'

// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png'
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/{id}.png'

class PokeCard extends Component{
    render(){
        const {name, id,type,  exp  } = this.props;
        const paddId = n => n < 10 ? String( '00' + n) : n < 100 ?  String('0' +  n ) : String(n);
        return (
            <div className='PokeCard'>
               <h1 className='PokeCard-title'>{name}</h1>
               <img className='PokeCard-img' src={POKE_API.replace(/{id}/, paddId(id))} alt={this.props.name}/>
               <div className='PokeCard-data'>Type: {type}</div>
               <div className='PokeCard-data'>EXP: {exp}</div>
            </div>
         
        )
    }
}


export default PokeCard;