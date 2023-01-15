<template>
  <div class="bg-white/10 backdrop-blur-xl px-8 py-4 rounded-xl">
    <div v-if="error" class="error">Could not fetch the data</div>
    <div v-if="documents">
      <list-view :playlists="documents"></list-view>
    </div>
  </div>
</template>


<script setup>
import getCollection from '@/composables/getCollection'
import ListView from '../components/ListView.vue';

const { error, documents } = getCollection('playlists')

console.log(documents)

</script>


