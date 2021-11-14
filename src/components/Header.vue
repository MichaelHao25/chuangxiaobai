<script setup lang="ts">
import { Button } from "ant-design-vue";
</script>

<template>
  <header class="header">
    <div class="logo">
      <img src="../assets/图片 184029.png" alt="" />
    </div>
    <div class="nav">
      <a href="#">首页</a>
      <a href="#">注册公司</a>
      <a href="#">代理记账</a>
      <a href="#">税筹套餐</a>
      <a href="#">其它服务</a>
      <a href="#">常见问题</a>
      <a href="#" class="login">登录</a>
      <a href="#" class="register">注册</a>
    </div>
  </header>
</template>

<style scoped lang="less">
.header {
  height: 85px;
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  a {
    color: #505050;
    font-size: 16px;
    margin-left: 37px;
  }
  .logo {
    width: 129px;
    height: 48px;
    img {
      width: 100%;
    }
  }
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .login {
    margin-left: 116px;
  }
  .login,
  .register {
    justify-self: flex-end;
  }
  .register {
    width: 100px;
    height: 34px;
    border: 1px solid #19a5eb;
    border-radius: 12px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #19a5eb;
  }
}
</style>
