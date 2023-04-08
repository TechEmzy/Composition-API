<template>
  <div class="compValue">
    <h1>Computed Value</h1>
                   <!-- we output the value in the template -->
    <!-- <p> {{ name }}</p> -->
    
    <!-- create an input field -->
    <input type="text" v-model="search">  
    <!-- we output the search term here, so that we see it as we type -->
    <p>Search term - {{ search }}</p>
    <!-- output all of those names in the template -->
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'

export default {
    name: "ComputedValue",

    setup() {
        // const name = computed(() => {
                       // this function returns a value, emmy.
            // return 'Emmy'
        // })

                     // we then return the "name".
        // return { name }

// the idea of a computed property is not just to return a simple value, but to computing on new value based on other values.
        
        // make a SEARCH property for the input field, set it to be empty
        const search = ref('')
        // create a ref with array of names
        const names = ref(['Emmy', 'Mike', 'Prince', 'James', 'Ibro', 'Lewis', 'Emafe'])
        // we create a computed property, which is going to return the updated array based on the search term.
        const matchingNames = computed(() => {
            return names.value.filter((name) => name.includes(search.value))
        })

        // then we return the SEARCH and NAMES here 
        return { names, search, matchingNames }
    }

}
</script>
