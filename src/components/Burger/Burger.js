import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    return (
        <div className={classes.Burger}>
            <h1>Kosher</h1>
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="salad"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="salad"/>
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;
