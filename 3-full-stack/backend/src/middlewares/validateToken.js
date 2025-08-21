
export const authRequired = (req, res, next) => {

  console.log(req.headers)
  next()

}