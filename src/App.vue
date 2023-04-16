<template>
  <router-view></router-view>
  <van-toast></van-toast>
</template>
<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    let router = useRouter()
    // console.log( router)
    return {}
  }
})
</script>
<style scoped></style>
