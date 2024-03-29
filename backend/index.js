const dotenv = require('dotenv')
const result = dotenv.config()

const IS_PROD_ENV = process.env.NODE_ENV === 'production'
console.log("🚀 ~ file: server.js ~ line 4 ~ IS_PROD_ENV", process.env.NODE_ENV, IS_PROD_ENV)

if (!IS_PROD_ENV) {

  if (result.error) {
    throw result.error
  }
  console.log('env dev vars:', result.parsed)
}

// init mongoose connection
require('./services/mongoose-connection')

const cors = require('cors')
const express = require('express')
const { errorHandler } = require('./middleware/errorHandler.middleware.js')


const app = express()
const port = process.env.PORT || 9000;

app.use((cors()));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('server active')
})

const mainRouter = require('./main.routes')
app.use('/api', mainRouter);

// Always last (global error handler)
app.use(errorHandler);

app.listen(port, () => {
  console.log(`app is listening at http://localhost:${port}`)
})