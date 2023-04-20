<!-- 
 * @Descripttion: 
 * @Author: sjq
 * @Date: 2023-04-15 19:07:52
 * @LastEditors: sjq
 * @LastEditTime: 2023-04-15 19:08:05
 -->
<template>
  <div class="pb84">
    <div class="top">
      <div class="photo">
        <img class="avatar" src="../assets/images/avatar.png" alt="" />
      </div>
      <div class="name">MrWangGang</div>
      <div class="money">
        <img src="../assets/images/icon-4.png" alt="" class="ico" />
        <div class="num">200000</div>
      </div>
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
    </div>
    <Tabbar active="my"></Tabbar>
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
    const router = useRouter();
    let list = reactive([
      {
        title: '账单',
        comment: '查看你的账单详情',
        icon: 'images/icon-3.png',
        path: 'home',
      },
      {
        title: '充值',
        comment: '充值入口，以便使用后续功能',
        icon: 'images/icon-1.png',
        path: 'home',
      },
      {
        title: '修改密码',
        comment: '设置新的密码',
        icon: 'images/icon-2.png',
        path: 'home',
      },
    ]);
    let goPage = (data) => {
      router.push(data.path);
    };
    return {
      list,
      getImageUrl,
      goPage,
    };
  },
});
</script>
<style lang="scss" scoped>
.main {
  background: #f2f2f2;
  height: 100%;
}
.top {
  background: url(../assets/images/top.png) no-repeat;
  background-size: cover;
  padding: 50px 24px 24px;
  text-align: center;
  .photo {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    overflow: hidden;
    display: inline-block;
    .avatar {
      width: 100%;
      height: 100%;
    }
  }
  .name {
    font-size: 21px;
    font-weight: 400;
    margin-bottom: 60px;
    color: #fff;
    line-height: 31px;
  }
  .money {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .ico {
      width: 37px;
      height: 37px;
    }
    .num {
      font-size: 32px;
      font-weight: 500;
      color: rgb(196, 196, 196);
    }
  }
}
</style>
