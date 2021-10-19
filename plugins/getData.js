import Vue from 'vue'

Vue.mixin({
  methods: {
    async getData(e) {
      try {
        const res = await this.$http.$get(`http://localhost:1337/${e}`)
        return res
      } catch (error) {
        console.error(error)
      }
    },
  },
})
