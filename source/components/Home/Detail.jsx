import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import axios from 'axios'
import styles from './Home.scss'
import Home from './Home.jsx'
import PropTypes from 'prop-types';


class Detail extends Component {
	constructor(props) {
    super(props);
		this.state = {
    	value: '',
			pokemon_type: [],
		};
		this.all_url = "http://pokeapi.salestock.net/api/v2/pokemon?limit=1000";
		this.type_url = "https://pokeapi.co/api/v2/type/";
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSubmit2 = this.handleSubmit2.bind(this);
  }

	pokemon_get(){
		let pic_url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + this.state.value + ".png";
		return pic_url;
	}

	componentWillMount() {
		let ret = this.props.match.params.number;
		//this.props.id = this.props.match.params.number;
		let url = "http://pokeapi.salestock.net/api/v2/pokemon/" + ret + "/";
		axios.get(url).then(res => {
			let table = res.data;
			this.setState({
				pokemon_type: table,
				value: parseInt(ret),
			});
    });
	}

	handleSubmit(event){
		event.preventDefault();
		let val = (this.state.value - 1) < 0 ? 0 : this.state.value - 1;
		if(val == 10000)	val = 721;
		let ret = val;
		let url = "http://pokeapi.salestock.net/api/v2/pokemon/" + ret + "/";
		axios.get(url).then(res => {
			let table = res.data;
			this.setState({
				pokemon_type: table,
				value: parseInt(ret),
			});
    });
	}

	handleSubmit2(event){
		event.preventDefault();
		let val = (this.state.value + 1) > 10090 ? 10090 : this.state.value + 1;
		if(val == 722)	val = 10001;
		let ret = val;
		let url = "http://pokeapi.salestock.net/api/v2/pokemon/" + ret + "/";
		axios.get(url).then(res => {
			let table = res.data;
			this.setState({
				pokemon_type: table,
				value: parseInt(ret),
			});
    });
	}

  render() {
		let i = this.state.pokemon_type;
		let left = (this.state.value - 1) < 0 ? 0 : this.state.value - 1;
		let right = this.state.value + 1;
		console.dir("jaijiasj");
		console.log(left + " and " + right);
    return(
			<div className="detail">
				<h2>Name: {i.name}</h2>
				<p>ID: {this.state.value}</p>
				<p>Weight: {i.weight}</p>
				<p>Height: {i.height}</p>
				<p>Base experience: {i.base_experience}</p>
				<img src={this.pokemon_get()} alt="NO AVALIBLE"/>
				<form>
	        <input type="submit" className="lr" onClick ={this.handleSubmit} name='left' value="left"/>
					<input type="submit" className="lr" onClick ={this.handleSubmit2} name='right' value="right"/>
	      </form>
				<p>This may take 2 seconds...</p>
			</div>
    );
  }
}

Detail.defaultProps = {
  name: 'Detail',
	url: "http://pokeapi.salestock.net/api/v2/pokemon/",
	number: 2,
};

export default Detail
