<script setup>
  import { useQuery} from '@vue/apollo-composable'
  import gql from 'graphql-tag'
import { watchEffect, computed } from 'vue';

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

  const items = computed(() => result.value?.countries ?? [])

  watchEffect(() => {
    console.log('Here stupid', items)
  })
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>

