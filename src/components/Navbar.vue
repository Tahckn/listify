<template>
    <div class="py-4 px-2.5 mb-12">
        <nav class="flex md:flex-row flex-col justify-between items-center max-w-screen my-0 mx-4">
            <h1 class="bg-clip-text text-text text-4xl font-bold">
                <RouterLink to="/"><img class="max-h-40 drop-shadow-2xl md:-ml-8" src="@/assets/logo.png"
                        alt="logo.png">
                </RouterLink>
            </h1>
            <div class="space-x-3 mb-3">
                <router-link class="text-items border-0 py-2 px-3 cursor-pointer inline-block" v-if="user"
                    :to="{ name: 'createPlaylists' }">Create Playlist</router-link>
                <router-link class="text-items border-0 py-2 px-3 cursor-pointer inline-block" :active-class="item"
                    v-if="user" :to="{ name: 'userPlaylists' }">My
                    Playlists</router-link>
                <span v-if="user" class="font-light inline-block ml-4 pl-4 border-l-[1px]">Hi, {{
                    user.displayName
                }}</span>
                <button v-if="user" @click="handleLogout">Logout</button>
                <router-link v-if="!user" :to="{ name: 'signup' }" class="btn">Signup</router-link>
                <router-link v-if="!user" :to="{ name: 'login' }" class="btn">Login</router-link>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import useLogout from '@/composables/useLogout'
import getUser from '@/composables/getUser'
import { useRouter } from 'vue-router'

const router = useRouter()
const { user } = getUser()
const { logout } = useLogout()

const handleLogout = async () => {
    await logout()
    setTimeout(() => {
        router.push({ name: 'login' })
    }, 1000);
}
</script>
