<template>
  <div v-if="showLogin">
    <LoginForm @login="enterChat" @goRegister="handleForm" />
  </div>
  <div v-else>
    <RegisterForm @signUp="enterChat" @goLogin="handleForm" />
  </div>
</template>

<script setup>
import LoginForm from "@/components/LoginForm.vue";
import RegisterForm from "@/components/RegisterForm.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const showLogin = ref(false);
const router = useRouter();

const handleForm = (value) => {
  showLogin.value = value;
};

const enterChat = () => {
  router.push({ name: "ChatRoom" });
};
</script>

<style lang="scss" scoped></style>
