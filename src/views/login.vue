<!-- 
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2023-04-15 19:07:52
 * @LastEditors: sjq
 * @LastEditTime: 2023-04-15 19:08:05
 -->
<template>
  <div class="main">
    <template v-if="steep === 1">
      <div class="img_bg">
        <!-- <img class="photo" src="../assets/images/photo.png" alt="" /> -->
        <img class="logo" src="../assets/images/logo-title.png" alt="" />
      </div>
      <div class="preamble_main">
        <div class="preamble">
          想象一下，你有一个比你更加有效率的助手，它不需要睡觉，也不会感到疲劳。与此同时，它工作起来像剃刀一样的精准，并且能够将互联网上所有的知识应用到任务中去！不要害怕它们,勇于拥抱使用它们。
          才是明智的选择!
        </div>
        <div class="s_btn" @click="nextSteep(2)">使用手机号登录</div>
      </div>
    </template>
    <template v-if="steep === 2">
      <div class="logo_2">
        <div class="title">你好</div>
        <div class="comment">在这里输入您的手机号码</div>
        <van-field
          v-model="tel"
          type="tel"
          label=""
          class="m_input"
          placeholder="请输入手机号码"
        />
        <div class="s_btn" @click="nextSteep(3)">发送</div>
      </div>
    </template>
    <template v-if="steep === 3">
      <div class="logo_2">
        <div class="title">设置称呼</div>
        <div class="comment">我们该怎么称呼您?</div>
        <van-field
          v-model="name"
          type="text"
          label=""
          class="m_input"
          placeholder="请输入您的称呼"
        />
        <div class="s_btn" @click="nextSteep(4)">NEXT</div>
      </div>
    </template>
  </div>
</template>
<script>
import { defineComponent, ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  setup() {
    let steep = ref(1);
    let tel = ref('');
    let name = ref('');
    const router = useRouter();
    let nextSteep = (val) => {
      if (val === 4) {
        router.push('home');
      }
      steep.value = val;
    };
    return {
      steep,
      tel,
      name,
      nextSteep,
    };
  },
});
</script>
<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff;
}
.img_bg {
  flex: 1;
  background: url(../assets/images/photo.png) no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .logo {
    width: 150px;
  }
}
.preamble_main {
  padding: 36px 24px 80px;
  .preamble {
    text-align: center;
    margin-bottom: 16px;
  }
}
.logo_2 {
  padding: 36px 24px;
  .title {
    color: rgb(0, 0, 0);
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 4px;
  }
  .comment {
    opacity: 0.7;
    color: rgb(0, 0, 0);
    font-size: 16px;
    margin-bottom: 36px;
  }
  .m_input {
    margin-bottom: 36px;
    border: solid 1px rgba(0, 0, 0, 0.5);
    height: 58px;
    font-size: 18px;
    line-height: 36px;
  }
}
</style>
