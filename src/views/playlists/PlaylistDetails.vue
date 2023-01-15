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
            <p>song list here</p>
        </div>
    </div>
</template>

<script setup>
import useDocument from '@/composables/useDocument';
import getUser from '@/composables/getUser'
import getDocument from '@/composables/getDocument';
import useStorage from '@/composables/useStorage'
import { useRouter } from 'vue-router';
import { computed } from 'vue';

const router = useRouter()
const { user } = getUser()
const { deleteDoc, isLoading } = useDocument('playlists', props.id)

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


const { error, document: playlist } = getDocument('playlists', props.id)

const props = defineProps({
    id: String
})

</script>

