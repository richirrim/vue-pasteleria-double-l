<template>
    <section id="js-flavors" class="flavors  l-section  l-container  center-content">
        <h2 class="flavors__title">Selecciona máximo dos sabores</h2>
        <span class="flavors__text">Sabores seleccionados: {{ $store.getters.getFlavorCounter }}/2</span>
        <div class="grid">
            <div v-for="(flavor, index) in flavors" v-bind:key="flavor" class="card  card-flavor">
                <div v-bind:class="`card  card-flavor__color  card-flavor__${formatTextToKebabCase(flavor.text)}`"></div>
                <span class="card-flavor__price">${{ flavor.price }}MXN</span>
                <div class="card-flavor__input-control">
                    <input
                        class="card-flavor__input" 
                        type="checkbox" 
                        ref="inputRef"
                        v-bind:id="`card-flavor${index}`"
                        v-bind:value="flavor.text" 
                        v-on:change="onChange">
                    <label class="card-flavor__label" v-bind:for="`card-flavor${index}`">{{ flavor.text }}</label>
                </div>
            </div>
        </div>
    </section>
</template>
    
<script>

export default {
    name: 'FlavorsComponent',
    data() {
        return {
            listDisabledInputEl: [], 
            listSelectedEl: [],
            flavors: [
                {
                    price: '15',
                    text: 'Vainilla'
                },
                {
                    price: '15',
                    text: 'Chocolate'
                },
                {
                    price: '200',
                    text: 'Limon'
                },
                {
                    price: '16',
                    text: 'Uva loca'
                },
                {
                    price: '15',
                    text: 'Mora azul'
                },
                {
                    price: '18',
                    text: 'Chamoyada'
                }
            ]
        }
    },
    methods: {
        onChange(e) {
            const LIMIT_SELECTED_ELEMENTS = 2
            const inputElListRef = this.$refs.inputRef
            this.$store.commit('productsAccountant', {
                accountant: 'flavorsAccountant', 
                isChecked: e.target.checked
            })
            this.listDisabledInputEl = []
            this.listSelectedEl = []
            this.createCheckboxListEl(inputElListRef)
            
            if (this.$store.getters.getFlavorCounter === LIMIT_SELECTED_ELEMENTS) {
                this.disableUncheckedInputs() 
            } else {
                this.removeDisabledAttribute(inputElListRef)
            }
            // Mientras no haya dos elemetos en el array
            // es inicesario enviar la info.
            if (this.listSelectedEl.length === 2) {
                this.submitCheckboxList(this.listSelectedEl)
            }
        },
        createCheckboxListEl(inputElListRef) {
            for (let inputEl of inputElListRef) {
                if (inputEl.checked) {
                    this.listSelectedEl.push(inputEl)
                } else {
                    if (this.listSelectedEl > 0) this.removeElementArray(inputEl)
                    this.listDisabledInputEl.push(inputEl)
                }  
            }
        },
        removeElementArray(inputElListRef) {
            this.listSelectedEl = this.listSelectedEl.filter(el => el.id === inputElListRef.id)
        },
        disableUncheckedInputs() {
            for (let inputEl of this.listDisabledInputEl) {
                inputEl.setAttribute('disabled', '')
            }
        },
        removeDisabledAttribute(inputElListRef) {
            for (let inputEl of inputElListRef) {
                if (!inputEl.checked) {
                    inputEl.removeAttribute('disabled')
                }   
            }
        },
        formatTextToKebabCase(text) {
            return text.trim().toLowerCase().split(' ').join('-')
        },
        submitCheckboxList(element) {
            this.$emit('getCheckboxList', element)
        } 
    }
}
</script>
    
<style scoped lang="scss">
.flavors {
    display: flex;
    justify-content: center;
    &__title {
        width: 100%;
    }
    &__text {
        display: inline-block;
        margin-bottom: var(--gutter);
        font-size: 1.4em;
        width: 100%;
    }
} 


/*-----------------------*\
    $Card flavor
\*-----------------------*/
.card-flavor {
    border: 1px solid var(--color-first);
    margin-bottom: 0;
    background-color: transparent;
    box-shadow: none;
    &__color {
        --width: 1em;
        margin-left: auto;
        margin-right: auto;
        width: var(--width);
        height: var(--width);
        box-shadow: rgba(0, 0, 0, 0.1) 0 3px 6px;
    }
    &__price {
        display: inline-block;
        font-size: 1.2em;
        width: 100%;
    }
    &__input-control {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &__input {
        margin-right: .5em;
    }
    &__label {
        font-size: 1.6em;
        cursor: pointer;
    }
    & .card-flavor__vainilla {
        background-color: #F3E5AB;
    }
    & .card-flavor__chocolate {
        background-color: #a1887f;
    }
    & .card-flavor__limon {
        background-color: #aed581;
    }
    & .card-flavor__uva-loca {
        background-color: #ba68c8;
    }
    & .card-flavor__mora-azul {
        background-color: #4fc3f7;
    }
    & .card-flavor__chamoyada {
        background-color: #ff8a65;
    }
}
</style>