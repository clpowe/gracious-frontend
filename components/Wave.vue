<template>
  <div class="wave-container">
    <div class="height"></div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#fff"
        fill-opacity="1"
        d="M0,128L80,117.3C160,107,320,85,480,106.7C640,128,800,192,960,186.7C1120,181,1280,107,1360,69.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>
  </div>
</template>

<style scoped>
.wave-container {
  position: relative;

  background-color: #d86c8c;
  background-image: linear-gradient(146deg, #e994ad 0%, #f6cfd6 100%);

  color: #fff;
  text-align: center;
  overflow: hidden;
}

.wave-container > svg {
  display: block;
}

.height {
  height: 15vh;
}
</style>
