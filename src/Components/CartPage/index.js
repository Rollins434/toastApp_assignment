import React from 'react'
import style from './cartpage.module.scss'
import { Container } from 'react-bootstrap'
import Header from '../Header'
import DropComponent from '../DropComponent'
import { useSelector } from 'react-redux'

const CartPage = () => {
    const {cart} = useSelector((state) => state.CART)
    console.log(cart)
  return (
   <Container className={style.cartpage__container}>
        <Header variant="cart"/>
        <DropComponent name="Current order" type="cart" data={cart}/>
   </Container>
  )
}

export default CartPage