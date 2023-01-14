<template>
    <div class="py-4 px-2.5 mb-12">
        <nav class="flex justify-between items-center max-w-screen my-0 mx-auto mx-16">
            <h1 class="bg-clip-text text-text text-4xl font-bold ">
                <RouterLink to="/"><img class="max-h-44" src="@/assets/logo.png" alt="logo.png"></RouterLink>
            </h1>
            <div class="space-x-3">
                <button>Logout</button>
                <router-link to="signup" class="btn">Signup</router-link>
                <router-link to="login" class="btn">Login</router-link>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

</script>


