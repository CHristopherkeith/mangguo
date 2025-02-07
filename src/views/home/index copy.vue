<template>
  <div class="home">
    <div class="home__content"><button @click="handleClick">点击2</button></div>
  </div>
</template>
<script setup lang="ts">
// 目标转账链接
// const transferUrl =
//   'alipays://platformapi/startapp?appId=20000056&url=https://ds.alipay.com/?from=mobilecodec'

// // 对链接进行 URL 编码
// const encodedUrl = encodeURIComponent(transferUrl)

// // 完整的支付宝 URL Scheme
// const alipayScheme = `alipays://platformapi/startapp?appId=20000056&url=${encodedUrl}`

function handleClick(): void {
  const a = document.createElement('a')
  a.href =
    'alipays://platformapi/startapp?appId=09999988&actionType=toAccount&goBack=NO&amount=1.00&account=15202060667&memo=%E5%A4%87%E6%B3%A8'
  // 'alipays://platformapi/startapp?appId=20000067&actionType=toAccount&account=15202060667&amount=0.01&memo=测试转账'
  // alipayScheme
  // 'alipays://platformapi/startapp?appId=20000123&actionType=toAccount&goBack=NO'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  &__content {
    width: 188px;
    background-color: aquamarine;
  }
}
</style>
