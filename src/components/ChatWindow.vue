<script setup>
import getCollection from "@/composables/getCollection";

const { error, documents } = getCollection("messages");
</script>

<template>
  <div>
    <div v-if="error">{{ error }}</div>
  </div>
  <div>
    <div v-for="doc in documents" :key="doc.id">
      {{ doc }}
    </div>
  </div>
  serhat
</template>

<style lang="scss" scoped></style>
