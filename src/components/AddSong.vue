<template>
    <div class="text-center mt-7 mb-5">
        <button v-show="!data.showForm" @click="data.showForm = !data.showForm">Add Songs</button>
        <form @submit.prevent="handleSong" v-if="data.showForm" class="relative p-4 max-w-full text-left">
            <h4>Add a New Song</h4>
            <button @click="data.showForm = !data.showForm"
                class="absolute py-1 hover:text-text hover:bg-warning px-2 text-xs top-0 right-2">X</button>
            <input autofocus @keydown.enter.prevent="handleSong()" type="text" placeholder="Song title" required
                v-model="data.title">
            <input @keydown.enter.prevent="handleSong()" type="text" placeholder="Artist" required
                v-model="data.artist">
            <p class="text-sm text-warning" v-if="data.error">{{ data.error }}</p>
            <button class="px-2.5">Add</button>
        </form>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import useDocument from '@/composables/useDocument'

const { updateDoc } = useDocument('playlists', props.playlist.id)

const props = defineProps({
    playlist: Object
})

const data = reactive({
    title: '',
    artist: '',
    showForm: false,
    error: '',
})

const handleSong = async () => {
    if (data.title.trim().length === 0 || data.artist.trim().length === 0) {
        data.error = 'please fill out all required fields '
    } else {
        const newSong = {
            title: data.title,
            artist: data.artist,
            id: Math.floor(Math.random() * 1000000)
        }
        await updateDoc({
            songs: [...props.playlist.songs, newSong]
        })
        data.title = ''
        data.artist = ''
        data.error = ''
    }
}

</script>
