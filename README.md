# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![Desktop design](desktop-design.jpg)
![Mobile design](mobile-design.jpg)

### Links

- Solution URL: [Solution][https://github.com/Jalobig/product-preview-card]
- Live Site URL: [Live site URL](https://your-live-site-url.com)

## My process

### Built with

- SASS custom properties
- Flexbox
- Desktop-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

With this small project, I learned a lot more about responsive images. the responsivness has to be done with a hook instead of a background image statement in css that you control with @media in css. 

```js
const media = useMediaQuery('only screen and (max-width: 1000px)')
  return (
    <div className={classes.display}>
        <img src={media? imgMobile: imgDesktop}  alt='Product displayed'/>
    </div>
  )
```


### Continued development

I will continue to learn ReactJS, with the creation of my own hooks like I used here. Also, I find the setup of my Sass and the breakdown uneffecient. the setup has to be optimized. 


### Useful resources

- [Netlify Blog](https://www.netlify.com/blog/2020/12/05/building-a-custom-react-media-query-hook-for-more-responsive-apps/) - This helped me for the media query.

## Author

- Frontend Mentor - [@Jalobig](https://www.frontendmentor.io/profile/jalobig)
- Github - [@Jalobig](https://www.github.com/jalobig)
