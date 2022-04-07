export default function () {
  this.nuxt.hook('render:setupMiddleware', (app) => {
    app.use('/vrdemo', (req, res, next) => { //Do NOT load vrdemo on the server-side due to use of client only a-frame JS libraries
      res.spa = true
      next()
    })
  })

}
