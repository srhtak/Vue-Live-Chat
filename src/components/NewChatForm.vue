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
    <div>
      <div class="w-full max-w-sm mx-auto mt-3">
        <textarea
          @keypress.enter="handleSubmit"
          v-model="message"
          class="h-24 w-full border rounded-xl overflow-hidden resize-none focus:border-blue-500 ring-1 ring-transparent focus:ring-blue-500 focus:outline-none text-black p-2 transition ease-in-out duration-300"
          placeholder="Type a message and hit enter to send"
        ></textarea>
      </div>
    </div>
  </form>
  <div class="text-red-500">{{ error }}</div>
</template>

<style lang="scss" scoped></style>
