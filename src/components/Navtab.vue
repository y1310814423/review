<template>
  <div class="center_main">
    <div class="navtab">
      <router-link tag="div" class="nameAdime" to="/">
        <span>康子</span>
      </router-link>
      <ul>
        <router-link
          tag="li"
          v-for="(item, index) in listnav_arr"
          :key="index"
          :to="item.tolinkUrl"
        >
          <span>{{ item.tolinkNmae }}</span>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navtab",
  data() {
    return {
      listnav_arr: [
        {
          tolinkNmae: "Router全实例",
          tolinkUrl: "/RouterView"
        },
        {
          tolinkNmae: "Vuex全实例",
          tolinkUrl: "/VuexView"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    pageBind(page) {
      var that = this;
      that.$router.push({
        path: page.tolinkUrl
      });
    }
  }
};
</script>
<style lang="scss">
.center_main {
  height: 40rem;
  background: #42b983;
  max-width: 100%;
  .navtab {
    width: 1200rem;
    margin: 0 auto;
    height: 40rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .nameAdime {
      padding: 2rem 10rem;
      font-size: 12rem;
      color: white;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.2s;
      &.router-link-exact-active {
        transform: scale(1.2);
      }
    }
    ul {
      max-width: 1500rem;
      height: 100%;
      display: flex;
      font-size: 12rem;
      color: white;
      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 10rem;
        cursor: pointer;
        transition: all 0.2s;
        &.router-link-exact-active {
          border-bottom: 1rem solid white;
        }
      }
    }
  }
}
</style>
