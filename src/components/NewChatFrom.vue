<script setup>
import { timestamp } from "@/firebase/config";
import getUser from "../composables/getUser";
import { ref } from "vue";

const message = ref("");
const { user } = getUser();

const handleSubmit = async () => {
  const chat = {
    name: user.value.displayName,
    message: message.value,
    createdAt: timestamp(),
  };
  console.log(chat);
  message.value = "";
};
</script>

<template>
  <form>
    <textarea
      class="text-blue-500"
      @keypress.enter="handleSubmit"
      v-model="message"
      name="message"
      id=""
      cols="30"
      rows="10"
    >
    </textarea>
  </form>
</template>

<style lang="scss" scoped></style>
