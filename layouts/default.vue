<template>
  <div class="font-serif overflow-hidden relative min-h-screen">
    <Nav />
    <Nuxt class="" />

    <nuxt-img
      provider="static"
      src="/static/bgelement2.svg"
      class="absolute -bottom-20 -right-72 opacity-50 behind"
      fit="cover"
    />
    <Contact class="pb-24 mt-20" />
    <Footer />

    <div
      id="snipcart"
      hidden
      data-config-modal-style="side"
      data-api-key="NGIyNjQ0MWQtYWI1Yi00YzdjLTg1MDgtZTJkMmEyYjE0YWVkNjM3Njk3NDYxMTI1NzM1MDAw"
    ></div>
  </div>
</template>

<script>
export default {
  // mounted() {
  //   document.addEventListener('snipcart.ready', function () {
  //     this.addItemEvent = window.Snipcart.events.on(
  //       'item.added',
  //       (cartItem) => {
  //         // console.log(cartItem)
  //       }
  //     )
  //   })
  // },
}
</script>

<style lang="scss">
.btn {
  @apply bg-pink-200 py-2 px-4 text-gold hover:text-white hover:bg-pink-300;
}

.drop {
  box-shadow: 10px 10px 0 rgba(251, 207, 232, 1);
  transition: all 0.2s;
}

.drop:hover {
  box-shadow: 20px 20px 0 rgba(251, 207, 232, 1);
}

.behind {
  z-index: -1;
}
</style>
