<template>
  <nav>
    <router-link to="/">Liste des films</router-link> |
    <router-link to="/categories">Categories</router-link> |
    <router-link to="/register">Inscription</router-link> |
    <router-link to="/login" v-if="!isLoggedIn">Connexion</router-link> |
    <router-link to="/userList" v-if="getHighestRole(user.roles) === 'Admin'"
      >Liste des utilisateurs</router-link
    >
    |
    <button @click="logout">Déconnexion</button>
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

    getHighestRole(roles) {
      if (!roles) {
        return "No role";
      }
      if (roles.includes("ROLE_ADMIN")) {
        return "Admin";
      } else if (roles.includes("ROLE_BANNED")) {
        return "Banned";
      } else {
        return "User";
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
