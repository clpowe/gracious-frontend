<template>
  <div>
    <section class="container mx-auto py-24">
      <img src="/Hero_Logo.svg" sizes="" class="mx-auto" />
    </section>
    <section class="container mx-auto py-10">
      <div
        class="flex flex-col text-center md:flex-row uppercase justify-around"
      >
        <nuxt-link
          class="btn"
          :to="{
            path: '/store/all',
          }"
          >all</nuxt-link
        >
        <nuxt-link
          class="btn"
          :to="{
            path: '/store/bracelets',
          }"
          >BRACELETS</nuxt-link
        >
        <nuxt-link class="btn" to="/store/necklaces">necklaces</nuxt-link>
        <nuxt-link class="btn" :to="{ path: '/store/earrings' }"
          >EARRINGS</nuxt-link
        >
        <nuxt-link class="btn" :to="{ path: '/store/handbags' }"
          >HANDBAGS</nuxt-link
        >
        <nuxt-link class="btn" :to="{ path: '/store/scarves' }"
          >Scarves</nuxt-link
        >
        <!-- <nuxt-link :to="{ path: '/store/shoes' }">Shoes</nuxt-link> -->
      </div>
    </section>
    <nuxt-child />
  </div>
</template>
