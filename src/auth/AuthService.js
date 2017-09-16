const IS_AUTHENTICATED = Symbol('isAuthenticated')

export default class AuthService {
  constructor() {
    // http://2ality.com/2014/12/es6-symbols.html
    this[IS_AUTHENTICATED] = false
  }

  login(callback) {
    this[IS_AUTHENTICATED] = true
    setTimeout(callback, 1000)
  }

  logout(callback) {
    this[IS_AUTHENTICATED] = false
    setTimeout(callback, 1000)
  }

  isAuthenticated() {
    return this[IS_AUTHENTICATED]
  }
}
