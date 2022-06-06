<script setup>
import { ref,defineEmits } from "vue";
import useSignUp from "@/composables/useSignUp";
import Spinner from "./Spinner.vue";
//refs
const fullname = ref("");
const email = ref("");
const password = ref("");
const btn = ref(true)
const emit = defineEmits(["goLogin","signUp"]);

const { error, signUp } = useSignUp();

const handleSubmit = async () => {
    btn.value = false
  await signUp(email.value, password.value, fullname.value);
  if (!error.value) {
    emit('signUp')    
  } else {
      btn.value = true
  }
  
};

const goLogin = () => {
emit("goLogin", true);
}
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
        v-if="btn"
          type="submit"
          class="block w-full px-5 py-3 text-xl font-medium text-white bg-indigo-600 rounded-lg"
        >
          Sign Up
        </button>
         <div v-else>
           <Spinner/>
       </div>
       <div v-if="error">
          <h3 class="text-red-900 text-md font-semibold">{{ error }}</h3>
        </div>


        <p class="text-sm text-center text-white">
          Already registered?
          <p class="underline cursor-pointer inline" @click="goLogin"
            >Sign In</p
          >
        </p>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
