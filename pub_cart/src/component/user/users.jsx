import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import './users.style.css';
// import Col from 'react-bootstrap/Col';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default class User extends Component{
    render(){
        return(
            <Card style={{height: "150px"}}>
            <Card.Body className="body">
                <div classname="card-img-div">
                <Card.Img src={this.props.userDetails.avatarUrl}  className="card-img"/>
                </div>
                
                <div className="card-content">
                    <Card.Title>{this.props.userDetails.name}</Card.Title>
                    <Card.Text className="m-0">{this.props.userDetails.email}</Card.Text>
                    <Card.Text className="m-0">{this.props.userDetails.designation}</Card.Text>
                    <Card.Text className="m-0">{this.props.userDetails.description}</Card.Text>
                </div>  
            </Card.Body>
            </Card>
        );
    }
}