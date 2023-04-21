import React from "react";
import style from "./recipecard.module.scss";
import { Container } from "react-bootstrap";

import add from "../../assets/addbutton.png";
import veg from "../../assets/veglogo.png"
import { useDispatch } from "react-redux";
import { addToCart } from "../Slice/cartSlice";
const RecipeCard = ({ data, type }) => {
    const dispatch = useDispatch()
const handleItem = (data) =>{
    
    dispatch(addToCart(data))
}

  return (
    <>
      {type === "special" && (
        <Container className={style.recipe__container}>
          {data.map((data) => {
            return (
              <React.Fragment key={data.id}>
                <div className={style.recipe__wrapper}>
                  <div>
                    <img src={data.image} alt={data.name} />
                  </div>
                  <div className={style.recipe__name__wrapper}>
                    {" "}
                    <span>
                      <img
                        src={data.veglogo}
                        alt="veglogo"
                        width="16px"
                        height="16px"
                      />
                    </span>
                  <div className={style.name}>{data.name}</div>  
                  </div>
                  <div className={style.recipe__btn__wrapper}>
                    <div className={style.recipe__price}>{data.price}</div>
                    <div className={style.add__btn}>
                      <button onClick={() =>handleItem(data)}>
                        <span style={{ display: "inline-block" }}>
                          {" "}
                          <img src={add} alt="add" />
                        </span>{" "}
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </Container>
      )}
      {type === "main" && (
        <Container className={style.main__container}>
          {data.map((data) => {
            return (
              <React.Fragment key={data.id}>
                <div className={style.main__wrapper}>
                    <div className={style.left}>
                        <img src={data.image} height="70px" width="70px" alt={data?.name}/>
                    </div>
                    <div className={style.right}>
                        <div className={style.name}>
                            {data.name}
                        </div>
                        <div className={style.recipe__btn__wrapper} style={{gap:"100px"}}>
                    <div className={style.recipe__price}>{data.price}</div>
                    <div className={style.add__btn}>
                      <button>
                        <span style={{ display: "inline-block" }}>
                          {" "}
                          <img src={add} alt="add" />
                        </span>{" "}
                        Add
                      </button>
                    </div>
                  </div>
                    </div>
                </div>
              </React.Fragment>
            );
          })}
        </Container>
      )}
      {type === "cart" && <Container className={style.cart__container}>
        
        <div className={style.cart__wrapper}>
        <img src={veg} alt="veglogo" width="16px" height="16px"/>
          <div className={style.cart__content}>
          <div className={style.cart__name}>Name</div>
          <div className={style.recipe__price}>data.price</div>
          </div>
        
        </div>
        <div className={style.cart__wrapper}>
        <img src={veg} alt="veglogo" width="16px" height="16px"/>
          <div className={style.cart__content}>
          <div className={style.cart__name}>Name</div>
          <div className={style.recipe__price}>data.price</div>
          </div>
        </div>
        </Container>}
    </>
  );
};

export default RecipeCard;