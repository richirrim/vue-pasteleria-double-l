<template>
    <h2 class="toppings__title">Selecciona máximo 4 toppingss</h2>
    <span class="toppings__text">Topping seleccionados: {{ getToppingsAccountant }}/2</span>
    <div v-for="(topping, index) in toppings" v-bind:key="topping" class="card  card-topping">
        <img v-bind:class="classComponentName+'__image'" v-bind:src="requiredUrl(topping.imageName)" alt="Ejemplo de un pastel base de un nivel.">
        <span class="card-topping__price">${{ topping.price }}MXN</span>
        <div class="card-topping__input-control">
            <input
                class="card-topping__input" 
                type="checkbox" 
                ref="inputRef"
                v-bind:id="`card-topping${index}`"
                v-bind:value="formatTextToKebabCase(topping.text)" 
                v-on:change="onChange">
            <label class="card-topping__label" v-bind:for="`card-topping${index}`">{{ topping.text }}</label>
        </div>
    </div>
</template>
    
<script>
export default {
    name: 'ToppingComponent',
    data() {
        return {
            toppings: [
                {
                    price: '6',
                    imageName: 'topping-fresas',
                    text: 'Fresas',
                    classComponentName: 'card-topping'
                },
                {
                    price: '15',
                    imageName: 'topping-chispast',
                    text: 'Chispas',
                    classComponentName: 'card-topping'
                },
                {
                    price: '8',
                    imageName: 'topping-oreo',
                    text: 'Oreo',
                    classComponentName: 'card-topping'
                },
                {
                    price: '10',
                    imageName: 'topping-chocolate',
                    text: 'Chocolate',
                    classComponentName: 'card-topping'
                },
                {
                    price: '20',
                    imageName: 'topping-text',
                    text: 'Frase',
                    classComponentName: 'card-topping'
                },
                {
                    price: '5',
                    imageName: 'topping-crema',
                    text: 'Crema',
                    classComponentName: 'card-topping'
                }
            ]
        }
    },
    methods: {
        onChange(e) {
            const MAXIMUM_SELECTED_FLAVORS = 2
            const inputElList = this.$refs.inputRef
            this.$store.commit('productsAccountant', {
                accountant: 'toppingsAccountant', 
                isChecked: e.target.checked
            })
            this.listDisabledInputEl = []
            this.createInputsListUnchecked(inputElList)
            this.getToppingsAccountant === MAXIMUM_SELECTED_FLAVORS 
                ? this.disableUncheckedInputs() 
                : this.removeDisabledAttribute(inputElList)
        },
        createInputsListUnchecked(inputElList) {
            for (let inputEl of inputElList) {
                if (!inputEl.checked) {
                    this.listDisabledInputEl.push(inputEl)
                }   
            }
        },
        disableUncheckedInputs() {
            for (let inputEl of this.listDisabledInputEl) {
                inputEl.setAttribute('disabled', '')
            }
        },
        removeDisabledAttribute(inputElList) {
            for (let inputEl of inputElList) {
                if (!inputEl.checked) {
                    inputEl.removeAttribute('disabled')
                }   
            }
        },
        formatTextToKebabCase(text) {
            return text.trim().toLowerCase().split(' ').join('-')
        },
        requiredUrl(imageName) {
            return imageName ? require(`@/assets/images/${imageName}.png`) : ''
        }
    },
    computed: {
        getToppingsAccountant() {
            return this.$store.state.toppingsAccountant
        }
    }
}
</script>
    
<style scoped lang="scss"> 
.toppings {
    gap: var(--gutter);
    justify-content: center;
    &__title {
        width: 100%;
    }
    &__text {
        display: inline-block;
        font-size: 1.4em;
        width: 100%;
    }
}  


/*-----------------------*\
    $Card toppings
\*-----------------------*/
.card-topping {
    flex-basis: var(--grid-3-columns);
    border: 1px solid var(--color-first);
    background-color: transparent;
    box-shadow: none;
    margin-bottom: 0;
    &__price {
        display: inline-block;
        width: 100%;
        font-size: 1.4em;
    }
    &__image {
        width: 30%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: .5em;
    }
    &__input-control {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &__label {
        margin-left: .5em;
        font-size: 1.6em;
        cursor: pointer;
    }
    &__text {
        display: inline-block;
        text-align: center;
        width: 100%;
    }
}
</style>