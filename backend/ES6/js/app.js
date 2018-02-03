const path = require("path")
const express = require("express")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const favicon = require("serve-favicon")
const swig = require("swig")

const router = require("./routes/router")


const dirRoot = path.join(__dirname, '..', '..', '..')
const pkg = require(path.join(dirRoot, "package.json"))

const app = express()


app.locals = {
  baseUrl: pkg.config.baseUrl
}


// 开通代理服务
app.enable('trust proxy')

// 搞下图标
app.use(favicon(path.join(dirRoot, 'static', 'images', 'favicon.ico')))

// 包装：全局的res.body
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.use(cookieParser())



// 需要使用session，所以，要配置一下
app.use(session({
  secret: 'secret', // 对session id 相关的cookie 进行签名
  resave: true,
  saveUninitialized: false, // 是否保存未初始化的会话
  cookie: {
    // maxAge: 1000 * 60 * 3 // 设置 session 的有效时间，单位毫秒
    maxAge: null // 
  },
}))

// 设置：模板类型
swig.setDefaults({
  cache: false
})
app.set('view cache', false)
app.set('views', path.join(__dirname, '..', 'views'))
app.set('view engine', 'html')
app.engine('html', swig.renderFile)






// 设置：静态资源路径
app.use('/static', express.static(path.join(dirRoot, 'static')))
app.use('/uploads', express.static(path.join(dirRoot, 'uploads')))








// 调用路由
router(app)




// 监听并提示：
let s = app.listen(3000, 'localhost', () => {
  let host = s.address().address
  let port = s.address().port
  console.log('listen at http://%s:%s', host, port)
})