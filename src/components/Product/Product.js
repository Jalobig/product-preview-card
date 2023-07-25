import React from "react";
import classes from "./Product.module.scss";
import Button from "../Button/Button";
import IconCart from '../../assets/images/icon-cart.svg'

const Product = () => {
  return (
    <div className={classes.product}>
      <h3 className={classes['heading--3']}>Perfume</h3>
      <h1 className={classes['heading--1']}>Gabrielle Essence Eau De Parfum</h1>
      
    <p className={classes.paragraph}>A floral, solar and voluptuous
      interpretation composed by Olivier Polge, Perfumer-Creator for the House
      of CHANEL.</p>
      
      <p className={classes.price}><span className={classes.price__rebate}>$149.99</span><span className={classes.price__full}>$169.99</span></p> 

      <Button>
        <p className={classes['align-center']}><img className={classes.icon} src={IconCart} alt='Icon of a cart'/> <span className={classes['button-text']}>Add to Cart</span></p>
        </Button>
    </div>
  );
};

export default Product;
