import React from 'react'
import { Container } from 'react-bootstrap'
import style from './dessert.module.scss'
import noice from "../../assets/noice.png"
import Header from '../Header'
import Footer from '../Footer'
const Dessert = () => {
  return (
    <Container className={style.dessert__container}>
       <Header/>
       <div style={{ textAlign: "center",paddingTop:"1rem",paddingBottom:"1rem" }}>
        <img src={noice} width="150px" height="150px" alt="noice" />
      </div>
<Footer/>
    </Container>
  )
}

export default Dessert