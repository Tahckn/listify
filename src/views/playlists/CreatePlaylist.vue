<template>
    <form @submit.prevent="handleSubmit">
        <h2>Create new Playlist</h2>
        <input type="text" required placeholder="Playlist title" v-model="data.title">
        <textarea name="" required placeholder="Playlist description" v-model="data.description" id="" cols="30"
            rows="10"></textarea>

        <!--* upload playlist image -->
        <div class=" border-[1px] flex flex-col rounded-lg border-items border-opacity-30">
            <label class="text-center font-light text-sm block mt-7">Upload playlist cover image</label>
            <input id="inp" accept="image/png, image/jpg, image/gif, image/jpeg"
                class="text-transparent file:-mb-3 file:mx-auto file:block w-full border-0 text-text font-light"
                type="file" @change="handleChange">
            <label class="text-text font-light text-center">{{ data.imageName }}</label>
        </div>
        <div class="error"></div>

        <button class="mt-5">Create</button>
    </form>
</template>

<script setup >
import { reactive } from 'vue';

const data = reactive({
    title: '',
    description: '',
    imageName: ''
})

const handleSubmit = () => {
    console.log(data.title, data.description)
}

const handleChange = (e) => {
    console.log(e.target.files[0].name)
    data.imageName = e.target.files[0].name
}

</script>
