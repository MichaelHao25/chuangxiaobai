<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="logo">XiaoBai</div>
    <div class="nav">
      <a href="#">隐私条款</a>
      <a href="#">服务条款</a>
      <a href="#">常见问题</a>
      <a href="#">联系我们</a>
    </div>
    <div class="copyright">
      <span>© Mrxiaobai</span>
      沪ICP备16014365号-1
    </div>
  </footer>
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
