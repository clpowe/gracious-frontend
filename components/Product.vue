<template>
  <div class="text-center">
    <nuxt-link
      :to="{
        path: `/product/${product.id}`,
      }"
      class="mb-4 text-center text-2xl"
    >
      {{ product.name }}

      <img
        :src="$config.baseURL + product.image.url"
        class="drop h-64 w-64 object-cover object-center"
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
