<template>
  <div class="cart">
    <div class="check">
      <div class="check__icon">
        <img
          src="https://cdn.jsdelivr.net/gh/ycshang123/image-hosting@master/basket.74wu6ves8940.webp"
          class="check__icon__img"
        />
        <div class="check__icon__tag">1</div>
      </div>
      <div class="check__info">
        总计:<span class="check__info__price"
          >{{ $store.state.total ? $store.state.total.toFixed(2) : 0 }}
        </span>
      </div>
      <div class="check__btn">去结算</div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
@import "../../style/virables.scss";
@import "../../style/mixins.scss";
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background-color: $bgColor;
}

.check {
  display: flex;
  height: 0.49rem;
  border-top: 0.01rem solid $content-bgColor;
  line-height: 0.49rem;
  &__icon {
    position: relative;
    width: 0.84rem;
    &__img {
      display: block;
      margin: 0.12rem auto;
      width: 0.28rem;
      height: 0.26rem;
    }
    &__tag {
      position: absolute;
      right: 0.2rem;
      top: 0.04rem;
      width: 0.2rem;
      height: 0.2rem;
      line-height: 0.2rem;
      background-color: $hightlight-fontColor;
      border-radius: 50%;
      font-size: 0.12rem;
      text-align: center;
      color: #fff;
      transform: scale(0.5);
      transform-origin: left center;
    }
  }
  &__info {
    flex: 1;
    color: $content-fontcolor;
    font-size: 0.12rem;
    &__price {
      line-height: 0.49rem;
      color: $hightlight-fontColor;
      font-size: 0.18rem;
    }
  }
  &__btn {
    width: 0.98rem;
    background-color: $btn-bgColor;
    text-align: center;
    font-size: 0.14rem;
    color: $bgColor;
  }
}
</style>
