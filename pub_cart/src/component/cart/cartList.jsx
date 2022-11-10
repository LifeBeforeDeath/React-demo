import React from 'react';
import Cart from './cart';
// import cartList from '../../data/cart-list';
export default class CartList extends React.Component{
    // state = {carts:cartList}
    

    // deleteCart(cartId){
    //     this.setState({carts : this.state.carts.filter((cart)=>{
    //             return cart.id !== cartId;
    //         })
    //     });
    // }

    render(){
        let allCartItems = this.props.carts.map(cart => <Cart 
            cartDetails={cart}
            key={cart.id}
            deletecart={(id=>this.props.deleteCart(id))}
            ></Cart>)
        return(
            <div className='cart-list'>
                {allCartItems}
            </div>
        )
    }
}