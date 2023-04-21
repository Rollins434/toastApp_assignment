import React from 'react'
import { Container } from 'react-bootstrap'
import style from './main.module.scss'
import DropComponent from '../DropComponent'
import Footer from '../Footer'

import { useSelector } from 'react-redux'
import Header from '../Header'
const Main = () => {
  const items = useSelector((state) => state.CART.items)
  const recipeData = [];
  items.forEach((data) =>{
    if(data.category === 'main')
    recipeData.push(data)
})
  return (
    <Container className={style.main__container}>
       <Header/>
 <DropComponent name="Acai bowls" recipeData={recipeData} type="main"/>
      <Footer/>
    </Container>
  )
}

export default Main