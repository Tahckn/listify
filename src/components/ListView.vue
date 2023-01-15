<template>
    <div v-for="playlist in playlists" :key="playlist.id">
        <div>
            <img :src="playlist.coverUrl">
        </div>
        <div>
            <h3>{{ playlist.title }}</h3>
            <p>Created by {{ playlist.userName }}</p>
        </div>
        <div>
            <p>{{ playlist.songs.length }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    playlists: Array,
})

</script>
