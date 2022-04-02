<template>
    <div class="wrapper">
        <table class="table">  
            <thead class="table__head">
                <tr class="table__row">
                    <th class="table__column-head">Nombre del cliente</th>
                    <th class="table__column-head">Celular</th>
                    <th class="table__column-head">Email</th>
                    <th class="table__column-head">Descripción</th>
                    <th class="table__column-head">Sabores</th>
                    <th class="table__column-head">Decoraciones</th>
                </tr>
            </thead>
            <tbody class="table__content">
                <tr v-for="user of $store.getters.getOrdersList" v-bind:key="user" class="table__row">
                    <td class="table__column">{{ user.fullName }}</td>
                    <td class="table__column">{{ user.phone }}</td>
                    <td class="table__column">{{ user.email }}</td>
                    <td class="table__column">{{ user.description }}</td>
                    <td class="table__column">
                        <ul>
                            <li v-for="flavor of user.flavors" v-bind:key="flavor">{{ flavor }}</li>
                        </ul>
                    </td>
                    <td class="table__column">
                        <ul>
                            <li v-for="topping of user.topping" v-bind:key="topping">{{ topping }}</li>
                        </ul>
                    </td>
                </tr>
            </tbody>  
        </table>
    </div>
</template>
    
<script>
export default {
    name: 'TableComponent'
}  
</script>
    
<style scoped lang="scss">
.wrapper {
    width: 100%;
    min-height: 10rem;
    max-height: 26rem;
    overflow-x: auto;
    &::-webkit-scrollbar {    
        width: .5rem;  /* Tamaño del scroll en vertical */
        height: .5rem; /* Tamaño del scroll en horizontal */
        // display: none;  /* Ocultar scroll */
    }
    &::-webkit-scrollbar-track {
        border-radius: .5rem;
        background-color: var(--color-second);
    }
    /* Cambia elcolor de fondo y redondea las esquinas del thumb */
    &::-webkit-scrollbar-thumb {
        border-radius: .5rem;
        background: #fff;
    }
    /* Cambia el fondo y agrega una sombra */
    &::-webkit-scrollbar-thumb:hover {
        background: #fff;
        box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.1);
    }
}
/*-----------------------*\
    $Table
\*-----------------------*/
.table {
    --columns: 6;
    border: .1em solid var(--color-first);
    border-collapse: collapse;
    width: 80rem;
    &__row {
        display: flex;
    }

    &__head { 
        background-color: var(--color-first);
    }
    &__head &__row {
        padding: 2em 1em;
    }
    &__column-head {
        font-weight: 600;
        color: var(--color-text);
        text-transform: uppercase;
        width: calc(100% / var(--columns));
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &__content &__column {
        width: calc(100% / var(--columns));
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &__content [class*="table__column"] {
        padding: 1em;
        text-align: left;
        color: var(--color-text);
        border-bottom: solid 1px var(--color-second);
    }   
}
</style>