<template>
  <div class="container flex mx-auto mt-24 flex-col">
    <div class="flex-1 grid place-content-center mb-10">
      <nuxt-picture
        :src="`${$config.baseURL}${data.image.formats.small.url}`"
        alt=""
        width="300"
        height="300"
        fit="contain"
        format="webp"
        class="drop"
      />
    </div>
    <div class="flex-1 max-w-screen-md mx-auto text-center px-10">
      <h3 class="text-4xl">{{ data.smallText }}</h3>
      <p class="text-gold text-6xl font-light tracking-wider mb-4">
        {{ data.largeText }}
      </p>
      <div>
        <p class="text-base text-left">{{ data.mainText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $http }) {
    try {
      const res = await $http.$get(`http://localhost:1337/about-page`)
      const data = res.about
      return { data }
    } catch (error) {
      console.error(error)
    }
  },
}
</script>

<style scoped>
h3 {
  color: rgb(246, 207, 214);
}
</style>
