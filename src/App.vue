<template>
    <router-view/>  
</template>

<style lang="scss">
/*-----------------------*\
    $Variables
\*-----------------------*/
:root {
    /* Paleta de colores */
    --color-first: #e91e63;
    --color-second: #c2185b;
    --color-accent: #ffea00;
    --color-bg: #fce4ec;
    --color-white: #e0e0e0;
    --color-text: #263238;

    /* Tipografia */
    --font-title: 'Rubik', sans-serif;
    --font-content: 'Archivo Narrow', sans-serif;
    --h1-font-size: 2rem;
    --h2-font-size: 1.5rem;
    --h3-font-size: 1.2rem;
    --body-font-size: 1rem;
    --small-font-size: .8rem;

    --header-height: 60px;
    --max-width: 1000px;
    --gutter: 1em;
    --grid-3-columns: calc(33% - var(--gutter));
}

/*-----------------------*\
    $Base
\*-----------------------*/
*,
*::after,
*::before { box-sizing: border-box; }
body {
    font-size: var(--body-font-size);
    font-family: var(--font-content);
    color: var(--color-text);
    background-color: var(--color-bg);
}
img {
    display: block;
    width: 100%;
    max-width: 100%;
    height: auto;
}
a { 
    color: var(--color-accent);
    text-decoration: none; 
}
h1,
h2,
h3,
h4,
h5,
h6 { 
    margin-top: 0;
    font-family: var(--font-title); 
    text-transform: uppercase;
}
h1 { font-size: var(--h1-font-size); }
h2 { font-size: var(--h2-font-size); }
h3 { font-size: var(--h3-font-size); }
input[type="checkbox"], 
input[type="radio"]{
    cursor: pointer;
}
input[type="checkbox"][disabled] {
    cursor: initial;
}


/*-----------------------*\
    $Layout
\*-----------------------*/
.l-container {
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    max-width: var(--max-width);
    height: 100%;
    display: flex;
    flex-wrap: wrap;
}
.l-section {
    margin-bottom: 6rem;
}
.center-block {
    margin-left: auto;
    margin-right: auto;
}
.center-content { text-align: center; }


/*-----------------------*\
    $icons
\*-----------------------*/
[class*=icon-]::before {
    --width: 1.5em;
    content: "";
    display: inline-block;
    margin-right: .4em;
    width: var(--width);
    height: var(--width);

    &:hover::before,
    &:focus::before {
        filter: invert(16%) sepia(17%) saturate(743%) hue-rotate(155deg) brightness(92%) contrast(89%);
    }
}

.icon-cake::before {
    content: "";
    background-image: url("./assets/icons/icon-cake.svg");
    background-repeat: no-repeat;
    filter: invert(16%) sepia(17%) saturate(743%) hue-rotate(155deg) brightness(92%) contrast(89%);
}
.icon-star::before {
    content: "";
    background-image: url("./assets/icons/icon-star.svg");
    background-repeat: no-repeat;
    filter: invert(16%) sepia(17%) saturate(743%) hue-rotate(155deg) brightness(92%) contrast(89%);
}
.icon-card::before {
    content: "";
    background-image: url("./assets/icons/icon-card.svg");
    background-repeat: no-repeat;
    filter: invert(16%) sepia(17%) saturate(743%) hue-rotate(155deg) brightness(92%) contrast(89%);
}
.icon-location::before {
    content: "";
    background-image: url("./assets/icons/icon-location.svg");
    background-repeat: no-repeat;
    filter: invert(16%) sepia(17%) saturate(743%) hue-rotate(155deg) brightness(92%) contrast(89%);
}
.icon-phone::before {
    content: "";
    background-image: url("./assets/icons/icon-phone.svg");
    background-repeat: no-repeat;
    filter: invert(16%) sepia(17%) saturate(743%) hue-rotate(155deg) brightness(92%) contrast(89%);
}


/*-----------------------*\
    $Card
\*-----------------------*/
.card {
    border-radius: 1em;
    padding: 2em 3em;
    margin-bottom: 1em;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 3px 3px 6px;
}



/*-----------------------*\
    $Button
\*-----------------------*/
.button {
    border-radius: .3em;
    padding: .6em 1.8em .6em;
    color: var(--color-text);
    background-color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    transition: all .3s;
    cursor: pointer;
    display: flex;
    align-items: center;
    
    &:active { 
        transform: scale(.96); 
    }
    &:hover {
        background-color: var(--color-white);
    }
}


/*-----------------------*\
    $Grid
\*-----------------------*/
.grid {
    --columns: 3;
    --gap: 1em;
    display: grid;
    grid-template-columns: repeat(var(--columns), 1fr);
    gap: var(--gap);
    width: 100%;
}
</style>
