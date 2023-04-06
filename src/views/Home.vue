<template>
  <div class="home">
    <!-- the header tag to display HOME -->
    <h1>Understanding how to use composition API</h1>

    <!-- the ref will be a reference to the paragraph tag -->
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
  
  </div>
  
  <br><br>
  <!-- the button tag with a click function -->
  <button @click="handleClick1">click me</button>
</template>

<script>
import { ref } from 'vue'

export default {
  //the name of the component
  name: 'Home',

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

    //creating the values or data
    let name = "Emmy"
    let age = 31

    //adding ref to the values so it can be REACTIVE (NOTE: the ref is a constant)
    const names = ref("Pince")
    const ages = ref(30)

    //creating a CLICK'd FUNCTION for a button to say "i got clicked".
    const handleClick1  = () => {
      //print out the value of the p tag that was reference (p=reference object, p.value=this is the paragraph content).
      console.log(p, p.value)
      //this add class to the p tag
      p.value.classList.add("paragh")
      //this changes the paragraph content to Hello Emmy
      p.value.textContent = "Hello Emmy"
    }
    
    //creating a CLICKED FUNCTION to change the name to Mary and age to 25
    const handleClick2 = () => {
      names.value = "Mary"
      ages.value = 25
    }

    //returning the values, function and ref
    return {name, age, handleClick1, handleClick2, names, ages, p}

    console.log('setup')
  }
}
</script>

  
