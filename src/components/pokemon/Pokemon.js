import React, { Component } from 'react'
import axios from 'axios'

export default class Pokemon extends Component {
    
    state = {
        name: '',
        pokemonIndex: '',
        imageUrl: '',
        types: [],
        description: '',
        stats: {
            hp: '',
            attack: '',
            defense: '',
            speed: '',
            specialAttack: '',
            sepcialDefense: '',
        },
        height: '',
        weight: '',
        eggGroup: '',
        abilities: '',
        genderRatioMale: '',
        genderRatioFemale: '',
        evs: '',
        hatchSteps: ''
    }

    async componentDidMount() {
        const { pokemonIndex } = this.props.match.params;
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`;
        const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}`

        const pokemonRes = await axios.get(pokemonUrl);
        const name = pokemonRes.data.name;

        // this.setState({ name });
        const imageUrl = pokemonRes.data.sprites.front_default;
        let{ hp, attack, defense, speed, specialAttack, sepcialDefense } = '';
        
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}
