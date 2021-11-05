<template>
  <div>
    <div class="bg-gradient-to-b from-pink-200 to-white relative">
      <Hero />
      <img
        provider="static"
        src="/bgelement2.svg"
        sizes="sm:200px md:200px lg:800px"
        class="absolute -right-60 z-0 top-0 transform -rotate-12 w-72"
      />
    </div>
    <section v-if="data" class="relative overflow-hidden">
      <Figure
        v-for="figure in data"
        :key="figure.id"
        keep-alive
        :small-text="figure.smallText"
        :large-text="figure.largeText"
        :paragraph="figure.paragraph"
        :image="figure.image.url"
        :side="figure.side"
        class=""
      />
      <img
        src="/bgelement.svg"
        alt=""
        class="absolute top-0 -left-44 opacity-50"
      />
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $config: { baseURL }, $http }) {
    try {
      const res = await $http.$get(`${baseURL}/home-page`)
      const data = await res.section
      return { data }
    } catch (error) {
      console.error(error)
    }
  },
}
</script>
