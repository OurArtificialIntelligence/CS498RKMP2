import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styles from './Type.scss'

class Type extends Component {
	constructor(props){
    super(props);
    this.state = {
    	value: '',
			pokemon_type: [],
			result: {},
	   };
  }

  render(){
    return(
      <p>HITHERER</p>
    );
  }
}

export default Type
