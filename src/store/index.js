import { createStore } from 'vuex'

const setLocalCartList = (state) => {
  const { cartList, total } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
  localStorage.total = total
}

const getLocalCartList = () => {
  try {
    return JSON.parse(localStorage.cartList)
  } catch (e) {
    return {}
  }
}
const getLocalTotal = () => {
  try {
    return parseInt(localStorage.total)
  } catch (e) {
    return {}
  }
}
export default createStore({
  state: {
    cartList: getLocalCartList(),
    total: getLocalTotal()

  },
  getters: {
  },
  mutations: {
    changeCartItemInfo (state, payload) {
      // 解构赋值
      const { shopId, productId, productInfo } = payload
      // 每一个商店对应的商品列表
      const shopCartList = state.cartList[shopId] || {
        productList: {}
      }
      let totalNum = state.total || 0
      // 根据商品id获取到对应的商品
      let product = shopCartList.productList[productId]
      if (!product) {
        productInfo.count = 0
        product = productInfo
      }
      product.count = product.count + payload.num

      // 购物车选购了商品
      if (payload.num > 0) {
        product.check = true
      }
      // 计算总值
      if (payload.num < 0 && product.count >= 0) {
        totalNum = totalNum + payload.num * product.price
      } else if (payload.num > 0) {
        totalNum = totalNum + payload.num * product.price
      }
      // 为0时商品数量不再减少
      if (product.count < 0) {
        product.count = 0
      }
      shopCartList.productList[productId] = product
      state.cartList[shopId] = shopCartList
      state.total =totalNum
      setLocalCartList(state)
    },
    changeShop (state, shopId) {
      const shopCartList = state.cartList[shopId] || {
        productList: {}
      }
      let totalNum = state.total || 0
      state.cartList[shopId] = shopCartList
      state.total = totalNum
      setLocalCartList(state)
    }
  },
  actions: {
  },
  modules: {
  }
})
