<template>
  <div class="wrapper">
    <div class="header">
      <div class="header__info">
        <div class="header__info__username">{{ userInfo.username }}</div>
        <div class="header__info__nickname">昵称:{{ userInfo.nickname }}</div>
      </div>
      <img class="header__avatar" :src="userInfo.avatar" />
    </div>
    <div class="list">
      <div class="list__item">
        <div class="list__item__icon iconfont">&#xe64c;</div>
        <div class="list__item__test">我的地址</div>
        <div class="list__item__arrow iconfont">&#xe7ab;</div>
      </div>
    </div>
    <div class="logout" @click="handleLogout">退出登录</div>
  </div>
  <AppDocker :currentIndex="3" />
</template>

<script setup>
import AppDocker from "../../components/AppDocker.vue";
import { reactive } from "vue";
import { get } from "../../utils/request";
import { useRouter } from "vue-router";
const userInfo = reactive({ _id: "", username: "", nickname: "", avatar: "" });
const getUserInfo = async () => {
  const result = await get("/user/info");
  if (result?.code === 200 && result?.data) {
    const { _id, username, avatar, nickname } = result.data;
    console.log(result.data);
    userInfo._id = _id || "";
    userInfo.username = username || "";
    userInfo.avatar = avatar || "";
    userInfo.nickname = nickname || "";
  }
};
getUserInfo();
</script>

<style scoped lang="scss">
@import "../../style/virables.scss";
.wrapper {
  position: absolute;
  top: 0;
  right: 0;
  bottom: .5rem;
  left: 0;
  overflow-y: auto;
  background: $dark-bgColor;
}
.header {
  position: relative;
  height: 1.5rem;
  padding-top: .4rem;
  background-image: linear-gradient(239deg, #3a6ff3 0%, #50c7fb 100%);
  &__info {
    height: .66rem;
    padding-top: .46rem;
    margin: .3rem .18rem 0 .18rem;
    background: #fff;
    border-radius: .08rem;
    &__username {
      color: #262628;
      font-size: .24rem;
      line-height: .38rem;
      text-align: center;
    }
    &__nickname {
      margin-top: .04rem;
      color: #c1c0c9;
      font-size: .14rem;
      text-align: center;
    }
  }
  &__avatar {
    position: absolute;
    top: .2rem;
    left: 50%;
    width: .94rem;
    height: .94rem;
    border-radius: 50%;
    transform: translateX(-50%);
  }
}

.list {
  margin: .16rem .18rem 0 .18rem;
  background: $bgColor;
  box-shadow: 0 .08rem .16rem 0 rgba(0, 0, 0, .08);
  border-radius: .08rem;
  &__item {
    display: flex;
    padding: .2rem;
    color: #262626;
    font-size: .14rem;
    line-height: .22rem;
    &__icon {
      width: .22rem;
      height: .22rem;
      margin-right: .12rem;
      color: $bgColor;
      font-weight: bold;
      text-align: center;
      background: #32c5ff;
      border-radius: .08rem;
    }
    &__test {
      flex: 1;
    }
    &__arrow {
      width: .2rem;
      color: #c2c4ca;
      font-weight: bold;
    }
  }
}
.logout {
  padding: .06rem 0;
  margin: .18rem;
  color: $bgColor;
  font-size: .14rem;
  line-height: .32rem;
  text-align: center;
  background: $btn-bgColor;
  border-radius: .04rem;
}
</style>
