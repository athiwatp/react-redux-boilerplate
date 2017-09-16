import LocalStorage from '../storage'

const USER_ID = 'USER_ID'

// dummy authentication service
export default class AuthService {
  static isAuthenticated() {
    return LocalStorage.has(USER_ID)
  }

  static login(callback) {
    LocalStorage.set(USER_ID, '123456789')
    setTimeout(callback, 1000)
  }

  static logout(callback) {
    LocalStorage.remove(USER_ID)
    setTimeout(callback, 1000)
  }
}
