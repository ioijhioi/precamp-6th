Math.max(1, 3, 2)
// 3
Math.min(1, 3, 2)
// 1
Math.random()
// 0.35427613739468433
Math.random() * 1000000
// 829396.0442424415
Math.floor(Math.random() * 1000000 )
// 464648

Math.random() * 1000000
// 259600.87647479234
String(2356)
// "2356"
String(2356).padStart(6, "00")
// "002356"
Math.random()
// 0.9921257523687013
Math.random() * 1000000
// 348265.1592521488
Math.floor(Math.random() * 1000000)
// 685392
String(Math.floor(Math.random() * 1000000))
// "321700"
String(Math.floor(Math.random() * 1000000)).padStart(6, "00")
// "458180"

const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "00")
// undefined
token
// "807700"

const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
// undefined
token
// "465975"
