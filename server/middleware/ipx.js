import { createIPX, createIPXMiddleware } from 'ipx'

const ipx = createIPX({
  domains: ['http://localhost:1337'], // allowed external domains (should match domains option in nuxt.config)
})

export default createIPXMiddleware(ipx)
