<template>
  <div class="item">
    <div v-if="error" class="error">Could not fetch the data</div>
    <div v-if="documents">
      <div v-for="doc in documents" :key="doc.id">{{ doc.title }}</div>
    </div>
  </div>
</template>


<script setup>
import getCollection from '@/composables/getCollection'

const { error, documents } = getCollection('playlists')

console.log(documents)

</script>


