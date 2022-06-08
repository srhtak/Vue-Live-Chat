<script setup>
import { timestamp } from "@/firebase/config";
import getUser from "../composables/getUser";
import useCollection from "../composables/useCollection";
import { ref } from "vue";

const message = ref("");
const { user } = getUser();
const { error, addDoc } = useCollection("messages");

const handleSubmit = async () => {
  const chat = {
    name: user.value.displayName,
    message: message.value,
    createdAt: timestamp(),
  };
  await addDoc(chat);
  if (!error.value) {
    message.value = "";
  }
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
  <div class="text-red-500">{{ error }}</div>
</template>

<style lang="scss" scoped></style>
