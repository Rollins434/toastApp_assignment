import React from "react";
import style from "./footer.module.scss";
import { Container } from "react-bootstrap";
import user from "../../assets/usericon.png";
import home from "../../assets/homeicon.png";
import cart from "../../assets/carticon.png";
import { Link, NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <Container className={style.footer__container}>
      <div className={style.footer__wrappper}>
        <div>
          <Link to="/event">
            <img src={user} alt="user" width="40px" height="40px" />
          </Link>
        </div>
        <div>
          <Link to="/special">
            <img src={home} alt="home" width="26px" height="26px" />
          </Link>
        </div>
        <NavLink to="/cart"> 
        <div>

          <img src={cart} alt="cart" width="40px" height="40px" />
        </div>
        </NavLink>
      </div>
    </Container>
  );
};

export default Footer;
