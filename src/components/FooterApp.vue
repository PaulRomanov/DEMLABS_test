<template>
  <div class="status_bar">
    <div class="network_item" v-for="item in networkItem" :key="item.id">
      <div class="wrapper_label">
        {{ item.label }}
      </div>

      <img src="@/assets/img/indicator_online.svg" alt="img" />
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterApp",
  data() {
    return {
      networkItem: [
        { id: 1, label: "Cellnet", status: true },
        { id: 2, label: "Mainnet", status: true },
        { id: 3, label: "Somenet", status: true },
        { id: 4, label: "Testnet", status: true },
      ],
    };
  },
};
</script>

<style scoped>
.status_bar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
}
.network_item {
  display: flex;
  margin: 0 57px 0 61px;
}
.wrapper_label {
  color: #fff;

  text-align: right;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Quicksand;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0 8px 0 0;
}
</style>
