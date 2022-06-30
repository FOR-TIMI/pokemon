import React, { Component } from 'react'
import PokeCard from './PokeCard';
import './PokeGame.css'

function randomPokemonArr (pokemon,num = 4){
    const randomPokemonArray = []
    for(let i = 0; i < num; i++){
        randomPokemonArray.push(pokemon[Math.floor(Math.random() * pokemon.length)])
    }
    return randomPokemonArray;
}

class PokeGame extends Component{
    static defaultProps = {
        pokemon : [
        {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
        {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
        {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
        {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
        {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
        {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
        {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
        {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
      
    ]};

    render(){
        const {pokemon} = this.props;
        const hand1 = randomPokemonArr(pokemon);
        const hand1Exp = hand1.reduce((acc,curr) => { acc += curr.base_experience; return acc},0)

        //Second Hand
        const hand2 = randomPokemonArr(pokemon);
        const hand2Exp = hand2.reduce((acc,curr) => { acc += curr.base_experience; return acc},0)
         let msg;
         if(hand1Exp > hand2Exp){
            msg = <p className='PokemonGame-alert'>The first Hand wins with a total of {hand1Exp} exp</p>
         }
         else{
            msg = <p className='PokemonGame-alert'>The second hand wins with a total of {hand2Exp} exp</p>

         }
        return (
            <div className='PokeGame'>
            <h1>Poke Game</h1>
             {msg}
            
              {hand1Exp > hand2Exp ? 
              <h1 className='PokeGame-winner'>Winning Hand</h1> : <h1 className='PokeGame-looser'>Losing Hand</h1>}
              <h3>Total Experience: {hand1Exp}</h3>
              <div className='PokeGame-cards'>
              {
              hand1.map((p) => (
                    <PokeCard id = {p.id} name={p.name} type={p.type} exp={p.base_experience}/>
                    ))}
            </div>

            
              
              {hand2Exp > hand1Exp ? 
              <h1 className='PokeGame-winner'>Winning Hand</h1> : <h1 className='PokeGame-looser'>Losing Hand</h1>}
              <h3>Total Experience: {hand2Exp}</h3>
              <div className='PokeGame-cards'>
              
             {
                hand2.map((p) => (
                      <PokeCard id = {p.id} name={p.name} type={p.type} exp={p.base_experience}/>
                      ))}
            </div>
        </div>
        )
    }
}

export default PokeGame