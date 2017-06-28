const express = require('express')
const serveStatic = require('serve-static')
const fs = require('fs')
const React = require('react')
const ReactDOM = require('react-dom/server')
const App = require('./src/App')
const indexHtml = fs.readFileSync('build/index.html', 'utf8')

const app = express()

app.get('/', (req, res) => {
  const appMarkup = ReactDOM.renderToStaticMarkup(React.createElement(App))
  const fullResponse = indexHtml.replace(/ data-ssr-output>/, '>' + appMarkup)
  res.send(fullResponse)
})

app.use(serveStatic('build', {
  setHeaders(res, path) {
    const isRevved = /[a-f0-9]{7,}/.exec(path)
    res.setHeader('Cache-Control',
      isRevved
        ? `max-age=31536000,immutable`
        : `max-age=0,s-maxage=31536000` )
  }
}))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`))
