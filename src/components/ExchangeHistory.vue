<template>
  <div class="wrapper">
    <div class="title comon_style">Certificates</div>
    <div class="status_radio comon_style">Public</div>
    <div
      class="wrapper_certificates"
      v-for="certificat in certificates"
      :key="certificat.id"
    >
      <div class="item_certificat comon_style">{{ certificat.label }}</div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/main.css";
export default {
  name: "ExchangeHistory",
  data() {
    return {
      certificates: [
        { id: 1, label: "core-t.0" },
        { id: 2, label: "core-t.1" },
        { id: 3, label: "core-t.2" },
        { id: 4, label: "test.test.1" },
        { id: 5, label: "test.test.2" },
        { id: 6, label: "test.test.3" },
        { id: 7, label: "test.test.4" },
        { id: 8, label: "test.test.5" },
        { id: 9, label: "test.test.6" },
        { id: 10, label: "test.test.7" },
      ],
    };
  },
  props: {},
  methods: {},
};
</script>

<style scoped>
.wrapper{
  margin: 0 0 0 14px;
}
.comon_style {
  display: flex;
  align-items: center;
  color: #fff;
  font-family: "Quicksand";
  font-style: normal;
}
.title {
  font-size: 14px;
  font-weight: 700;
  height: 42px;
}

.status_radio {
  background-color: #2e3138;
  font-size: 12px;
  font-weight: 500;
  height: 30px;
}
.item_certificat {
  font-size: 16px;
  font-weight: 400;
  border-bottom: 1px solid #2e3138;
  height: 50px;
}
</style>
