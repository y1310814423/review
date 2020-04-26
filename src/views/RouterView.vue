<template>
  <div class="home">
    <Layout class="main">
      <Sider hide-trigger width="100" collapsed-width="100">Sider</Sider>
      <Content class="contian">
        <Spin fix>
          <Icon type="ios-loading" size="18" class="demo-spin-icon-load"></Icon>
          <div>Loading</div>
        </Spin>
      </Content>
    </Layout>
  </div>
</template>

<script>
export default {
  name: "RouterView",
  data() {
    return {};
  },
  components: {}
};
</script>
<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  .main {
    height: 100%;
    .contian {
      position: relative;
    }
  }
}
.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.demo-spin-col {
  height: 100rem;
  position: relative;
  border: 1rem solid #eee;
}
</style>
