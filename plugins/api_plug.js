import userAddressesApi from '~/api/user_address'
import ordersApi from '~/api/orders_api'
import shopsApi from '~/api/shops_api'
import authApi from '~/api/auth_api'
export default (ctx, inject) => {
  // inject the shops in the context (ctx.app.$shops_api)
  // And in the Vue instances (this.$shops_api in your components)
  const ordersApiWithAxios = ordersApi(ctx.$axios, ctx.store)
  inject('orders_api', ordersApiWithAxios('/orders'))

  const userAddressesApiWithAxios = userAddressesApi(ctx.$axios)
  inject('user_address', userAddressesApiWithAxios('/user-addresses'))

  const shopsApiWithAxios = shopsApi(ctx.$axios)
  inject('shops_api', shopsApiWithAxios('/shops'))

  const authApiWithAxios = authApi(ctx.$axios)
  inject('auth_api', authApiWithAxios('/auth'))

  // You can reuse the repositoryWithAxios object:
  // inject("userRepository", repositoryWithAxios('/users'));
}
