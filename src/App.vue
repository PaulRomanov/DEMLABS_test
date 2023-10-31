<template>
  <div class="wrapper_app">
    <div class="wrapper_main">
      <div class="wrapper_menu">
        <MenuApp />
      </div>
      <div class="wrapper_content">
        <div class="wrapper_search"></div>
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <div class="wrapper_footer">
      <FooterApp />
    </div>
  </div>
</template>

<script>
import MenuApp from "./components/MenuApp.vue";
import FooterApp from "./components/FooterApp.vue";

export default {
  name: "App",
  components: {
    MenuApp,
    FooterApp,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.wrapper_app {
  width: 1280px;
  height: 720px;
  background-color: #2d3037;
}
.wrapper_main {
  width: 100%;
  height: 673px;
  display: flex;
  background-color: #2d3037;
}
.wrapper_menu {
  width: 180px;
  height: 100%;
  background-color: #2d3037;
  border-bottom-right-radius: 20px;
  box-shadow: 5px 5px 10px 0px rgba(8, 7, 13, 0.42), 1px 1px 0px 0px #524D64 inset;
  margin: 0 4px 0 0;
}
.wrapper_content {
  width: 1097px;
  height: 100%;
  background-color: rgb(62, 1, 120);
}
.wrapper_footer {
  width: 100%;
  height: 42px;
  margin-top: 5px;
  background-color: #2e3138;
  box-shadow: 5px -5px 10px 0px rgba(8, 7, 13, 0.42), 1px 1px 0px 0px #524d64 inset;
}
.wrapper_search {
  width: 100%;
  height: 60px;
  background-color: rosybrown;
}
.content {
  width: 100%;
  height: 613px;
  background-color: brown;
  display: flex;
}
</style>
