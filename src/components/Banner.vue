<template>
  <section
    class="text-white inline backdrop-blur backdrop-filter mt-10 bg-black/10 rounded-md shadow-md p-10"
  >
    <div class="max-w-3xl mx-auto text-center">
      <h1
        data-aos="fade-up"
        data-aos-duration="1500"
        class="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
      >
        Vue Live Chat
      </h1>

      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        class="flex justify-evenly m-2"
      >
        <img src="../assets/vue.svg" alt="Vue.js" />
        <img src="../assets/firebase.svg" alt="firebase" />
        <img src="../assets/tailwind.svg" alt="Tailwind" />
      </div>
      <p
        data-aos="fade-up"
        data-aos-duration="2000"
        class="max-w-xl mx-auto font-semibold mt-4 sm:leading-relaxed sm:text-xl"
      >
        Developed using Vue.js , Firebase and Tailwind.
      </p>

      <div
        data-aos="fade-up"
        data-aos-duration="2500"
        class="flex flex-wrap justify-center gap-4 mt-8"
      >
        <router-link
          class="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring"
          :to="{ name: 'Auth' }"
        >
          Learn More >
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
