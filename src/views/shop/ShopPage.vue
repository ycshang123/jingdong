<template>
  <div class="wrapper">
    <div class="search">
      <div class="iconfont search__back" @click="handleBackClick">&#xe697;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont"></span>
        <input placeholder="请输入商品名称" class="search__content__input" />
      </div>
    </div>
    <ShopInfo :item="item" :hideBorder="true" v-show="item.imgUrl" />
    <ShopContent :shopName="item.name" />
    <ShopCart />
  </div>
</template>

<script setup>
import { reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { get } from '../../utils/request'
import ShopContent from '../../components/ShopContent.vue'
import ShopInfo from '../../components/ShopInfo.vue'
import ShopCart from './ShopCart.vue'
const route = useRoute()
const data = reactive({ item: {} })

get(`/shop/${route.params.id}`).then((result) => {
  if (result?.code === 200 && result?.data) {
    data.item = result.data
  }
})

const { item } = toRefs(data)
const router = useRouter()
const handleBackClick = () => {
  router.back()
}
</script>

<style scoped lang="scss">
@import "../../style/virables.scss";

.wrapper {
  padding: 0 0.18rem;
}

.search {
  display: flex;
  margin: 0.14rem 0 0.04rem 0;
  line-height: 0.32rem;
  &__back {
    width: 0.3rem;
    font-size: 0.24rem;
    color: #b6b6b6;
  }
  &__content {
    display: flex;
    flex: 1;
    background: $search-bgColor;
    border-radius: 0.16rem;
    &__icon {
      width: 0.44rem;
      text-align: center;
      color: $search-fontColor;
    }
    &__input {
      display: block;
      width: 100%;
      padding-right: 0.2rem;
      border: none;
      outline: none;
      background: none;
      height: 0.32rem;
      font-size: 0.14rem;
      color: $content-fontcolor;
      &::placeholder {
        color: $content-fontcolor;
      }
    }
  }
}
</style>
