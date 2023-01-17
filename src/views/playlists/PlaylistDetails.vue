<template>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="playlist" class="grid grid-cols-2 gap-20">
        <!--* playlist information -->
        <div class="text-center max-w-sm">
            <div class="shadow-xl overflow-hidden drop-shadow-xl max-w-sm rounded-xl">
                <img class="block object-cover h-auto w-full " :src="playlist.coverUrl">
            </div>
            <h2 class="uppercase text-text/90 text-lg md:text-2xl mt-5">{{ playlist.title }}</h2>
            <p class="mb-5 text-text/50 text-xs md:text-sm">Created by {{ playlist.userName }}</p>
            <p class="mb-5 text-text/80 text-sm md:text-base ">{{ playlist.description }}</p>
            <button v-if="ownership" @click="handleDelete"
                class="bg-transparent text-sm  ring-1 ring-opacity-60 ring-warning hover:bg-warning">Delete
                Playlist</button>
        </div>

        <!--* song list -->
        <div>
            <p v-if="!playlist.songs.length">No songs have been added to this playlist yet.</p>
            <div v-for="song in playlist.songs" :key="song.id">
                <div class=" drop-shadow-2xl mx-auto py-2 px-3 rounded-lg bg-white/20 backdrop-blur-xl flex justify-between 
                     mb-3 items-center relative">
                    <div>
                        <h3 class="font-normal md:text-lg text-sm">{{ song.title }}</h3>
                        <p class="text-sm md:font-light font-extralight">{{ song.artist }}</p>
                    </div>

                    <button @click="songDelete(song.id)" v-if="ownership"
                        class="absolute hover:bg-warning rounded-md hover:fill-text hover:stroke-2 fill-items bg-transparent py-0.5 px-0.5 ring-0 top-0 right-2">
                        <Trash />
                    </button>
                </div>
            </div>
            <AddSong v-if="ownership" :playlist="playlist" />
        </div>
    </div>
</template>

<script setup>
import Trash from '../../assets/icons/trash.svg'
import useDocument from '@/composables/useDocument';
import getUser from '@/composables/getUser'
import getDocument from '@/composables/getDocument';
import useStorage from '@/composables/useStorage'
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import AddSong from '../../components/AddSong.vue';

const router = useRouter()
const { user } = getUser()
const { deleteDoc, isLoading, updateDoc } = useDocument('playlists', props.id)

const { deleteImage } = useStorage()

const ownership = computed(() => {
    return playlist.value && user.value && user.value.uid == playlist.value.userId
})

const handleDelete = async () => {
    await deleteImage(playlist.value.filePath)
    await deleteDoc()
    setTimeout(() => {
        router.push({ name: 'home' })
    }, 400)
}

const songDelete = async (id) => {
    const songs = playlist.value.songs.filter((song) => song.id != id)
    await updateDoc({ songs })
}


const { error, document: playlist } = getDocument('playlists', props.id)

const props = defineProps({
    id: String
})

</script>

