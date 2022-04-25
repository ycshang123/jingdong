<template>
  <!-- 顶部搜索区 -->
  <div class="wrapper">
    <div class="wrapper__position">
      <span class="iconfont">&#xe64c;</span>
      南京工业职业技术大学计算机与软件学员软件工程技术2021级
      <span class="iconfont wrapper__position__notice">&#xe613;</span>
    </div>
    <!-- 搜索 -->
    <div class="wrapper__search">
      <span class="iconfont">&#xe6e1;</span>
      <span class="search__text">山姆会员商店优惠商品</span>
    </div>
    <!-- banner -->
    <div class="wrapper__banner">
      <img
        src="https://cdn.jsdelivr.net/gh/ycshang123/image-hosting@master/banner.7gxs96fki0c0.webp"
        class="wrapper__banner__img"
      />
    </div>
    <!-- 九宫格 -->
    <div class="icons">
      <div class="icons__item" v-for="(item, index) in gridList" :key="index">
        <img class="icons__item__img" :src="item.imgUrl" />
        <p class="icons__item__desc">{{ item.subTitle }}</p>
      </div>
    </div>
    <!-- 分界线 -->
    <div class="gap"></div>
  </div>

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
<script>
export default {
  data () {
    return {
      gridList: [
        {
          imgUrl: 'https://cdn.jsdelivr.net/gh/ycshang123/image-hosting@master/超市.73sny9624f40.webp',
          subTitle: '超市便利'
        },
        {
          imgUrl: 'https://cdn.jsdelivr.net/gh/ycshang123/image-hosting@master/菜市场.6rnvn6hzdqo0.webp',
          subTitle: '菜市场'
        },
        {
          imgUrl: 'https://cdn.jsdelivr.net/gh/ycshang123/image-hosting@master/水果店.zyit6m6cdy8.webp',
          subTitle: '水果店'
        },
        {
          imgUrl: 'https://cdn.jsdelivr.net/gh/ycshang123/image-hosting@master/鲜花.50l3od3bbt80.webp',
          subTitle: '鲜花绿植'
        },
        {
          imgUrl: 'https://cdn.jsdelivr.net/gh/ycshang123/image-hosting@master/医药健康.2exlgmnnjgys.webp',
          subTitle: '医药健康'
        },
        {
          imgUrl: 'https://cdn.jsdelivr.net/gh/ycshang123/image-hosting@master/家居.16gkklv74q00.webp',
          subTitle: '家具时尚'
        },
        {
          imgUrl: 'https://cdn.jsdelivr.net/gh/ycshang123/image-hosting@master/蛋糕.4u0zh568kw40.webp',
          subTitle: '烘焙蛋糕'
        },
        {
          imgUrl: 'https://cdn.jsdelivr.net/gh/ycshang123/image-hosting@master/签到.6gm6l0nia0k0.webp',
          subTitle: '签到'
        },
        {
          imgUrl: 'https://cdn.jsdelivr.net/gh/ycshang123/image-hosting@master/大牌免运.qjt10s40ups.webp',
          subTitle: '大牌免运'
        },
        {
          imgUrl: 'https://cdn.jsdelivr.net/gh/ycshang123/image-hosting@master/红包.p6kocho74pc.webp',
          subTitle: '红包套餐'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "../src/style/index.scss";
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0.5rem;
  padding: 0 0.18rem;

  &__position {
    position: relative;
    padding: 0.16rem 0.16rem 0.16rem 0;
    font-size: 0.16rem;
    @include ellipse;
    &__notice {
      position: absolute;
      right: 0;
      font-size: 0.2rem;
    }
    color: $content-fontcolor;
  }

  &__search {
    margin-bottom: 0.12rem;
    line-height: 0.32rem;
    background-color: $background-color;
    color: $placeholder-color;
    border-radius: 0.16rem;
    .iconfont {
      display: inline-block;
      padding: 0 0.12rem 0 0.16rem;
      font-size: 0.2rem;
    }
    &__text {
      display: inline-block;
      font-size: 0.14rem;
    }
  }
  &__banner {
    height: 0;
    overflow: hidden;
    // 预留高度防抖 (图片高度/图片宽度)
    padding-bottom: 25.4%;
    &__img {
      width: 100%;
    }
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  &__item {
    width: 20%;
    &__img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }
    &__desc {
      margin: 0.06rem 0 0.16rem 0;
      text-align: center;
    }
  }
}

.gap {
  margin: 0 -0.18rem;
  height: 0.04rem;
  background-color: $border-colcor;
}
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
