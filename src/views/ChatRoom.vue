<script setup>
import Navbar from "../components/Navbar.vue";
import NewChatForm from "../components/NewChatForm.vue";
import ChatWindow from "../components/ChatWindow.vue";
</script>

<template>
  <Navbar />
  <div class="flex flex-col w-full">
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<style lang="scss" scoped></style>
