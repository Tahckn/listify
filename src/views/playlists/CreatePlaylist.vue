<template>
    <form>
        <h4>Create new Playlist</h4>
        <input type="text" required placeholder="Playlist title" v-model="data.title">
        <textarea name="" required placeholder="Playlist description" v-model="data.description" id="" cols="30"
            rows="10"></textarea>

        <!--* upload playlist image -->
        <label>Upload playlist cover image</label>
        <input type="file">
        <button>Create</button>
    </form>
</template>

<script setup >
import { reactive } from 'vue';

const data = reactive({
    title: '',
    description: '',
})

</script>
