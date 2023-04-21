import React, { useEffect } from 'react'
import style from './cartpage.module.scss'
import { Container } from 'react-bootstrap'
import Header from '../Header'

import DropComponent from '../DropComponent'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../Slice/cartSlice'
import Footer from '../Footer'

const CartPage = () => {
    const {cart,totalItems,totalPrice} = useSelector((state) => state.CART)
    
    
    const recipeData = cart
    const dispatch = useDispatch()
    useEffect(()=>{
dispatch(getCartTotal())
    },[cart,dispatch])
  return (
   <Container className={style.cartpage__container}>
        <Header variant="cart"/>
        <DropComponent name="Current order" type="cart" recipeData={recipeData}/>
        <Footer variant="cart"/>
   </Container>
  )
}

export default CartPage