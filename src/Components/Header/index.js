import React from "react";
import style from "./header.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/logo1.png";
import iconwaiter from "../../assets/icon-waiter.png";
import iconcode from "../../assets/icon-code.png";
import { NavLink } from "react-router-dom";
import { navData } from "../../data/nav";
import backarrow from "../../assets/backarrow.png";
import warning from '../../assets/warningicon.png'

const Header = (props) => {
  const navStyles = ({ isActive }) => {
    return {
      color: isActive ? "#3CBCB4" : "#AEB4B9",
      textDecoration: isActive ? "underline" : "none",
      textUnderlineOffset: isActive ? "20px" : "",
      textDecorationThickness: isActive ? "2px" : "",
    };
  };
  return (
    <Container className={style.header__main}>
      <Row className={style.header__row}>
        {props.variant !== "cart" ? (
          <Col md={1}>
            <img src={logo} alt="Logo" height="28px" width="28px" />
          </Col>
        ) : (
          <Col md={1}>
            <img src={backarrow} alt="Logo" height="40px" width="40px" />
          </Col>
        )}
        {props.variant !== "cart" ? (
          <Col className={style.header__title} md={6}>Sacred Earth Cafe</Col>
        ) : (
          <Col className={style.header__title} style={{fontSize:"20px"}}>Place Order</Col>
        )}

        <Col className={style.header__right} >
          {
            props.variant !== 'cart' ? <>
               <div className={style.logo1}>
            <img src={iconwaiter} alt="Logo" height="30px" width="30px" />
          </div>
          <div className={style.logo2}>
            <img src={iconcode} alt="Logo" height="30px" width="30px" />
          </div></> :  <div className={style.logo2}>
            <img src={warning} alt="Logo" height="40px" width="40px" />
          </div>
          }
       
        </Col>
      </Row>
      <Row>
        <ul className={style.header__nav}>
          {navData.map((data, index) => {
            return (
              <React.Fragment key={index}>
                <NavLink style={navStyles} to={data.link}>
                  {data.name}
                </NavLink>
              </React.Fragment>
            );
          })}
        </ul>
      </Row>
    </Container>
  );
};

export default Header;
