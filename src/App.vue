<template>
  <nav class="menu-bar">
    <router-link class="nav-item" to="/">Liste des films</router-link>
    <router-link class="nav-item" to="/categories">Categories</router-link>
    <router-link class="nav-item" to="/register">Inscription</router-link>
    <router-link class="nav-item" to="/login" v-if="!isLoggedIn">Connexion</router-link
    >
    <router-link class="nav-item" to="/userList">Liste des utilisateurs</router-link
    >
    <router-link to="/" class="nav-item logout" @click="logout"
      >Déconnexion</router-link
    >
  </nav>

  <router-view />
</template>

<script>
import userServices from "@/services/userService";

export default {
  data() {
    return {
      user: {},
    };
  },

  methods: {
    async logout() {
      try {
        await userServices.logout();
        this.$router.push("/");
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
