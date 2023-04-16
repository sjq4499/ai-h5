<template>
  <div class="tabbar">
    <div class="tabbar_list">
      <div class="tabbar_item" @click="goPage('home')">
        <img src="@/assets/images/ai-icon.png" alt="" />
        <div>Ai</div>
      </div>
      <div class="tabbar_item">
        <img src="@/assets/images/my-icon.png" @click="goPage('my')" alt="" />
        <div>我的</div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    let active = ref('');
    const router = useRouter();
    let goPage = (data) => {
      router.push(data);
    };
    return {
      active,
      goPage,
    };
  },
});
</script>
<style lang="scss" scoped>
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
  .tabbar_list {
    display: flex;
    height: 84px;
    .tabbar_item {
      text-align: center;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        display: inline-block;
        width: 24px;
      }
    }
  }
}
</style>
