/* eslint-disable global-require */
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Root.prod.jsx')
} else {
  module.exports = require('./Root.dev.jsx')
}
/* eslint-enable global-require */
