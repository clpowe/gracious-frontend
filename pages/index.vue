<template>
  <div>
    <div class="bg-gradient-to-b from-pink-200 to-white relative">
      <Hero />
      <nuxt-img
        provider="static"
        src="/static/bgelement2.svg"
        format="webp"
        sizes="sm:200px md:200px lg:800px"
        class="absolute -right-60 z-0 top-0 transform -rotate-12"
      />
    </div>
    <section class="relative overflow-hidden">
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
        src="/static/bgelement.svg"
        alt=""
        class="absolute top-0 -left-44 opacity-50"
      />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    }
  },
  async fetch() {
    try {
      const res = await this.$http.$get(`http://localhost:1337/home-page`)
      this.data = res.section
    } catch (error) {
      console.error(error)
    }
  },
}
</script>
