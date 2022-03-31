<template>
    <div class="l-container  container">
        <h1 class="center-content">LOGIN</h1>
        <form class="form  card  center-block" v-on:submit.prevent="onSubmit">
            <input v-model="username" class="form__input" type="text" placeholder="Escribe tu usuario" required>
            <input v-model="password" class="form__input" type="password" placeholder="Escribe tu contraseña" required>
            <input class="form__input  form__button  button" type="submit" value="Ingresar">
            <router-link class="form__link   center-content" to="/">Regresar a Inicio</router-link>
        </form>
    </div>
</template>
    
<script>
export default {
    name: 'LoginComponent',
    data() {
        return {
            'username': '',
            'password': ''
        }
    },
    methods: {
        async onSubmit() {
            try {
                await this.$store.dispatch('doLogin', this.username)
                this.$router.push({name: 'dashboard'})
            } catch(error) {
                console.log(error)
            }
        }
    }
}
</script>
    
<style scoped lang="scss">
.container {
    height: 100vh;
    width: 100vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


.form {
    width: 60%;
    display: flex;
    flex-direction: column;
    
    &__input {
        border: none;
        border-radius: .5em;
        padding: .8em 1em;
        background-color: var(--color-bg);
        color: var(--color-first);
        caret-color: var(--color-first);
    }
    [class^="form__"]:not(:last-child) {
        margin-bottom: 1em;
    }
    &__input:focus {
        outline: .15rem solid var(--color-first);
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
    &__link {
        color: var(--color-first);
        opacity: .7;
    }
    &__link:hover {
        color: var(--color-second);
        text-decoration: underline;
    }
} 
</style>