<template>
  <main>
    <TheWelcome />
  </main>
  <div class="hello">
    <h1>{{ name }}</h1>
    <p>Capital: {{ capital }}</p>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      name: '',
      capital: ''
    }
  },
  async mounted() {
    let query = `{
     countries(namePrefix: "America") {
         edges {
             node {
                 name
                 capital
                 }
             }
         }
     }`
    // API CALL
    try {
      let res = await fetch('https://graphql.country/', {
        method: 'POST',
        headers: {
          
        },
        body: JSON.stringify({ query })
      })
      res = await res.json()
      const response = res.data.countries.edges[0].node
      this.name = response.name
      this.capital = response.capital
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
