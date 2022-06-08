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
  <div class="flex justify-center items-center">
    <div
      class="w-4/5 backdrop-blur backdrop-filter rounded-md shadow-lg bg-black/20 height overflow-y-scroll overflow-x-hidden p-6"
      v-auto-animate
    >
      <div
        class="border-l-4 p-2 border-l-pink-700 rounded-md shadow-2xl mb-3 border-opacity-30"
        v-for="doc in formattedDocuments"
        :key="doc.id"
      >
        <div class="flex">
          <h1
            class="text-2xl font-bold mr-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
          >
            {{ doc.name }}:
          </h1>
          <h2 class="font-semibold mt-1 text-white">
            {{ doc.message }}
          </h2>
        </div>
        <h2 class="text-xs text-white">{{ doc.createdAt }} ago</h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.height {
  height: 400px;
}
</style>
