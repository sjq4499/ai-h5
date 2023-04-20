<!-- 
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2023-04-15 19:07:52
 * @LastEditors: sjq
 * @LastEditTime: 2023-04-15 19:08:05
 -->
<template>
  <div class="main pb84">
    <div class="top">
      <div class="logo">Lambda Ai</div>
      <div class="user">
        <div class="name">Mr.Wang</div>
        <img class="avatar" src="../assets/images/avatar.png" alt="" />
      </div>
    </div>
    <div class="home_swiper">
      <div class="hey">hey!</div>
      <div class="hey2">今天要创作什么内容呢?</div>
    </div>
    <div class="search">
      <van-search
        v-model="value"
        shape="round"
        placeholder="搜索内容类型，如写作，绘画..."
      />
    </div>
    <div class="tab">
      <van-tabs v-model:active="active">
        <van-tab title="热门"></van-tab>
        <van-tab title="写作"></van-tab>
        <van-tab title="艺术"></van-tab>
        <van-tab title="商务"></van-tab>
      </van-tabs>
    </div>
    <div
      class="list"
      v-for="item in list"
      :key="item.title"
      @click="goPage(item)"
    >
      <div class="icon">
        <img :src="getImageUrl(item.icon)" alt="" />
      </div>
      <div class="list_box">
        <div class="title">
          {{ item.title }}
        </div>
        <div class="comment">
          {{ item.comment }}
        </div>
      </div>
      <div class="right">
        <van-icon name="arrow" />
      </div>
    </div>
    <Tabbar active="home"></Tabbar>
  </div>
</template>
<script>
import { defineComponent, ref, reactive } from 'vue';
import { getImageUrl } from '@/utils/index.js';
import { useRouter } from 'vue-router';
import Tabbar from '@/components/tabbar.vue';

export default defineComponent({
  components: {
    Tabbar,
  },
  setup() {
    let value = ref('');
    let active = ref('');
    const router = useRouter();
    let list = reactive([
      {
        title: '对话',
        comment:
          '它可以与用户进行自然的对话，可以帮助用户解决问题、提供信息等多种功能',
        icon: 'images/icon-6.png',
        path: 'dialogue',
      },
      {
        title: '问答  ',
        comment: '它可以理解用户的问题，并根据问题生成答案',
        icon: 'images/icon-5.png',
        path: 'answer',
      },
    ]);
    let goPage = (data) => {
      router.push(data.path);
    };
    const icon = {
      active: 'https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png',
      inactive:
        'https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png',
    };
    return {
      value,
      getImageUrl,
      active,
      list,
      icon,
      goPage,
    };
  },
});
</script>
<style lang="scss" scoped>
.main {
  padding: 24px;
  height: 100%;
  background: #fff;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .user {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .name {
      font-weight: bold;
      margin-right: 4px;
    }
    .avatar {
      display: inline-block;
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
}
.my-swipe {
  margin-top: 40px;
  margin-bottom: 20px;
  img {
    width: 100%;
  }
}
.list {
  border: 1px solid rgba(199, 209, 219, 0.25);
  box-shadow: 0px 4px 12px rgba(199, 209, 219, 0.25);
  border-radius: 15px;
}
.home_swiper {
  margin-top: 40px;
  margin-bottom: 20px;
  .hey {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .hey2 {
    padding-left: 30px;
  }
}
</style>
