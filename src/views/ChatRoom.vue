<script setup>
import { useRouter } from "vue-router";
import getUser from "../composables/getUser";
import Navbar from "../components/Navbar.vue";
import { watchEffect } from "vue";
import NewChatForm from "../components/NewChatForm.vue";
import ChatWindow from "../components/ChatWindow.vue";
const router = useRouter();
const { user } = getUser();

watchEffect(() => {
  if (!user.value) {
    router.push({ name: "Welcome" });
  }
});
</script>

<template>
  <Navbar />
  <div class="flex flex-col w-full h-screen">
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<style lang="scss" scoped></style>
