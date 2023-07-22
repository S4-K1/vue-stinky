<template>
  <div class="bzzz">
    <div id="gist"></div>
  </div>
</template>

<script>
/* eslint-disable no-useless-escape */
import postscribe from 'postscribe'
export default {
  name: 'Gist-beeMovie',
  mounted: function () {
    postscribe(
      '#gist',
      `<script src="https://gist.github.com/MattIPv4/045239bc27b16b2bcf7a3a9a4648c08a.js"><\/script>`
    )
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .bzzz {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
