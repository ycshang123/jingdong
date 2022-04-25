<template>
  <div class="docker">
    <div
      v-for="(item, index) in dockerList"
      :class="{
        docker__item: true,
        'docker__item--active': index === currentIndex,
      }"
      :key="item.icon"
    >
      <router-link :to="item.to">
        <div class="iconfont" v-html="item.icon" />
        <div class="docker__title">{{ item.text }}</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppDocker',
  props: ['currentIndex'],
  setup () {
    const dockerList = [
      {
        icon: '&#xe6b8;',
        text: '首页',
        to: {
          name: 'HomePage'
        }
      },
      {
        icon: '&#xe7b2;',
        text: '购物车',
        to: {
          name: 'CartPage'
        }
      },
      {
        icon: '&#xe643;',
        text: '订单',
        to: {
          name: 'OrderPage'
        }
      },
      {
        icon: '&#xe7d5;',
        text: '我的',
        to: {
          name: 'PersonPage'
        }
      }
    ]
    return {
      dockerList
    }
  }
}
</script>

<style scoped lang="scss">
@import "../style/virables.scss";
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01rem solid $content-bgColor;
  &__item {
    flex: 1;
    text-align: center;
    a {
      color: $content-fontcolor;
      text-decoration: none;
    }
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }
    &--active {
      a {
        color: #1fa4fc;
      }
    }
  }
  &__title {
    font-size: 0.2rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>
