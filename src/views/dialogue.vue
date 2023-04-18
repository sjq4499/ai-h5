<template>
  <div class="main">
    <div
      class="leave-word-list"
      :class="{ 'm-list': item.right }"
      v-for="(item, index) in messageList"
      :key="index"
    >
      <div class="send-avatar">
        <img class="avatar" src="../assets/images/avatar.png" alt="" />
      </div>
      <div class="send-main">
        <div class="send-content">
          {{ item.messageContent }}
        </div>
      </div>
    </div>
    <div class="send-input">
      <div class="send-box">
        <van-icon class="history" name="wap-nav" @click="show" />
        <van-field
          class="input"
          v-model="value"
          label=""
          left-icon="smile-o"
          placeholder="说点什么吧..."
        />
        <div class="send-btn">
          <img src="../assets/images/send-icon.png" alt="" />
        </div>
      </div>
    </div>
    <van-popup
      v-model:show="showLeft"
      position="left"
      :style="{
        width: '80%',
        height: '100%',
        background: 'rgba(299, 299, 299, 0.95)',
      }"
      :overlay-style="{ background: 'transparent' }"
    >
      <div class="m-popup">
        <div
          class="popup-list"
          v-for="(item, index) in messageList"
          :key="index"
        >
          {{ item.messageContent }}
        </div>
      </div>
    </van-popup>
    <!-- <Tabbar></Tabbar> -->
  </div>
</template>
<script>
import { defineComponent, ref, reactive } from 'vue';
import Tabbar from '@/components/tabbar.vue';

export default defineComponent({
  components: {
    Tabbar,
  },
  setup() {
    let messageList = reactive([
      {
        messageContent: '你好！',
        right: true,
      },
      {
        messageContent: '你好！有什么我可以帮助你的吗？',
      },
      {
        messageContent: '如何进行 Prompt 逆向工程?',
        right: true,
      },
      {
        messageContent: `Prompt逆向工程是指从某个人工智能（AI）模型的响应中推断出它可能使用的Prompt的过程。这个过程可以帮助我们更好地理解模型是如何工作的，并且可以帮助我们提高模型的性能。下面是进行Prompt逆向工程的一些步骤：

        收集数据：首先，需要收集模型生成的一些示例数据。这些数据应该涵盖不同的主题，问题和回答类型。

        生成Prompt候选：通过检查模型生成的示例数据，尝试构建可能被模型使用的Prompt的候选列表。

        进行筛选：对候选Prompt进行筛选，并选择那些最有可能被模型使用的Prompt。

        进行测试：使用筛选后的Prompt进行测试，观察模型的响应并检查其质量。如果模型的响应质量不佳，则可以进一步调整和优化Prompt。

        重复以上步骤：多次尝试上述步骤，直到找到一个`,
      },
    ]);
    let value = ref('');
    let showLeft = ref(false);
    let show = () => {
      showLeft.value = true;
    };
    return {
      messageList,
      value,
      showLeft,
      show,
    };
  },
});
</script>
<style lang="scss" scoped>
.main {
  padding: 24px;
}
.send-input {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  .send-box {
    position: relative;
    display: flex;
    background: #fff;
    align-items: center;
    .history {
      padding: 0 12px;
      font-size: 20px;
      border-right: 1px #000 solid;
    }
    .history {
      margin-right: 4px;
    }
    .input {
      flex: 1;
    }
  }
  .send-btn {
    position: absolute;
    right: 10px;
    top: 10px;
  }
}
.leave-word-list {
  // padding: 0 15px;
  display: flex;
  color: #fff;
  margin-bottom: 20px;
  .send-avatar {
    display: inline-block;
    margin-right: 8px;
    width: 28px;
    img {
      width: 28px;
      height: 28px;
      border-radius: 50%;
    }
  }
  .send-main {
    flex: 1;

    .send-content {
      border-radius: 4px;
      background: #515151;
      padding: 10px 12px;
      display: inline-block;
      position: relative;
      margin-left: 0;
      margin-right: 36px;
      .content {
        line-height: 23px;
        word-break: break-all;
        font-size: 16px;
      }
    }
  }
}
.leave-word-list:last-child {
  padding-bottom: 15px;
}
.leave-word-list:first-child {
  margin-top: 15px;
}
.m-list {
  flex-direction: row-reverse;
  .send-avatar {
    margin-right: 0;
    margin-left: 8px;
  }
  .send-name {
    flex-direction: row-reverse;
    .name {
      margin-right: 0px;
      margin-left: 8px;
    }
  }
  .send-main {
    text-align: right;
  }
  .send-content {
    background: #e5e5e5 !important;
    color: #281319;
    border: none !important;
    margin-left: 48px !important;
    margin-right: 0 !important;
    text-align: start;
  }
}
.m-popup {
  padding: 24px;

  .popup-list {
    border-radius: 4px;
    background: #515151;
    padding: 10px 12px;
    color: #fff;
    display: inline-block;
    margin-bottom: 12px;
  }
}
</style>
