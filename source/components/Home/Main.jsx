import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import axios from 'axios'
import styles from './Home.scss'

class Main extends Component {
	constructor(props) {
    super(props);
    this.state = {
	  };
		this.all_url = "https://pokeapi.co/api/v2/pokemon/?limit=1000";
		this.type_url = "https://pokeapi.co/api/v2/type/";
  }


  render() {
    return(
			<p>asdfadsfa main</p>
    );
  }
}

export default Main
