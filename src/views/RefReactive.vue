<template>
  <div class="reactive">
    <h1>Using Ref here</h1>
  
    <!-- output the name and the age in the DOM -->
    <p>{{ dataOne.name }} - {{ dataOne.age }}</p>

    <!-- click button to update my name and my age -->
    <button @click="updateDataOne">udate my data</button>

    <h1>Using Reactive here</h1>
    <!-- output the name and the age in the DOM -->
    <p>{{ dataTwo.name }} - {{ dataTwo.age }}</p>
    <!-- click button to update my name and my age -->
    <button @click="updateDataTwo">udate my data</button>
  </div>

</template>

<script>
//using REACTIVE by importing it from the library
import { ref, reactive } from 'vue';

export default {
    // my component name
    name: 'RefReactive',
    // setup function
    setup() {
        //using ref here
        const dataOne = ref({ name: 'Emmy', age: 29 })
        //using reactive here
        const dataTwo = reactive({ name: 'Prince', age: 27 })

        // NOTE: reactive dont work with primitive value, thats why ref has more advantage over reactive.
        // const nameOne = ref('emmy')         correct
        // const nameTwo = reactive('emmy')    wrong

        // const updateName = () => {
          // nameOne.value = ('mary')     correct
          // nameTwo.vale = ('mary')      wrong
        // }

        // creating an UPDATE FUNCTION to change the age and name
        const updateDataOne = () => {
            dataOne.value.age = 35
            dataOne.value.name = "Emafe"
        }

        const updateDataTwo = () => {
            dataTwo.age = 29
            dataTwo.name = "Emzy"
        }

        return { dataOne, updateDataOne, dataTwo, updateDataTwo}
    }
}
</script>

