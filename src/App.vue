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
    <div class="wrapper_footer"></div>
  </div>
</template>

<script>
import MenuApp from "./components/MenuApp.vue";

export default {
  name: "App",
  components: {
    MenuApp,
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
  background-color: bisque;
}
.wrapper_main {
  width: 100%;
  height: 673px;
  display: flex;
  background-color: rgb(110, 89, 129);
}
.wrapper_menu {
  width: 180px;
  height: 100%;
  background-color: rgb(109, 44, 165);
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
  background-color: rgb(42, 28, 54);
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
