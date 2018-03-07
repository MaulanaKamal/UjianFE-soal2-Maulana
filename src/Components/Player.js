import React, { Component } from 'react';
import axios from 'axios';
import '../styles/Player.css'

export default class Player extends Component {
    render(){
        return(
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">{this.props.strPlayer} - {this.props.strPosition}</h3>
                    </div>
                    <div className="panel-body">
                        <div className="col-sm-6">
                            <img src={this.props.strThumb}/>    
                        </div>
                        <div className="col-sm-6">
                            <p>{this.props.strDescriptionEN}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


