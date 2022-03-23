<template>
    <!-- ---------- $Contact  --------------- -->
    <section id="contact" class="l-section  contact">
        <div class="l-container">
            <div class="contact__info">
                <h2 class="conctact__title">Encuentranos</h2>
                <span class="contact__location  icon-location">San Fco. de Campeche, Camp, MX.</span>
                <span class="contact__phone  icon-phone">+52 981 122 3356</span>
            </div>
            <div class="contact__img-container">
                <img class="contact__image" src="../assets/images/loaction.png" alt="Imagen de la ubicacion del negocio.">
            </div>
        </div>
    </section>
</template>
    
<script>
    export default {
        name: 'ContactComponent'
    }
</script>
    
<style scoped lang="scss">
/*-----------------------*\
    $Contact
\*-----------------------*/
.contact {
    & > div {
        --margin: 2em;
        display: flex;
    }
    &__info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: var(--margin);
    }
    &__img-container {
        order: -1;
        flex-basis: calc(70% - var(--margin));
        border-radius: .5em;
        box-shadow: rgba(0, 0, 0, 0.1) -3px 6px 6px;
        overflow: hidden;
        margin-left: auto;
    }
    &__location {
        margin-bottom: 1em;
    }
    &__location,
    &__phone {
        display: flex;
        align-items: center;
    }
}
</style>