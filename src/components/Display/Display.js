import React from 'react'
import classes from './Display.module.scss'
import imgDesktop from '../../assets/images/image-product-desktop.jpg'
import imgMobile from '../../assets/images/image-product-mobile.jpg'
import useMediaQuery from '../../hooks/useMediaQuery';

const Display = () => {
  const media = useMediaQuery('only screen and (max-width: 1000px)')
  return (
    <div className={classes.display}>
        <img src={media? imgMobile: imgDesktop}  alt='Product displayed'/>
    </div>
  )
}

export default Display