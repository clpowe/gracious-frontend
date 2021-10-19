<template>
  <div class="text-center">
    <nuxt-link
      :to="{
        path: `/${product.id}`,
      }"
      class="mb-4 text-center text-2xl"
    >
      {{ product.name }}

      <nuxt-img
        :src="$config.baseURL + product.image.url"
        width="300"
        height="400"
        class="drop"
        fit="cover"
      />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
    catagory: {
      type: String,
      required: true,
    },
  },
  computed: {},
}
</script>

<style lang="scss"></style>
