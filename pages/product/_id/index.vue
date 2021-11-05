<template>
  <div class="container mx-auto mt-12 px-10 flex flex-col gap-5 m-10">
    <GoBack class="self-start justify-self-start" />
    <div v-if="product !== null" class="flex flex-col mx-auto">
      <client-only placeholder="Loading...">
        <v-zoomer
          style="width: 400px; height: 300px; border: solid 1px silver"
          class="flex-1 mx-auto px-10"
          :max-scale="5"
          @click="zoomIn((scale = 5))"
        >
          <img
            :src="`${$config.baseURL}${product.image.url}`"
            style="object-fit: contain; width: 100%; height: 100%"
          />
        </v-zoomer>
      </client-only>

      <div class="flex flex-1 flex-col text-center">
        <h1 class="text-gold text-4xl font-light tracking-wider my-4">
          {{ product.name }}
        </h1>
        <h2 class="text-gold text-2xl font-light tracking-wider my-4">
          Price: ${{ product.price }}.00
        </h2>
        <p>{{ product.description }}</p>
        <button
          class="snipcart-add-item btn w-36 mx-auto mt-10"
          :data-item-id="product.id"
          :data-item-price="product.price"
          :data-item-url="`${$route.fullPath}`"
          :data-item-description="product.description"
          :data-item-name="product.name"
          :data-item-max-quantity="1"
          :data-item-image="`${$config.baseURL}${product.image.url}`"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css'
// import productQuery from '../../../apollo/queries/product.gql'

export default {
  async asyncData({ params }) {
    const res = await fetch(
      `https://strapi-oji7.onrender.com/products/${params.id}`
    )
    const product = await res.json()
    return { product }
  },
  data() {
    return {
      product: null,
      storeUrl: this.$config.storeUrl,
    }
  },
  // async created() {
  //   const res = await fetch(
  //     `https://strapi-oji7.onrender.com/products/${this.$route.params.id}`
  //   )
  //   this.product = await res.json()
  // },
  // apollo: {
  //   product: {
  //     prefetch: true,
  //     query: productQuery,
  //     variables() {
  //       return {
  //         id: +this.$route.params.id,
  //       }
  //     },
  //   },
  // },
}
</script>

<style scoped>
.left,
.right {
  flex: 1 1 auto;
  max-width: 50%;
}

.left {
  display: flex;
  justify-content: center;
  align-items: center;
}

.right {
  position: relative;
  overflow: hidden;
}
</style>
