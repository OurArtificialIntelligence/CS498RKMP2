import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import axios from 'axios'
import styles from './Home.scss'
import Home from './Home.jsx'

class Search extends Component {
	constructor(props) {
    super(props);
		this.state = {
    	value: 0,
			pokemon_type: [],
			type: [],
			result: {},
		};
		this.all_url = "http://pokeapi.salestock.net/api/v2/pokemon?limit=1000";
		this.type_url = "http://pokeapi.salestock.net/api/v2/type/";
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSubmit2 = this.handleSubmit2.bind(this);
		this.handleSubmit3 = this.handleSubmit3.bind(this);
		this.handleSubmit4 = this.handleSubmit4.bind(this);
		this.handleSubmit5 = this.handleSubmit5.bind(this);
		this.handleSubmit6 = this.handleSubmit6.bind(this);
  }

	pokemon_get(poke_url){
		let url = poke_url;
  	// axios.get(url).then(res => {
		// 	let table = res.data;
		// 	console.log("get");
		// 	console.dir(table);
    // });
		let url_str = url.replace("http://pokeapi.salestock.net/api/v2/pokemon/", "").replace("/", "");
		let pic_url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + url_str.toString() + ".png";
		return pic_url;
	}

	pokemon_getnum(poke_url){
		let url = poke_url;
  	// axios.get(url).then(res => {
		// 	let table = res.data;
		// 	console.log("get");
		// 	console.dir(table);
    // });
		let url_str = url.replace("http://pokeapi.salestock.net/api/v2/pokemon/", "").replace("/", "");
		return url_str;
	}

	handleSubmit(event){
		event.preventDefault();
		this.setState({value: 1,});
		let url = this.state.type[0].url;
		axios.get(url).then(res => {
			let table = res.data;
			this.setState({
				result: table.pokemon.map(function(x) {
					var poke = {url: x.pokemon.url, name: x.pokemon.name};
   				return poke;
				}),
			});
    });
		console.log("value is: " + this.state.value);
	}

	handleSubmit2(event){
		event.preventDefault();
		this.setState({value: 2,});
		let url = this.state.type[1].url;
		axios.get(url).then(res => {
			let table = res.data;
			this.setState({
				result: table.pokemon.map(function(x) {
					var poke = {url: x.pokemon.url, name: x.pokemon.name};
   				return poke;
				}),
			});
    });
		console.log("value is: " + this.state.value);
	}

	handleSubmit3(event){
		event.preventDefault();
		this.setState({value: 3,});
		let url = this.state.type[2].url;
		axios.get(url).then(res => {
			let table = res.data;
			this.setState({
				result: table.pokemon.map(function(x) {
					var poke = {url: x.pokemon.url, name: x.pokemon.name};
   				return poke;
				}),
			});
    });
		console.log("value is: " + this.state.value);
	}

	handleSubmit4(event){
		event.preventDefault();
		this.setState({value: 4,});
		let url = this.state.type[3].url;
		axios.get(url).then(res => {
			let table = res.data;
			this.setState({
				result: table.pokemon.map(function(x) {
					var poke = {url: x.pokemon.url, name: x.pokemon.name};
   				return poke;
				}),
			});
    });
		console.log("value is: " + this.state.value);
	}

	handleSubmit5(event){
		event.preventDefault();
		this.setState({value: 5,});
		let url = this.state.type[4].url;
		axios.get(url).then(res => {
			let table = res.data;
			this.setState({
				result: table.pokemon.map(function(x) {
					var poke = {url: x.pokemon.url, name: x.pokemon.name};
   				return poke;
				}),
			});
    });
		console.log("value is: " + this.state.value);
	}

	handleSubmit6(event){
		event.preventDefault();
		this.setState({value: 0,});
	}

	componentWillMount() {
		let url = this.all_url;
  	axios.get(url).then(res => {
			let table = res.data;
			this.setState({
				pokemon_type: table.results
			});
    });
		axios.get(this.type_url).then(res => {
			let table = res.data;
			this.setState({
				type: table.results
			});
			console.log("type??");
			console.dir(this.state.type);
    });
	}

  render() {
		const listItems = this.state.value == 0 ? this.state.pokemon_type.map((number) =>
				<div className="search">
				  <li><Link to={'/Detail/'+ this.pokemon_getnum(number.url)}>{number.name}</Link></li>
					<img src={this.pokemon_get(number.url)} alt="NO AVALIBLE"/>
				</div>
			) :
			this.state.result.map((number) =>
				<div className="search">
				  <li><Link to={'/Detail/'+ this.pokemon_getnum(number.url)}>{number.name}</Link></li>
					<img src={this.pokemon_get(number.url)} alt="NO AVALIBLE"/>
				</div>
			);
		console.dir(listItems);

    return(
			<div className="gallery">
				<div className="ButtonG">
						<Button inverted color='red' id="inputb" onClick ={this.handleSubmit6} name='a'>All</Button>
						<Button inverted color='red' id="inputb" onClick ={this.handleSubmit} name='b'>Normal</Button>
						<Button inverted color='red' id="inputb" onClick ={this.handleSubmit2} name='c'>Fighting</Button>
						<Button inverted color='red' id="inputb" onClick ={this.handleSubmit3} name='d'>Flying</Button>
						<Button inverted color='red' id="inputb" onClick ={this.handleSubmit4} name='e'>Poison</Button>
						<Button inverted color='red' id="inputb" onClick ={this.handleSubmit5} name='f'>Ground</Button>
				</div>
				<ul>
					{listItems}
				</ul>
			</div>
    );
  }
}


export default Search
