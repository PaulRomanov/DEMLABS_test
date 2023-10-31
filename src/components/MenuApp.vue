<template>
  <nav>
    <img src="@/assets/img/logo.svg" alt="Иконка">
    <ul>
      <li v-for="item in menuItems" :key="item.id">
        <img :src="require(`@/assets/img/${item.id}.svg`)" alt="Иконка">
        <router-link :to="item.route" class="nav_item">{{ item.label }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "MenuApp",
  data() {
  return {
    menuItems: [
      { id: 1, label: 'Wallet', route: '/' },
      { id: 2, label: 'DEX', route: '/DEX' },
      { id: 3, label: 'TX explorer', route: '/TXexplorer' },
      { id: 4, label: 'Certificates', route: '/Certificates' },
      { id: 5, label: 'Tokens', route: '/Tokens' },
      { id: 6, label: 'VPN client', route: '/VPNclient' },
      { id: 7, label: 'VPN service', route: '/VPNservice' },
      { id: 8, label: 'Console', route: '/Console' },
      { id: 9, label: 'Logs', route: '/Logs' },
      { id: 10, label: 'Settings', route: '/Settings' },
      { id: 11, label: 'dApps', route: '/dApps' },
    ]
  };
},

};
</script>

<style scoped>
.nav_item{
font-family: 'Quicksand';
font-size: 13px;
font-weight: 400;
line-height: 16px;
letter-spacing: 0px;
text-align: left;
color: #FFFFFF;
}
</style>