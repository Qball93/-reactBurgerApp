
import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';



const Burger = (props) => {

  let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    console.log("hello " + props.ingredients[igKey]);
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      //console.log("hallo "+ igKey);
      return <BurgerIngredient key={igKey + i} type={igKey} />
    });
  }).reduce((arr, el) => {
    return arr.concat(el)
  }, []);
  if( transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient  type="top-bun"/>
      {transformedIngredients}
      <BurgerIngredient  type="bottom-bun"/>
    </div>
  );

};


export default Burger;