<template>
    <select :modelValue="modelValue" @change="changeOption">
        <option disabled selected value="">Choose</option>
        <option 
        v-for="option in options" 
        :key="option.value" 
        :value="option.value">
            {{ option.name }}
        </option>
    </select>
</template>

<script>

export default {
    name: 'mySelect',

    props:{
        modelValue:{
            type: String
        },

        options:{
            type: Array,
            default: () => []
        }
    },

    methods: {
        changeOption(event){
            this.$emit('update:modelValue', event.target.value);
        }
    }

}

</script>

<style scoped>
    
</style>