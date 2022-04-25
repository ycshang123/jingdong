<template>
  <!-- 底部导航 -->
  <div class="docker">
    <div class="docker__item docker__item--active">
      <div class="iconfont">&#xe6b8;</div>
      <div class="docker__title">首页</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe7b2;</div>
      <div class="docker__title">购物车</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe643;</div>
      <div class="docker__title">订单</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe7d5;</div>
      <div class="docker__title">我的</div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../src/style/index.scss";
.docker {
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01rem solid $border-colcor;
  color: #333;

  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }

    &--active {
      color: #1fa4fc;
    }
  }
  &__title {
    font-size: 0.2rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>
