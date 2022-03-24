<template>
    <form class="form-order  card" action="">
        <input class="form-order__input" type="text" placeholder="Escribe tu nombre completo" name="names" required>
        <input class="form-order__input" type="text" placeholder="Escribe tu número de celular" name="phone-number" required>
        <input class="form-order__input" type="text" placeholder="Escribe tu correo electronico" name="email" required>
        <textarea class="form-order__textarea" type="textarea" placeholder="Describe de forma breve y general tu pastel ideal." name="description" rows="10" cols="50" required></textarea>
        <input class="form-order__button  button" type="button" value="Realizar pedido">
    </form>
</template>
    
<script>
    export default {
        name: 'FormComponent'
    }
</script>
    
<style scoped lang="scss">
/*-----------------------*\
    $Form order
\*-----------------------*/
.form-order {
    width: 100%;
    display: flex;
    flex-direction: column;
    & > * {
        border: none;
        border-radius: .5em;
        color: var(--color-first);
        caret-color: var(--color-first);
    }
    [class^="form-order__"]:not(:last-child) {
        background-color: var(--color-bg);
        padding: .8em 1em;
        margin-bottom: 1em;
    }
    &__textarea {
        resize: none;
    }
    &__button {
        color: #fff;
        justify-content: center;
        padding: 1.5em 1em;
        background-color: var(--color-first);
    }
    &__button:hover {
        background-color: var(--color-second);
    } 
}   
</style>