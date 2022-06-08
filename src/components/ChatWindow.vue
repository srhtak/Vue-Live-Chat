<script setup>
import getCollection from "@/composables/getCollection";
import { formatDistanceToNow } from "date-fns";
import { computed } from "vue";
const { error, documents } = getCollection("messages");

const formattedDocuments = computed(() => {
  if (documents.value) {
    return documents.value.map((doc) => {
      let time = formatDistanceToNow(doc.createdAt.toDate());
      return { ...doc, createdAt: time };
    });
  }
});
</script>

<template>
  <div>
    <div v-if="error">{{ error }}</div>
  </div>
  <div
    class="w-5/6 bg-red-200 h-2/3 overflow-y-scroll overflow-x-hidden p-6"
    v-auto-animate
  >
    <div v-for="doc in formattedDocuments" :key="doc.id">
      <h1 class="text-xl">{{ doc.name }}</h1>
      <h2 class="font-semibold">{{ doc.message }}</h2>
      <h2 class="text-blue-400">{{ doc.createdAt }} ago</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
