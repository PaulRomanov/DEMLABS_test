<template>
  <nav>
    <img class="nav_img_logo" src="@/assets/img/logo.svg" alt="Иконка" />
    <ul class="nav_ul">
      <li
        class="nav_li"
        :class="{ nav_li_active: isRouteActive(item.route)}"
        v-for="item in menuItems"
        :key="item.id"
      >
        <img
          class="nav_li_img"
          :src="require(`@/assets/img/${item.id}.svg`)"
          alt="Иконка"
        />
        <router-link :to="item.route" class="nav_item">{{ item.label }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import "@/assets/css/main.css";

export default {
  name: "MenuApp",
  data() {
    return {
      menuItems: [
        { id: 1, label: "Wallet", route: "/Wallet" },
        { id: 2, label: "DEX", route: "/DEX" },
        { id: 3, label: "TX explorer", route: "/TXexplorer" },
        { id: 4, label: "Certificates", route: "/Certificates" },
        { id: 5, label: "Tokens", route: "/Tokens" },
        { id: 6, label: "VPN client", route: "/VPNclient" },
        { id: 7, label: "VPN service", route: "/VPNservice" },
        { id: 8, label: "Console", route: "/Console" },
        { id: 9, label: "Logs", route: "/Logs" },
        { id: 10, label: "Settings", route: "/Settings" },
        { id: 11, label: "dApps", route: "/dApps" },
      ],
    };
  },
  methods: {
    isRouteActive(route) {
      return this.$route.path === route;
    },
  },
};
</script>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  padding: 6px 0px 0 0;
}
.nav_img_logo {
  margin: 0 0 0 11px;
}
ul {
  list-style-type: none;
}
.nav_ul {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 86%;
  margin: 1px 0 0 0;
}
.nav_li {
  width: 169px;
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 0 0 0px;
}
.nav_li_active {
  border-radius: 0px 16px 16px 0px;
  background: var(--mainBGcolor, #2e3138);
  box-shadow: 3px 3px 5px 0px rgba(8, 7, 13, 0.25) inset,
    1px 1px 0px 0px rgba(107, 102, 126, 0.49);
}
.nav_item {
  font-family: "Quicksand";
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;
  text-decoration: none;
  margin: 0 0 0 18px;
}
.nav_li_img {
  margin: 0 0 0 23px;
}
</style>
