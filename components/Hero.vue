<template>
  <div
    class="
      container
      m-auto
      grid
      text-center
      place-items-center
      p-12
      grid-cols-1
      lg:grid-cols-3
      grid-rows-1
    "
  >
    <nuxt-img
      provider="static"
      src="/static/HeroImg.png"
      format="webp"
      sizes="sm:600px md:800px lg:900px"
      class="z-0 col-start-1 col-span-2 row-start-1 md:-ml-72 hidden lg:block"
    />
    <div
      class="grid place-items-center col-start-2 col-span-2 row-start-1 z-10"
    >
      <div>
        <nuxt-img
          provider="static"
          src="/static/Hero_Logo.svg"
          sizes="sm:100vw md:80vw lg:500px"
          class="static z-10"
        />

        <div class="text-4xl text-gold mt-6 static z-10">
          Handmade Personalized Beaded Jewelry
        </div>
        <div class="text-1xl text-pink-500 static z-10">
          We help you show your elegance with our customized jewelry
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 400px;

  background: rgb(246, 207, 214);
  background: linear-gradient(
    170deg,
    rgba(246, 207, 214, 1) 0%,
    rgba(254, 227, 232, 1) 100%
  );
}
.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.wave svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 146px;
}

.wave .shape-fill {
  fill: #ffffff;
}

@media (max-width: 767px) {
  .wave svg {
    width: calc(127% + 1.3px);
    height: 109px;
  }
}
</style>
