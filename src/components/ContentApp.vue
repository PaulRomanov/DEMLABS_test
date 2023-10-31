<template>
  <div class="exchange_history"></div>
  <div class="wrapper_btns">
    <FilterRadioBtns />
    <div class="wrapper_action">
      <div class="title_btn">Actions</div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/main.css";
import FilterRadioBtns from "./FilterRadioBtns.vue";
export default {
  name: "ContentApp",
  components: {
    FilterRadioBtns,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.exchange_history {
  width: 678px;
  height: 570px;
  margin: 25px 0 0 22px;
  background-color: #363a42;
  border-radius: 12px;
  box-shadow: 3px 3px 5px 0px rgba(8, 7, 13, 0.25) inset,
    1px 1px 0px 0px rgba(107, 102, 126, 0.49);
}
.wrapper_btns {
  width: 391px;
  height: 570px;
  margin: 25px 0 0 0;
  background-color: #2e3138;
}
</style>
