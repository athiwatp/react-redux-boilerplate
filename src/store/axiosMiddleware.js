import axios from 'axios'
import { multiClientMiddleware } from 'redux-axios-middleware'

// TODO read value from configs dev/prod

const clients = {
  default: {
    client: axios.create({
      baseURL: 'https://api.github.com',
      responseType: 'json'
    })
  }
}

export default multiClientMiddleware(clients)
