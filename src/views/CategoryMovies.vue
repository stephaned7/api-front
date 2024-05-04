<template>
  <div>
    <h1>Films dans la catégorie {{ category.name }}</h1>
  </div>

  <div v-for="movie in movies" :key="movie.id">
    <h2>{{ movie.title }}, {{ movie.release_date }}</h2>
    <button @click="viewDetails(id)">Détails</button>
  </div>
</template>

<script>
import categoryService from "@/services/categoryService";

export default {
  data() {
    return {
      category: {
        id: null,
        name: "",
      },
      movies: [],
    };
  },

  methods: {
    fetchCategory() {
      categoryService
        .fetchCategory(this.category.id)
        .then((res) => {
          this.category = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getMoviesInCateg() {
      categoryService
        .getMoviesInCategory(this.category.id)
        .then((res) => {
          this.movies = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    viewDetails(id) {
      this.$router.push({ name: "MovieDetails", params: { id } });
    },
    
  },

  created() {
    this.category.id = this.$route.params.id;
    this.fetchCategory();
    this.getMoviesInCateg();
  },
};
</script>

<style lang="scss" scoped></style>
