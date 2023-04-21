import React from 'react'
import { Container } from 'react-bootstrap'
import style from './beverage.module.scss'
import Header from '../Header'
import Footer from '../Footer'
const Beverage = () => {
  return (
    <Container className={style.beverage__container}>
       <Header/>
Beverage
<Footer/>
    </Container>
  )
}

export default Beverage