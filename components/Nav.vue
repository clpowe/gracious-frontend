<template>
  <div class="w-full bg-pink-200 z-10">
    <transition name="slide">
      <div
        v-if="open"
        class="bg-white absolute top-0 right-0 h-full w-56 p-10 z-20 shadow-xl"
      >
        <div class="flex flex-col space-y-4 text-gold">
          <div class="block" @click="open = !open">
            <svg class="svg-icon" viewBox="0 0 20 20" width="40" height="40">
              <path
                fill="fill-current text-gold"
                d="M12.71,7.291c-0.15-0.15-0.393-0.15-0.542,0L10,9.458L7.833,7.291c-0.15-0.15-0.392-0.15-0.542,0c-0.149,0.149-0.149,0.392,0,0.541L9.458,10l-2.168,2.167c-0.149,0.15-0.149,0.393,0,0.542c0.15,0.149,0.392,0.149,0.542,0L10,10.542l2.168,2.167c0.149,0.149,0.392,0.149,0.542,0c0.148-0.149,0.148-0.392,0-0.542L10.542,10l2.168-2.168C12.858,7.683,12.858,7.44,12.71,7.291z M10,1.188c-4.867,0-8.812,3.946-8.812,8.812c0,4.867,3.945,8.812,8.812,8.812s8.812-3.945,8.812-8.812C18.812,5.133,14.867,1.188,10,1.188z M10,18.046c-4.444,0-8.046-3.603-8.046-8.046c0-4.444,3.603-8.046,8.046-8.046c4.443,0,8.046,3.602,8.046,8.046C18.046,14.443,14.443,18.046,10,18.046z"
              ></path>
            </svg>
          </div>
          <nuxt-link to="/" @click.native="open = !open">home</nuxt-link>
          <nuxt-link to="/about" @click.native="open = !open">about</nuxt-link>
          <nuxt-link to="/store/all" @click.native="open = !open"
            >store</nuxt-link
          >
        </div>
        <button class="snipcart-checkout flex items-center mt-10">
          <Cart />
          <span
            class="snipcart-total-price ml-3 font-semibold text-sm text-gold"
          ></span>
        </button>
      </div>
    </transition>
    <nav
      class="
        container
        flex
        mx-auto
        uppercase
        h-20
        self-stretch
        items-center
        px-4
      "
    >
      <div
        class="
          mr-auto
          text-xl
          md:text-3xl
          font-extrabold
          tracking-wider
          text-gold
        "
      >
        Gracious Couture
      </div>
      <div class="sm:flex hidden">
        <div class="flex space-x-4 text-gold">
          <nuxt-link to="/">home</nuxt-link>
          <nuxt-link to="/about">about</nuxt-link>
          <nuxt-link to="/store/all">store</nuxt-link>
        </div>
        <button class="snipcart-checkout flex items-center ml-2">
          <Cart />
          <span
            class="snipcart-total-price ml-3 font-semibold text-sm text-gold"
          ></span>
        </button>
      </div>
      <div class="block sm:hidden" @click="open = !open">
        <svg
          viewBox="0 0 100 80"
          width="40"
          height="20"
          class="text-gold"
          fill="fill-current text-gold"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
