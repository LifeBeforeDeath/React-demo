import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import './productslist.styles.css';
import { AiFillLike } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";



class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currLikes: this.props.productDetail.likes };
    }
    addLikes() {
        // console.log("Adding Likes");
        //console.log( this.props.userdetails.subscribers++);// props are readonly
        // console.log(this)
        // this.state.currSubscribers++; // state is immutable
        this.setState({ currLikes: this.state.currLikes + 1 });
    }
    
  render() {
    let ratings = [];
    for(let i=1;i<this.props.productDetail.reating;i++){
        ratings.push(<IoMdStar key={i} size="25" color="orange" />);
        
    }
    if((this.props.productDetail.reating)%1 !== 0){
        ratings.push(<IoMdStarHalf size="25" color="orange" />);
    } else {
        ratings.push(<IoMdStar size="25" color="orange" />);
    }
    return(
        <div className="thumbNail">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.productDetail.imageUrl} height="200px" width="200px"/>
                <Card.Body>
                    <Card.Title>{this.props.productDetail.title}</Card.Title>
                    
                    <Button className="btn" variant="primary" onClick={()=> this.addLikes()}>{this.state.currLikes} <AiFillLike /></Button>
                    <Button className="btn" variant="danger" onClick={()=>this.props.deleteProduct(this.props.productDetail.id)}> <MdDelete /> </Button>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item> 
                        {ratings} 
                    </ListGroup.Item>
                    {/* <ListGroup.Item></ListGroup.Item> */}
                    <ListGroup.Item>{this.props.productDetail.price}</ListGroup.Item>
                </ListGroup>   
            </Card>
        </div>      
    ) ;
  }
}

export default Product;