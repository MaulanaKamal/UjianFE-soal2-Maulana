import React, { Component } from 'react';
import axios from 'axios';
import Player from './Components/Player'
import './App.css';


export default class App extends Component {
  constructor() {
		super();
		this.state = {
			search: '',
			data : []
		}
	}
  dataTeam = teamPemain => 
  axios.get("https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=" + (teamPemain))
    .then((res) => {
      console.log(res);
        this.setState({
          data : res.data.player
      })
    })
    .catch((err) => {
        console.log(err);
    })
  
  render(){
    return(
      
			<div className="form-group">
				<h1>Daftar Pemain {this.state.search} </h1>
        <div className="form-inline">
          <input onChange={() => this.setState({search: this.refs.search.value})}className="form-control" type="text" ref="search"/>

          <button onClick={() => this.dataTeam(this.refs.search.value)} className="btn btn-success">Lihat Daftar</button>
          </div>
        <div className="hasil">
          {this.state.data.map(x => <Player key={x.idPlayer} {...x}/>)}
        </div>
			</div>
		
    )
  }
}