import "./App.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import ProductsList from "./component/product/products";
// import UsersList from "./component/user/usersList";
// import Posts from './component/posts/posts';
// import Login from "./component/login/login";
import CartList from "./component/cart/cartList"; 
import PriceBox from "./component/cart-price-details/cartPrice";
import cartList from "./data/cart-list";

export default class App extends React.Component {
  state={carts:cartList}
  deleteCart(cartId){
      this.setState({carts : this.state.carts.filter((cart)=>{
              return cart.id !== cartId;
          })
      });
  }
  render() {
    return (
      <div>
        {/* <h1>List of Products</h1>
        <hr/> */}
        {/* <ProductsList></ProductsList> */}
        {/* <Posts></Posts> */}
        {/* <UsersList></UsersList> */}
        {/* <Login></Login> */}
        <div className="shopping-cart">
          <CartList 
            className="cart-list"
            carts={this.state.carts}
            deleteCart={(id=>this.deleteCart(id))}
          ></CartList>
          <PriceBox 
            className="cart-price"
            carts={this.state.carts}
          ></PriceBox>
        </div>
        
      </div>
    )
  }
}