<script setup>
import { ref } from "vue";

const fullname = ref("");
const email = ref("");
const password = ref("");

const handleSubmit = () => {
  console.log(fullname.value, email.value, password.value);
};
</script>

<template>
  <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div class="max-w-lg mx-auto">
      <h1 class="text-2xl font-bold text-center text-white sm:text-3xl">
        Get started today
      </h1>

      <form
        @submit.prevent="handleSubmit"
        class="p-8 backdrop-blur backdrop-filter bg-black/10 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"
      >
        <p class="text-lg font-medium text-white">Sign up to your account</p>
        <div>
          <label for="email" class="text-sm text-white font-medium"
            >Fullname</label
          >

          <div class="relative mt-1">
            <input
              type="text"
              id="fullname"
              v-model="fullname"
              class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Serhat"
            />
          </div>
        </div>

        <div>
          <label for="email" class="text-sm text-white font-medium"
            >Email</label
          >

          <div class="relative mt-1">
            <input
              type="email"
              id="email"
              v-model="email"
              class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="...@example.com"
            />
          </div>
        </div>

        <div>
          <label for="password" class="text-sm font-medium text-white"
            >Password</label
          >

          <div class="relative mt-1">
            <input
              type="password"
              id="password"
              v-model="password"
              class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Enter password"
            />
          </div>
        </div>

        <button
          type="submit"
          class="block w-full px-5 py-3 text-xl font-medium text-white bg-indigo-600 rounded-lg"
        >
          Sign Up
        </button>

        <p class="text-sm text-center text-white">
          Already registered?
          <router-link class="underline" :to="{ name: 'Login' }"
            >Sign In</router-link
          >
        </p>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
