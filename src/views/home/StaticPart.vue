<template>
  <div class="position">
    <span class="iconfont position__icon">&#xe64c;</span>
    南京工业职业技术大学计算机与软件学员软件工程技术2021级
    <span class="iconfont position__notice">&#xe613;</span>
  </div>
  <!-- 搜索 -->
  <div class="search">
    <span class="iconfont">&#xe6e1;</span>
    <span class="search__text">山姆会员商店优惠商品</span>
  </div>
  <!-- banner -->
  <div class="banner">
    <img
      src="https://cdn.jsdelivr.net/gh/ycshang123/image-hosting@master/banner.7gxs96fki0c0.webp"
      class="banner__img"
    />
  </div>
  <!-- 九宫格 -->
  <div class="icons">
    <div class="icons__item" v-for="(item, index) in gridList" :key="index">
      <img class="icons__item__img" :src="item.imgUrl" />
      <p class="icons__item__desc">{{ item.subTitle }}</p>
    </div>
  </div>
  <!-- 附近店铺 -->
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <div class="nearby__item">
      <img
        src="https://cdn.jsdelivr.net/gh/ycshang123/image-hosting@master/shop1.4kfdkbs81300.webp"
        class="nearby__item__img"
      />
      <div class="nearby__content">
        <div class="nearby__content__title">沃尔玛</div>
        <div class="nearby__content__tags">
          <span class="nearby__content__tag">月售1万+</span>
          <span class="nearby__content__tag">起送￥0</span>
          <span class="nearby__content__tag">基础运费￥5</span>
        </div>
        <div class="nearby__content__highlight">
          VIP尊享满99减4元运费券(每月3张)
        </div>
      </div>
    </div>
    <div class="nearby__item">
      <img
        src="https://cdn.jsdelivr.net/gh/ycshang123/image-hosting@master/shop2.76x0git8yr00.webp"
        class="nearby__item__img"
      />
      <div class="nearby__content">
        <div class="nearby__content__title">山姆会员店</div>
        <div class="nearby__content__tags">
          <span class="nearby__content__tag">月售1万+</span>
          <span class="nearby__content__tag">起送￥0</span>
          <span class="nearby__content__tag">基础运费￥5</span>
        </div>
        <div class="nearby__content__highlight">联合利华洗护满10减5</div>
      </div>
    </div>
    <div class="nearby__item">
      <img
        src="https://cdn.jsdelivr.net/gh/ycshang123/image-hosting@master/shop1.4kfdkbs81300.webp"
        class="nearby__item__img"
      />
      <div class="nearby__content">
        <div class="nearby__content__title">沃尔玛</div>
        <div class="nearby__content__tags">
          <span class="nearby__content__tag">月售1万+</span>
          <span class="nearby__content__tag">起送￥0</span>
          <span class="nearby__content__tag">基础运费￥5</span>
        </div>
        <div class="nearby__content__highlight">
          VIP尊享满99减4元运费券(每月3张)
        </div>
      </div>
    </div>
    <div class="nearby__item">
      <img
        src="https://cdn.jsdelivr.net/gh/ycshang123/image-hosting@master/shop2.76x0git8yr00.webp"
        class="nearby__item__img"
      />
      <div class="nearby__content">
        <div class="nearby__content__title">山姆会员店</div>
        <div class="nearby__content__tags">
          <span class="nearby__content__tag">月售1万+</span>
          <span class="nearby__content__tag">起送￥0</span>
          <span class="nearby__content__tag">基础运费￥5</span>
        </div>
        <div class="nearby__content__highlight">联合利华洗护满10减5</div>
      </div>
    </div>
    <div class="nearby__item">
      <img
        src="https://cdn.jsdelivr.net/gh/ycshang123/image-hosting@master/shop1.4kfdkbs81300.webp"
        class="nearby__item__img"
      />
      <div class="nearby__content">
        <div class="nearby__content__title">沃尔玛</div>
        <div class="nearby__content__tags">
          <span class="nearby__content__tag">月售1万+</span>
          <span class="nearby__content__tag">起送￥0</span>
          <span class="nearby__content__tag">基础运费￥5</span>
        </div>
        <div class="nearby__content__highlight">
          VIP尊享满99减4元运费券(每月3张)
        </div>
      </div>
    </div>
    <div class="nearby__item">
      <img
        src="https://cdn.jsdelivr.net/gh/ycshang123/image-hosting@master/shop2.76x0git8yr00.webp"
        class="nearby__item__img"
      />
      <div class="nearby__content">
        <div class="nearby__content__title">山姆会员店</div>
        <div class="nearby__content__tags">
          <span class="nearby__content__tag">月售1万+</span>
          <span class="nearby__content__tag">起送￥0</span>
          <span class="nearby__content__tag">基础运费￥5</span>
        </div>
        <div class="nearby__content__highlight">联合利华洗护满10减5</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const gridList = [
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
    return { gridList }
  }
}
</script>

<style scoped lang="scss">
@import "../../style/virables.scss";
@import "../../style/mixins.scss";
.position {
  position: relative;
  padding: 0.16rem 0.16rem 0.16rem 0;
  font-size: 0.16rem;
  @include ellipse;
  .position__icon {
    position: relative;
    top: 0.01rem;
    font-size: 0.2rem;
  }
  .position__notice {
    position: absolute;
    right: 0;
    font-size: 0.2rem;
  }
  color: $content-fontcolor;
}

.search {
  margin-bottom: 0.12rem;
  line-height: 0.32rem;
  background-color: $search-bgColor;
  color: $search-fontColor;
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
.banner {
  height: 0;
  overflow: hidden;
  // 预留高度防抖 (图片高度/图片宽度)
  padding-bottom: 25.4%;
  &__img {
    width: 100%;
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
      color: $content-fontcolor;
    }
  }
}
.gap {
  margin: 0 -0.18rem;
  height: 0.04rem;
  background-color: $content-bgColor;
}

.nearby {
  &__title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }

  &__item {
    display: flex;
    padding-top: 0.12rem;
    &__img {
      margin-right: 0.16rem;
      width: 0.56rem;
      height: 0.56rem;
    }
  }

  &__content {
    flex: 1;
    padding-bottom: 0.12rem;
    border-bottom: 1px solid $content-bgColor;
    &__title {
      line-height: 0.22rem;
      font-size: 0.16rem;
      color: $content-fontcolor;
    }
    &__tags {
      margin-top: 0.08rem;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: $content-fontcolor;
    }
    &__tag {
      margin-right: 0.16rem;
    }
    &__highlight {
      margin: 0.08rem 0 0 0;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: #e93b3b;
    }
  }
}
</style>
