import Api from '@/services/Api'

export default {
  fetchLogin (token) {
    return Api().post('api/login/', { token: token })
  }
}
