<template>
    <form @submit.prevent="handleSubmit">
        <h2>Create new Playlist</h2>
        <input type="text" required placeholder="Playlist title" v-model="data.title">
        <textarea name="" required placeholder="Playlist description" v-model="data.description"></textarea>

        <!--* upload playlist image -->
        <div class=" border-[1px] flex flex-col rounded-lg border-items border-opacity-30">
            <label class="text-center font-light text-sm block mt-7">Upload playlist cover image</label>
            <input id="inp" accept="image/png, image/jpg, image/jpeg"
                class="text-transparent file:-mb-7 file:mx-auto file:block w-full border-0 text-text font-light"
                type="file" @change="handleChange">
            <label :class="[data.isError ? 'text-warning' : '']"
                class="text-text text-sm font-light text-center mb-5">{{ data.imageName }}</label>
        </div>
        <div class="error"></div>

        <button v-if="!data.isLoading" class="mt-1 flex justify-center items-center transition-all duration-100">
            Create <svg v-if="data.completed" aria-hidden="true"
                class=" flex justify-center items-center ml-2 w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0"
                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"></path>
            </svg>
        </button>
        <button v-else disabled class="mt-1 flex justify-center transition-all duration-100 items-center">Saving <div
                role="status">
                <svg aria-hidden="true" class="w-5 h-5 ml-2 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                    viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor" />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill" />
                </svg>
            </div></button>
    </form>
</template>

<script setup >
import { reactive } from 'vue';
import useStorage from '@/composables/useStorage'
import useCollection from '@/composables/useCollection'
import getUser from '@/composables/getUser'
import { timestamp } from '@/firebase/config'
import { useRouter } from 'vue-router';


const { url, filePath, uploadImage } = useStorage()
const { error, addDoc } = useCollection('playlists')
const { user } = getUser()
const router = useRouter()

const data = reactive({
    title: '',
    description: '',
    imageName: '',
    file: null,
    isError: false,
    isLoading: false,
    completed: false
})

//* allowed file types
const types = ['image/png', 'image/jpg', 'image/jpeg']

const handleSubmit = async () => {
    if (data.file) {
        data.isLoading = true
        await uploadImage(data.file)
        const res = await addDoc({
            title: data.title,
            description: data.description,
            userId: user.value.uid,
            userName: user.value.displayName,
            coverUrl: url.value,
            filePath: filePath.value,
            songs: [],
            createdAt: timestamp()
        })
        data.isLoading = false
        data.completed = true
        setTimeout(() => {
            data.completed = false
        }, 2000)
        if (!error.value) {
            router.push({ name: 'playlistDetails', params: { id: res.id } })
        }
    }
}

const handleChange = (e) => {
    const selected = e.target.files[0]
    if (selected && types.includes(selected.type)) {
        data.imageName = selected.name
        data.file = selected
        data.isError = false
    } else {
        data.imageName = 'Please select an image (png, jpg, jpeg)'
        data.file = null
        data.isError = true
    }
}

</script>
