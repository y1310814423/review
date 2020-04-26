<template>
  <Layout id="app">
    <Navtab />
    <div class="cenCompen">
      <transition name="fade">
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
    </div>
  </Layout>
</template>
<script>
// import $ from "jquery";
import Navtab from "@/components/Navtab.vue";
export default {
  name: "Home",
  components: {
    Navtab
  },
  mounted() {
    var that = this;
    that.handleSpinCustom();
    console.log(that.$store.state.loadFlag);
  },
  methods: {
    handleSpinCustom() {
      this.$Spin.show();
      setTimeout(() => {
        this.$Spin.hide();
      }, 3000);
    }
  }
};
</script>
<style lang="scss">
@import url("./assets/initvue.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  .cenCompen {
    position: relative;
    flex: 1;
  }
}
</style>
