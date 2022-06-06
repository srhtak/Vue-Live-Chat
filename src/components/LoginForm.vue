<script setup>
import { ref, defineEmits } from "vue";
import useLogin from "@/composables/useLogin";
import Spinner from "./Spinner.vue";

const emit = defineEmits(["goRegister","login"]);

const email = ref("");
const password = ref("");
const btn = ref(true)

const { error, login } = useLogin();

const handleSubmit = async () => {
    btn.value = false
  await login(email.value, password.value);
  if (!error.value) {
    console.log("user login");
    emit("login");
  } else {
      btn.value = true
  }
};

const goRegister = () => {
  emit("goRegister", false);
};
</script>

<template>
  <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div class="max-w-lg mx-auto">
      <h1 class="text-2xl font-bold text-center text-white sm:text-3xl">
        Welcome Back 🥳
      </h1>

      <form
        @submit.prevent="handleSubmit"
        class="p-8 backdrop-blur backdrop-filter bg-black/10 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"
      >
        <p class="text-lg font-medium text-white">Sign in to your account</p>

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
          Sign In
        </button>
       <div v-else>
           <Spinner/>
       </div>
       <div>
           {{error}}
       </div>
        <p class="text-sm text-center text-white">
          No account?
          <p class="underline inline cursor-pointer" @click="goRegister">Sign Up</p>
        </p>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
