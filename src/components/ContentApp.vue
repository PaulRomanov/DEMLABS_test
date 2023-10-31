<template>
  <div class="exchange_history"></div>
  <div class="wrapper_btns">
    <FilterRadioBtns />
    <div class="wrapper_action">
      <div class="title_btn">Actions</div>
      <div class="wrapper_btns_list">
        <CustomButton :buttonText="'Create certificate'" />
        <CustomButton :buttonText="'Import certificate'" />
        <CustomButton :buttonText="'Export private certificate to public'" :isDisabled="true"/>
        <CustomButton :buttonText="'Export certificate to mempool'" :isDisabled="true"/>
        <CustomButton :buttonText="'Delete certificate'" :isDisabled="true"/>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/main.css";
import FilterRadioBtns from "./FilterRadioBtns.vue";
import CustomButton from "./CustomButton.vue";

export default {
  name: "ContentApp",
  components: {
    FilterRadioBtns,
    CustomButton,
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
.wrapper_action {
  margin: 37px 0 0 35px;
}
.title_btn {
  color: #fff;
  font-family: "Quicksand";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  margin: 10px 0 22px 6px;
}
</style>
