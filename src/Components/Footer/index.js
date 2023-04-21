import React, { useEffect } from "react";
import style from "./footer.module.scss";
import { Container } from "react-bootstrap";
import user from "../../assets/usericon.png";
import home from "../../assets/homeicon.png";
import carticon from "../../assets/carticon.png";
import rightarrow from "../../assets/rightarrow.png"
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal, getDistinct } from "../Slice/cartSlice";
const Footer = (props) => {
   
  const {cart,totalItems,uniqueItem} = useSelector((state) => state.CART )


  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getCartTotal())
    
  },[cart,dispatch])
  return (
    <Container className={props.variant !== "cart" ? style.footer__container : style.footer__container__cart}>
      {
        props.variant !== "cart" ? 
       
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
        <div className={style.carticon__wrapper}>
          <span>{uniqueItem}</span>
          <img src={carticon} alt="cart" width="40px" height="40px" />
        </div>
        </NavLink>
      </div> 
     
        : <div className={style.footer__cart__wrapper}>
            <div className={style.totalitem}>
               {totalItems} Items
             </div>
             <div className={style.placeorder}> 
              Place Order <span>
                <img  src={rightarrow} alt="righarrow" height="28px" width="28px"/>
              </span>
             </div>
        </div>
      
      }
    
    </Container>
  );
};

export default Footer;
