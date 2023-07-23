<script setup>
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { computed } from 'vue'

const props = defineProps({
  searchQuery: {
    type: String,
    required: true
  }
})

const countryQuery = gql`
  query countries{
    countries (name_Istartswith: "${props['searchQuery']}")  {
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
  <ul>
    <li v-for="country in countries.slice(0, 20)" :key="country.node.name">
      {{ country.node.name }}
    </li>
  </ul>
</template>
