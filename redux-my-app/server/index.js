
const path = require('path')
const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')
const {
  PORT = 3000,
  PWD = __dirname
} = process.env
const app = express()
//  CORS
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
//  단일 graph ql 경로를 정의하고 모든 데이터를 전달한다.
app.use('/q', graphqlHTTP(req => ({
  schema,
  context: req.session
})))

//  /dist URL로 프론트엔드 앱과 정적자원을 전달하기 위한 경로를 정의한다.
// app.use('/dist', static(resolve(PWD, 'build', 'public')))
app.use('/dist',
  express.static(path.resolve(PWD, 'build'))
)

// app.use('/build/:file', (req, res) => {
//   res.sendFile(req.params.file, {
//     root: path.resolve(PWD, 'build')
//   })
// })

//  /dist/* URL 이외의 요청에 대해 메인 HTML 페이지를 전달한다.
app.use('*', (req, res) => {
  res.sendFile('index.html', {
    root: PWD
  })
})

//  서버구동
app.listen(PORT, () => console.log(`Running server on port ${PORT}`))