const express = require('express')
const app = express()

// 在这里，调用 express.static() 方法，快速的对外提供静态资源
app.use('/assets', express.static('./assets'))
app.use('/picture',express.static('./picture'))
app.use('/loginpic',express.static('./loginpic'))

app.listen(8002, () => {
  console.log('express server running at http://127.0.0.1:8002')
})
