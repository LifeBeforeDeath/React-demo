import React from "react";
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
import Product from "./productsList";
import './products.style.css';

class ProductsList extends React.Component {
    constructor(){
        super();
        this.state = {products : [
            {
                id : 1,
                title:"pc",
                likes:34,
                reating:4.5,
                imageUrl:"https://avatars.githubusercontent.com/u/3?v=4",
                price:"$4500"
            },
            {
                id:2,
                title:"pjhyett",
                likes:348,
                reating:3.5,
                imageUrl:"https://avatars.githubusercontent.com/u/4?v=4",
                price:"$500"
            },
            {
                id:3,
                title:"ezmobius",
                likes:94,
                reating:2.5,
                imageUrl:"https://avatars.githubusercontent.com/u/5?v=4",
                price:"$3500"
            },
            {
                id:4,
                title:"ivey",
                likes:34,
                reating:4.5,
                imageUrl:"https://avatars.githubusercontent.com/u/6?v=4",
                price:"$450"
            },
            {
                id:5,
                title:"evanphx",
                likes:34,
                reating:2,
                imageUrl:"https://avatars.githubusercontent.com/u/7?v=4",
                price:"$1500"
            },
            {
                id:6,
                title:"vanpelt",
                likes:34,
                reating:4.5,
                imageUrl:"https://avatars.githubusercontent.com/u/17?v=4",
                price:"$560"
            }
        ]};
    }


    deleteProduct(prodId){
        this.setState({products : this.state.products.filter((product)=>{
            return product.id !== prodId;
        })
    });
        console.log(`product deleted:${prodId}`);
    }
   
    render(){
        let allProducts = this.state.products.map((product)=><Product 
            productDetail={product}
            key={product.id}
            deleteProduct={(id=>this.deleteProduct(id))}
        >          
        </Product>)
        return(
            <div className="product-list">
                {
                    allProducts
                }
                
                
            </div>
        ) 
    }
}

export default ProductsList;