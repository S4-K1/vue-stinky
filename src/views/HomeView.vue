<script setup>
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { computed } from 'vue'

const countryQuery = gql`
  query {
    countries {
      edges {
        node {
          name
        }
      }
    }
  }
`

const { result } = useQuery(countryQuery)

const countries = computed(() => result.value?.countries.edges ?? [])

</script>

<template>
  <main>
    <h1>20 countries</h1>
    <ul>
      <li v-for="country in countries" :key="country.node.name">{{ country.node.name }}</li>
    </ul>
  </main>
</template>
