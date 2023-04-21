import React from "react";
import { Accordion, Container } from "react-bootstrap";

import style from "./drop.module.scss";
import RecipeCard from "../RecipeCard";

const DropComponent = (props) => {
  return (
    <Container className={style.drop__container}>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0" className="acc_item" bsPrefix="">
          <Accordion.Header className="recipe_acc_header">
            {props?.name}{" "}
          </Accordion.Header>
          <hr
            className={
              props.type === "special"
                ? style.horizontal
                : props.type === "main"
                ? style.horizontal__main
                : props.type === "cart" ? style.horizontal__cart :''
            }
          />
          <Accordion.Body>
            <RecipeCard data={props.recipeData} type={props.type} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default DropComponent;
