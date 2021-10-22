import { createIPX, createIPXMiddleware } from 'ipx'

const ipx = createIPX({
  domains: ['https://strapi-oji7.onrender.com'], // allowed external domains (should match domains option in nuxt.config)
})

export default createIPXMiddleware(ipx)
