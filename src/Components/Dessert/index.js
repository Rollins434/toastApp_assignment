import React from 'react'
import { Container } from 'react-bootstrap'
import style from './dessert.module.scss'
import Header from '../Header'
import Footer from '../Footer'
const Dessert = () => {
  return (
    <Container className={style.dessert__container}>
       <Header/>
Dessert
<Footer/>
    </Container>
  )
}

export default Dessert