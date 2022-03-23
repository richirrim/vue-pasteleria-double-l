<template>
    <!-- ---------- $About --------------- -->
    <section id="about" class="about  l-section">
        <div class="l-container">
            <div class="about__container">
                <h2 class="about__title">Nosotros</h2>
                <div class="about__description">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non aperiam 
                        veritatis doloribus expedita officia et eos, veniam qui quae unde optio 
                        illum neque vel a ipsum repellat animi quasi similique!.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, 
                        deleniti? Tenetur molestias, praesentium qui quae cupiditate tempore 
                        ducimus animi quia harum voluptatum nihil totam ab saepe eaque! Esse, 
                        odit atque.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, 
                        deleniti? Tenetur molestias, praesentium qui quae cupiditate tempore 
                        ducimus animi quia harum voluptatum nihil totam ab saepe eaque! Esse, 
                        odit atque.
                    </p>
                </div>
            </div>
            <img class="about__image" src="../assets/images/about.jpg" alt="Imagen representativa del negocio.">   
        </div>
    </section>
</template>
    
<script>
    export default {
        name: 'AboutCompoenent'
    }
</script>
    
<style scoped lang="scss">
/*-----------------------*\
    $About
\*-----------------------*/
.about {
    display: flex;
    align-items: center;
    justify-content: center;

    & > div {
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        gap: 2em;
    }
    &__container {
        flex-basis: 40%;
    }
    &__description p:last-child {
        margin-bottom: 0;
    }
    &__image {
        border-radius: 1em;
        width: 26em;
        box-shadow: rgba(0, 0, 0, 0.1) -3px 6px 6px;
    }
}
</style>