import React from "react";
import { Container, Row } from "react-bootstrap";
import style from "./special.module.scss";
import DropComponent from "../DropComponent";
import Footer from "../Footer";

import { useSelector } from "react-redux";
import Header from "../Header";


const Special = () => {

  const items = useSelector((state) => state.CART.items)
  const recipeData = [];
    items.forEach((data) =>{
        if(data.category === 'special')
        recipeData.push(data)
    })
  return (
    <Container className={style.special__container}>
       <Header/>
      <Row style={{margin:"0px"}}>
        <div className={style.special__banner}>
            <p> Welcome to <br/> Sacred Earth Cafe</p>
        </div>
      </Row>
      <DropComponent name="Today's Special" recipeData={recipeData} type="special"/>
      <Footer/>
    </Container>
  );
};

export default Special;
