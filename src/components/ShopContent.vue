<template>
  <div class="content">
    <div class="category">
      <div
        :class="{
          category__item: true,
          'category__item--active': currentTab === item.tab,
        }"
        v-for="item in categories"
        :key="item.name"
        @click="() => handleTabClick(item.tab)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="product">
      <div class="product__item" v-for="item in list" :key="item._id">
        <img class="product__item__img" :src="item.imgUrl" />
        <div class="product__item__detail">
          <h4 class="product__item__title">
            {{ item.name }}
          </h4>
          <p class="product__item__sales">月售{{ item.sales }}件</p>
          <p class="product__item__price">
            <span class="product__item__yen">￥{{ item.price }}</span>
          </p>
        </div>
        <div class="product__number">
          <span
            class="product__number__minus iconfont"
            @click=
            "
              () => {
                changeCartItem(shopId, item._id, item, -1);
              }
            "
            >&#xe686;</span
          >
          {{ getProductCartCount(shopId, item._id) }}
          <span
            class="product__number__plus iconfont"
            @click=
            "
              () => {
                changeCartItem(shopId, item._id, item, 1);
              }
            "
            >&#xe8fe;</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, toRefs, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { get } from '../utils/request'
import { useStore } from 'vuex'

const categories = [
  { name: '全部商品', tab: 'all' },
  { name: '秒杀', tab: 'secKill' },
  { name: '新鲜水果', tab: 'fruit' }
]

const route = useRoute()

onMounted(async () => {
  console.log('**********************onMounted*****************')
  getContentData()
})

// 切换tab逻辑
const currentTab = ref(categories[0].tab)

const handleTabClick = (tab) => {
  currentTab.value = tab
  console.log(currentTab.value)
  getContentData()
}

// 列表内容相关逻辑
const content = reactive({ list: [] })

const getContentData = async () => {
  const result = await get(`/shop/${route.params.id}/products`, {
    tab: currentTab.value
  })

  if (result?.code === 200 && result?.data?.length) {
    console.log(result.data)
    content.list = result.data
  }
}

const { list } = toRefs(content)
// 店铺id
const shopId = ref(route.params.id)
// vuex中的购物车响应数据
const store = useStore()
//购物车选购商品
const cartList = store.state.cartList

// 改变购物车信息(提交的参数对象包括:店铺id、商品id、商品自身信息、数量)
const changeCartItemInfo = (shopId, productId, productInfo, num) => {
  store.commit('changeCartItemInfo', {
    shopId,
    productId,
    productInfo,
    num
  })
}


const getProductCartCount = (shopId, productId) => {
  return cartList?.[shopId]?.productList?.[productId]?.count || 0
}

const changeShop = (shopId) => {
  store.commit('changeShop', shopId)
}

const changeCartItem = (shopId, productId, item, num) => {
  changeCartItemInfo(shopId, productId, item, num)
  changeShop(shopId)
}


</script>

<style scoped lang="scss">
@import "../style/virables.scss";
@import "../style/mixins.scss";
.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: 0.5rem;
}
.category {
  overflow-y: scroll;
  height: 100%;
  width: 0.76rem;
  background: $search-bgColor;
  &__item {
    line-height: 0.4rem;
    text-align: center;
    font-size: 0.14rem;
    color: #333;
    &--active {
      background: $bgColor;
    }
  }
}

.product {
  overflow-y: scroll;
  flex: 1;
  &__item {
    position: relative;
    display: flex;
    padding: 0.12rem 0;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid $content-bgColor;
    &__detail {
      overflow: hidden;
    }
    &__img {
      width: 0.68rem;
      height: 0.68rem;
      margin-left: 0.16rem;
    }
    &__title {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.12rem;
      font-size: 0.14rem;
      color: $content-fontcolor;
      @include ellipse;
    }
    &__sales {
      margin: 0.06rem 0;
      font-size: 0.12rem;
      color: $content-fontcolor;
    }
    &__price {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $hightlight-fontColor;
    }
    &__yen {
      font-size: 0.12rem;
    }
    &__origin {
      margin-left: 0.06rem;
      line-height: 0.2rem;
      font-size: 0.12rem;
      color: $light-fontColor;
      text-decoration: line-through;
    }
    .product__number {
      position: absolute;
      right: 0;
      bottom: 0.12rem;
      line-height: 0.18rem;
      &__minus {
        position: relative;
        color: $medium-fontColor;
        margin-right: 0.05rem;
      }
      &__plus {
        position: relative;
        top: 0.02rem;
        color: $btn-bgColor;
        margin-left: 0.05rem;
      }
    }
  }
}
</style>
