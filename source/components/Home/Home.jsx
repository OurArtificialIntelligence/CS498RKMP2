import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styles from './Home.scss'

class Home extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	value: '',
			pokemon_type: [],
			result: {},
			flag: true,
			flag2: true,
			toggle: true,
		};

		this.all_url = "http://pokeapi.salestock.net/api/v2/pokemon?limit=1000";
		this.type_url = "https://pokeapi.co/api/v2/type/";
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSubmit2 = this.handleSubmit2.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
		console.log(this.flag);
		let ori = this.state.flag;
		this.setState({
			flag: !ori,
			toggle: true,
		});
		console.log(this.state.flag);
  }

	handleSubmit2(event) {
    event.preventDefault();
		console.log(this.state.flag2);
		let ori = this.state.flag2;
		this.setState({
			flag2: !ori,
			toggle: false,
		});
		console.log("glag2");
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

	componentWillMount() {
		let url = this.all_url;
  	axios.get(url).then(res => {
			let table = res.data;
			this.setState({
				pokemon_type: table.results
			});
			console.dir(this.state.pokemon_type)
    });
	}


  render() {
		const listItems = this.state.pokemon_type.map((number) =>
			<div>
		  	<li>{number.url}</li>
				<li>{number.name}</li>
			</div>
		);

		const resultob = this.state.pokemon_type.filter((idx) =>
			(idx.name.toString()).includes(this.state.value.toString() || idx.name.toString() == '')
		);
		const resultob2 = this.state.pokemon_type.filter((idx) =>
			(idx.name.toString()).includes(this.state.value.toString() || idx.name.toString() == '')
		);

		const resultob3 = !this.state.flag2 ? resultob.sort( function(a,b) {
			return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);} ) :
			resultob.sort( function(a,b) {
			return (a.name > b.name) ? -1 : ((b.name > a.name) ? 1 : 0);} );

		const resultob4 = !this.state.flag ? resultob2.reverse() : resultob2;

		const result = this.state.toggle == true ? resultob4 : resultob3;
		console.dir(resultob);
    return (
			<div className="search-body">
      <form>
        <label>
          <p>Search by Name:</p>
          <input id="input1" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
				<Button inverted color='red' id="inputb" onClick ={this.handleSubmit} name='a'>Index Asc/Dec</Button>
				<Button inverted color='red' id="inputb" onClick ={this.handleSubmit2} name='a'>Alpha Asc/Dec</Button>
      </form>
			<div>
				{result.length == 0 ? '' : result.map((idx, number) =>
				<div className="search">
					<li><Link to={'/Detail/'+ this.pokemon_getnum(idx.url)}>{idx.name}</Link></li>
					<li>ID: {this.pokemon_getnum(idx.url)}</li>
					<li>Name: {idx.name}</li>
					<img src={this.pokemon_get(idx.url)} alt="NO AVALIBLE"/>
				</div>
			)}
				</div>
			</div>
    );
  }
}

export default Home
