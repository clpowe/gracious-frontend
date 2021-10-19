<template>
  <!-- <img
    ref="myimage"
    :src="$config.baseURL + img"
    width="450"
    alt="Girl"
    class="flex-1"
  /> -->
  <div class="img-zoom-container grid place-content-center">
    <div ref="lens"></div>
    <div class="flex flex-row">
      <img
        ref="myimage"
        :src="$config.baseURL + img"
        width="450"
        height="450"
        class="side"
      />

      <div ref="myresult" class="img-zoom-result"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
  },
  mounted() {
    const img = this.$refs.myimage
    const result = this.$refs.myresult
    this.imageZoom(img, result)
  },

  methods: {
    imageZoom() {
      const img = this.$refs.myimage
      const result = this.$refs.myresult
      const lens = this.$refs.lens
      /* Create lens: */
      lens.setAttribute('class', 'img-zoom-lens')

      /* Insert lens: */
      img.parentElement.insertBefore(lens, img)

      /* Calculate the ratio between result DIV and lens: */
      const cx = result.offsetWidth / lens.offsetWidth
      const cy = result.offsetHeight / lens.offsetHeight

      /* Set background properties for the result DIV */
      result.style.backgroundImage = "url('" + img.src + "')"
      result.style.backgroundSize =
        img.width * cx + 'px ' + img.height * cy + 'px'

      /* Execute a function when someone moves the cursor over the image, or the lens: */
      lens.addEventListener('mousemove', moveLens)
      img.addEventListener('mousemove', moveLens)
      /* And also for touch screens: */
      lens.addEventListener('touchmove', moveLens)
      img.addEventListener('touchmove', moveLens)

      function moveLens(e) {
        /* Prevent any other actions that may occur when moving over the image */
        e.preventDefault()
        /* Get the cursor's x and y positions: */
        const pos = getCursorPos(e)
        /* Calculate the position of the lens: */
        let x = pos.x - lens.offsetWidth / 2
        let y = pos.y - lens.offsetHeight / 2
        /* Prevent the lens from being positioned outside the image: */
        if (x > img.width - lens.offsetWidth) {
          x = img.width - lens.offsetWidth
        }
        if (x < 0) {
          x = 0
        }
        if (y > img.height - lens.offsetHeight) {
          y = img.height - lens.offsetHeight
        }
        if (y < 0) {
          y = 0
        }
        /* Set the position of the lens: */
        lens.style.left = x + 'px'
        lens.style.top = y + 'px'
        /* Display what the lens "sees": */
        result.style.backgroundPosition = '-' + x * cx + 'px -' + y * cy + 'px'
      }
      function getCursorPos(e) {
        let x = 0
        let y = 0
        e = e || window.event
        /* Get the x and y positions of the image: */
        const a = img.getBoundingClientRect()
        /* Calculate the cursor's x and y coordinates, relative to the image: */
        x = e.pageX - a.left
        y = e.pageY - a.top
        /* Consider any page scrolling: */
        x = x - window.pageXOffset
        y = y - window.pageYOffset
        return { x, y }
      }
    },
  },
}
</script>

<style scoped>
.img-zoom-container {
  position: relative;
}

img {
  object-fit: fill;
}

.img-zoom-lens {
  position: absolute;

  /*set the size of the lens:*/
  width: 200px;
  height: 200px;
}

.img-zoom-result {
  border: 1px solid #d4d4d4;
  /*set the size of the result div:*/
  width: 450px;
  background-repeat: space;
}

.side {
  flex: 50%;
}
</style>
