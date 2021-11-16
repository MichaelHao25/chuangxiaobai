<script setup lang="ts"></script>

<template>
  <div class="bg-f6f6fa">
    <div class="maxw-1200 w-full m-auto">
      <div class="banner flex items-center">
        <div class="content flex flex-col">
          <div class="title">轻松完成注册</div>
          <div class="descript">
            3天零奔波，无需到场，无需打印， <br />注册公司从未如此简单
          </div>
          <div class="button text-center self-end">立即体验</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.maxw-1200 {
  max-width: 1200px;

}
.bg-f6f6fa {
  background: #f6f6fa;
}
.banner {
  height: 620px;
  background: url("../../assets/banner.png") right center/574px 574px
    no-repeat;
  .content {
    width: 460px;
    color: #505050;
    .title {
      font-size: 58px;
      line-height: 120%;
      font-weight: bold;
    }
    .descript {
      padding: 27px 0;
      font-size: 24px;
      line-height: 150%;
      text-align: left;
    }
    .button {
      width: 150px;
      height: 50px;
      font-size: 16px;
      line-height: 150%;
      border-radius: 12px;
      color: #fff;
      line-height: 50px;
      background: #19a5eb;
    }
  }
}
</style>
