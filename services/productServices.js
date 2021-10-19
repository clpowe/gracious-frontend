export default {
  async getProducts(category) {
    const res = await this.$http.$get(`http://localhost:1337/${category}`)
    return res
  },
  getProduct(id) {},
}
