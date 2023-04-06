<template>
  <div class="react">
    <h1>Making the values REACTIVE by changing the name and age with a ref</h1>
    
    <!-- the paragraph tag where the name and the age is -->
    <p>My name is {{ names }} and my age is {{ ages }}</p>
    <button @click="ages++">Age Icrement</button>

    <input type="text" v-model="names">
    
  </div>
  <br><br>
  <!-- the button tag with a click function -->
  <button @click="handleClick2">reactive</button>
</template>

<script>
import { ref } from 'vue'

export default {
  //the name of the component
  name: 'Reactive',
//this is the setup function
setup() {
    //inside here we can write any kind of normal javascript.
    //we can go grab data from elsewhere or create computed properties as well.
    //we can also create functions inside the setup hook.
    //composition API's are not reactive values.
    //Ref can be use to make values reactive (thats the most important thing to use Ref for NOT only for manipulating the DOM).
    //we create values, functions and return the vlaues or functions we created below the setup.
    //we can use template ref to store references to DOM elements in our template like the paragraph or h1 tag.

    //creating a ref
    const p = ref(null)

    //adding ref to the values so it can be REACTIVE (NOTE: the ref is a constant)
    const names = ref("Pince")
    const ages = ref(30)
    
    //creating a CLICKED FUNCTION to change the name to Mary and age to 25
    const handleClick2 = () => {
      names.value = "Mary"
      ages.value = 25
    }

    //returning the values, function and ref
    return { handleClick2, names, ages, }
  }
}
</script>