<template>
  <div class="max-w-6xl mx-auto">
    <figure class="p-4 gap-5" :class="side">
      <div class="max-w-md mx-auto grid place-content-center">
        <div class="">
          <h3 class="text-pink-200 text-6xl">{{ smallText }}</h3>
          <h2 class="text-gold text-8xl font-light tracking-wider mb-4">
            {{ largeText }}
          </h2>
          <p class="text-base">
            {{ paragraph }}
          </p>
        </div>
      </div>
      <div class="max-w-md mx-auto grid place-items-center pt-4 md:pt-0">
        <img
          :src="`${$config.baseURL}${image}`"
          alt=""
          height="600px"
          class="op"
        />
      </div>
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    smallText: {
      type: String,
      required: true,
    },
    largeText: {
      type: String,
      required: true,
    },
    paragraph: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    side: {
      type: String,
      default: 'left',
    },
  },
  computed: {
    imageUrl() {
      return this.$config.baseURL
    },
  },
}
</script>

<style scoped>
img {
  object-position: center center;
}
</style>

<style scoped>
h3 {
  color: rgb(246, 207, 214);
}
.left {
  @apply flex flex-col md:flex-row;
}
.right {
  @apply flex flex-col md:flex-row-reverse;
}

.op {
  filter: drop-shadow(5px 5px 5px rgb(59, 59, 59));
  transform: scale(100%);
  transition: all 0.5s;
}

.op:hover {
  filter: drop-shadow(6px 10px 10px rgb(122, 122, 122));
  transform: scale(110%);
}
</style>
