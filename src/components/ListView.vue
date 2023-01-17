<template>
    <div v-for="playlist in playlists" :key="playlist.id">
        <router-link :to="{ name: 'playlistDetails', params: { id: playlist.id } }">
            <div class="flex items-center p-5 rounded-lg bg-white/10 
        my-4 mx-0 transition-all  ease-linear duration-100
         hover:scale-[1.02] hover:bg-white/20 hover:shadow-xl">
                <div class="max-h-[100px] max-w-[100px]">
                    <img class="h-[100px] w-[100px] overflow-hidden rounded-md object-cover block"
                        :src="playlist.coverUrl">
                </div>
                <div class="my-0 ml-7">
                    <h3 class="font-semibold tracking-tight">{{ playlist.title }}</h3>
                    <p class="text-sm font-thin tracking-normal">Created by {{ playlist.userName }}</p>
                </div>
                <div class="ml-auto">
                    <p>{{ playlist.songs.length }}</p>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
    playlists: Array,
})

</script>
