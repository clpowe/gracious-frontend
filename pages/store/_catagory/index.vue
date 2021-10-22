<template>
  <div>
    <client-only placeholder="Loading...">
      <section v-if="products.length > 0" class="container mx-auto py-24">
        <div
          class="
            grid
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-10
            mx-auto
            place-items-center
          "
        >
          <div v-for="product in paginatedProducts" :key="product.id" class="">
            <Product
              :product="product"
              :catagory="$route.params.catagory"
              keep-alive
            />
          </div>
        </div>
        <div class="grid grid-cols-2 w-full mt-8">
          <button
            v-if="prePage"
            class="col-start-1 place-self-start btn"
            @click="prev"
          >
            prev
          </button>
          <button
            v-if="nextPage"
            class="col-start-2 place-self-end btn"
            @click="next"
          >
            next
          </button>
        </div>
      </section>
      <section v-else class="grid place-content-center h-80">
        <div class="text-6xl font-light text-gold">Coming Soon</div>
      </section>
    </client-only>
  </div>
</template>

<script>
export default {
  async asyncData({ $config: { baseURL }, $http, route }) {
    if (route.params.catagory === 'all') {
      try {
        const res = await $http.$get(`${baseURL}/products`)
        const products = await res
        return { products }
      } catch (error) {
        console.error(error)
      }
    }
    try {
      const res = await $http.$get(`${baseURL}/products`)
      const filter = await res.filter(
        (item) => item.department === route.params.catagory
      )
      const products = filter
      return { products }
    } catch (error) {
      console.error(error)
    }
  },
  data() {
    return {
      products: null,
      page: 1,
      perPage: 8,
    }
  },
  computed: {
    prePage() {
      return this.page - 1 ? this.page - 1 : null
    },
    nextPage() {
      return this.totalPages > this.page ? this.page + 1 : null
    },
    offset() {
      return (this.page - 1) * this.perPage
    },
    total() {
      return this.products.length
    },
    totalPages() {
      return Math.ceil(this.products.length / this.perPage)
    },
    paginatedProducts() {
      return this.products.slice(this.offset).slice(0, this.perPage)
    },
  },

  methods: {
    next() {
      this.page++
    },
    prev() {
      this.page--
    },
  },
}
</script>
