<template>
  <div class="container flex mx-auto mt-24 flex-col">
    <div class="flex-1 grid place-content-center mb-10">
      <img
        :src="`${$config.baseURL}${data.image.formats.small.url}`"
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
  async asyncData({ $config: { baseURL }, $http }) {
    try {
      const res = await $http.$get(`${baseURL}/about-page`)
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
