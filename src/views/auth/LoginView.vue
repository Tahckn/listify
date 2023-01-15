<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>
    <input type="email" name="email" id="email" placeholder="Email" v-model="data.email" />
    <input type="password" placeholder="Password" v-model="data.password" />
    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="!isLoading">Log in</button>
    <button v-if="isLoading">Loading</button>
  </form>
</template>

<script setup>
import { reactive } from 'vue'
import useLogin from '@/composables/useLogin'
import { useRouter } from 'vue-router';

const router = useRouter()

const { error, login, isLoading } = useLogin()

const data = reactive({
  email: '',
  password: ''
})


const handleSubmit = async () => {
  const res = await login(data.email, data.password)
  setTimeout(() => {

    if (!error.value) {
      router.push({ name: 'home' })
    }
  }, 1000)
}

</script>
