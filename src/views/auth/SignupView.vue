<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign Up</h3>
    <input type="text" name="displayName" id="displayName" placeholder="Display Name" v-model="data.displayName" />
    <input type="email" name="email" id="email" placeholder="Email" v-model="data.email" />
    <input type="password" placeholder="Password" v-model="data.password" />
    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="!isLoading">Sign Up</button>
    <button v-if="isLoading">Loading</button>
  </form>
</template>

<script setup>
import { reactive } from 'vue'
import useSignup from '@/composables/useSignup'
import { useRouter } from 'vue-router';

const { error, signup, isLoading } = useSignup()
const router = useRouter()
const data = reactive({
  email: '',
  password: '',
  displayName: ''
})





const handleSubmit = async () => {
  const res = await signup(data.email, data.password, data.displayName)
  setTimeout(() => {

    if (!error) {
      router.push({ name: 'home' })
    }
  }, 1000)
}
</script>
