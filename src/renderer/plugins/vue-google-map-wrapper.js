import googleMapFactory from './../components/map'

function install (Vue, options) {
  const { apiKey } = options

  const googleMap = googleMapFactory(apiKey)

  Vue.component('googleMap', googleMap)
}

export default install