import React from "react";
import { Container } from "react-bootstrap";
import style from "./beverage.module.scss";
import drinks from "../../assets/drinks.png";
import Header from "../Header";
import Footer from "../Footer";
const Beverage = () => {
  return (
    <Container className={style.beverage__container}>
      <Header />
      <div style={{ textAlign: "center",paddingTop:"1rem",paddingBottom:"1rem" }}>
        <img src={drinks} width="150px" height="150px" alt="desert" />
      </div>
      <Footer />
    </Container>
  );
};

export default Beverage;
