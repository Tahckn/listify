<template>
    <div>
        <h2>My Playlists</h2>
        <div v-if="playlists">
            <ListView :playlists="playlists" />
        </div>
        <router-link class="btn" v-if="user" :to="{ name: 'createPlaylists' }">Create Playlist</router-link>
    </div>
</template>

<script setup>
import getCollection from '@/composables/getCollection'
import getUser from '@/composables/getUser'
import ListView from '@/components/ListView.vue';

const { user } = getUser()
const { documents: playlists } = getCollection(
    'playlists',
    ['userId', '==', user.value.uid]
)

console.log(playlists)

</script>
