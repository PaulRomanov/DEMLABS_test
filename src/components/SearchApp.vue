<template>
  <div class="search-container">
    <div class="search-icon">
      <img src="@/assets/img/search.svg" alt="search" />
    </div>
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search"
      @input="handleSearch"
      class="search-input"
    />
  </div>
</template>

<script>
import "@/assets/css/main.css";

export default {
  name: "SearchApp",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    handleSearch() {
      console.log("Вы ввели: " + this.searchQuery);
    },
  },
};
</script>

<style scoped>
.search-container {
  display: flex;
  align-items: center;
  background-color: #2e3138;
  border-bottom: 1px solid #393b41;
  width: 224px;
}

.search-icon {
  padding: 7px 7px 0 9px;
}

.search-input {
  background: transparent;
  border: none;
  outline: none;
  color: #757184;
  width: 100%;
  padding: 10px 0 9px 8px;
  font-family: "Quicksand";
  font-size: 16px;
}
</style>
