<template>
  <div class="tabbar">
    <div class="tabbar_list">
      <div class="tabbar_item" @click="goPage('home')">
        <img
          src="../assets/images/ai-icon-acitve.png"
          alt=""
          v-if="active === 'home'"
        />
        <img src="../assets/images/ai-icon.png" alt="" v-else />
        <div :class="{ active: active === 'home' }">Ai</div>
      </div>
      <div class="tabbar_item">
        <img
          src="../assets/images/my-icon-active.png"
          @click="goPage('my')"
          alt=""
          v-if="active === 'my'"
        />
        <img
          src="../assets/images/my-icon.png"
          @click="goPage('my')"
          alt=""
          v-else
        />
        <div :class="{ active: active === 'my' }">我的</div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  props: {
    active: String,
  },
  setup(props) {
    const { active } = toRefs(props);
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
    color: rgb(196, 196, 196);
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
.active {
  color: #000;
}
</style>
