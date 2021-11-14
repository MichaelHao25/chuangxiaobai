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
.footer {
  border-top: 1px solid #e5e5e5;
  max-width: 1150px;
  width: 100%;
  margin: 0 auto;
  height: 100px;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: flex-start;
  grid-template-columns: auto 1fr auto;
  .logo {
    font-size: 22px;
    font-weight: bold;
    color: #505050;
  }
  a {
    font-size: 16px;
    color: #505050;
    margin-left: 60px;
  }
  .copyright {
    justify-items: flex-end;
    font-size: 14px;
    color: #505050;
    span{
        padding-right: 30px;
        font-size: 16px;
        font-weight: bold;
        color: #505050;
    }
  }
}
</style>
