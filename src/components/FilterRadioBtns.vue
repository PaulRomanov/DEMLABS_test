<template>
  <div class="wrapper_filter">
    <div class="title_btn">Filter</div>
    <div class="radio-buttons">
      <label class="radio-button">
        <input type="radio" name="filter" value="public" v-model="selectedFilter" />
        <span class="custom-radio">
          <img src="@/assets/img/radio_btn_active.svg" alt="Public" class="active-icon" />
          <img src="@/assets/img/radio_btn.svg" alt="Public" class="inactive-icon" />
        </span>
        <span class="title_radio">Public certificates</span>
      </label>

      <label class="radio-button">
        <input type="radio" name="filter" value="private" v-model="selectedFilter" />
        <span class="custom-radio">
          <img src="@/assets/img/radio_btn_active.svg" alt="Public" class="active-icon" />
          <img src="@/assets/img/radio_btn.svg" alt="Public" class="inactive-icon" />
        </span>
        <span class="title_radio">Private certificates</span>
      </label>

      <label class="radio-button">
        <input type="radio" name="filter" value="both" v-model="selectedFilter" />
        <span class="custom-radio">
          <img src="@/assets/img/radio_btn_active.svg" alt="Public" class="active-icon" />
          <img src="@/assets/img/radio_btn.svg" alt="Public" class="inactive-icon" />
        </span>
        <span class="title_radio">Both</span>
      </label>
    </div>
  </div>
</template>

<script>
import "@/assets/css/main.css";

export default {
  name: "FilterRadioBtns",
  created() {},
  data() {
    return {
      selectedFilter: "public",
    };
  },
  props: {},
  methods: {},
};
</script>

<style scoped>
.wrapper_filter {
  margin: 8px 0 0 33px;
}
.title_btn {
  color: #fff;
  font-family: "Quicksand";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  margin: 10px 0 22px 6px;
}
.radio-button {
  display: flex;
  margin: 0 0 20px 0;
  align-items: center;
}
.radio-button input {
  display: none;
}

.radio-button .custom-radio {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.custom-radio .active-icon {
  display: none;
}

.custom-radio {
  margin: 0 10px 0 0;
}
.radio-button input:checked + .custom-radio .active-icon {
  display: inline;
}

.radio-button input:checked + .custom-radio .inactive-icon {
  display: none;
}
.title_radio {
  color: #fff;
  font-family: "Quicksand";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
}
</style>
