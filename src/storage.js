/* global window */

if (typeof window.localStorage === 'undefined') {
  console.error('no storage support')
}

export default class LocalStorage {
  static set(key, value) {
    window.localStorage.setItem(key, value)
  }

  static get(key) {
    return window.localStorage.getItem(key)
  }

  static has(key) {
    return window.localStorage.getItem(key) !== null
  }

  static remove(key) {
    window.localStorage.removeItem(key)
  }

  static clear() {
    window.localStorage.clear()
  }
}
