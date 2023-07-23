<script setup>
import SearchResults from '../components/SearchResults.vue'
import { ref } from 'vue'

const search = ref('')

function onEnter(content) {
  search.value = content
}
</script>

<template>
  <main>
    <h1>20 countries</h1>
    <SearchResults :key="search" :searchQuery="search" />
    <input
      type="text"
      v-model="input"
      v-on:keypress.enter="onEnter(input)"
      placeholder="Search country"
    />
  </main>
</template>
