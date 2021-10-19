<template>
  <div class="relative">
    <div class="relative max-w-6xl mx-auto">
      <FormulateForm
        v-model="values"
        class="text-center"
        @submit="handleSubmit"
      >
        <h2 class="text-6xl font-light text-gold">
          Contact us for custom pieces
        </h2>
        <div
          class="
            flex
            w-full
            flex-col
            md:flex-row
            flex-auto
            md:gap-5
            p-8
            md:text-left
          "
        >
          <div class="flex-1">
            <FormulateInput
              type="text"
              name="name"
              label="Full Name"
              validation="required"
            />
            <FormulateInput
              type="email"
              name="email"
              label="Email"
              validation="required|email"
            />
            <FormulateInput
              type="text"
              name="phone"
              label="Phone"
              validation="required"
            />
          </div>
          <div class="flex-1 h-full flex flex-col content-between">
            <FormulateInput
              type="textarea"
              name="message"
              label="Message"
              class=""
              validation="required"
              rows="8"
            />
            <FormulateInput class="" type="submit" />
          </div>
        </div>
      </FormulateForm>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      values: {},
    }
  },
  methods: {
    async handleSubmit() {
      try {
        await this.$http.$post('https://formspree.io/f/xpzkbpvk', this.values)
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>
