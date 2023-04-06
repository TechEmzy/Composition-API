<template>
  <div class="reactive">
    <h1>Ref vs Reactive</h1>
    <h3>using REACTIVE by importing it from the library</h3>
    <br>

    <!-- output the name and the age in the DOM -->
    <p>{{ data.name }} - {{ data.age }}</p>

    <!-- click button to update my name and my age -->
    <button @click="updateData">udate my data</button>
  </div>

</template>

<script>
import {ref, reactive} from vue

export default {
    // my component name
    name: 'RefReactive',
    // setup function
    setup() {
        const data = ref({ name: "Emmy", age: "29"})

        // creating an UPDATE FUNCTION to change the age and name
        const updateData = () => {
            data.value.age = 35
        }

        return { data, updateData}
    }
}
</script>
