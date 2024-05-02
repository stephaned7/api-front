<template>
  <h1>Mofifier</h1>

  <form @submit.prevent="submitUpdate">
    <div>
      <label for="title">Titre:</label>
      <input type="text" id="title" v-model="movie.title" />
    </div>

    <div>
      <label for="synopsis">Résumé</label>
      <textarea id="synopsis" v-model="movie.synopsis"></textarea>
    </div>

    <div>
      <label for="director">Réalisateur</label>
      <input type="text" id="director" v-model="movie.director" />
    </div>

    <div>
      <label for="releaseDate">Année de sortie</label>
      <input type="text" id="releaseDate" v-model="movie.release_date" />
    </div>

<div v-for="category in categories" :key="category.id">
  <input
    type="checkbox"
    :value="category.id"
    v-model="movie.categories"
    :checked="movie.categories.includes(category.id)"
  />
  <label>{{ category.name }}</label>
</div>

    <button type="submit">Mettre à jour</button>
  </form>
</template>

<script>
import movieService from "@/services/movieService";
import categoryService from "@/services/categoryService";

export default {
  data() {
    return {
      movie: {
        id: this.$route.params.id,
        title: "",
        synopsis: "",
        director: "",
        releaseDate: "",
        categories: [],
      },
      categories: [],
    };
  },

  methods: {
    fetchMovie() {
      movieService
        .getMovie(this.movie.id)
        .then((res) => {
          this.movie = res.data;
          this.movie.categories = this.movie.categories.map(
            (categ) => categ.id
          );
        })
        .catch((e) => console.error(e));
    },

    seeCategs() {
      categoryService
        .getCategories()
        .then((res) => (this.categories = res.data))
        .catch((e) => console.error(e));
    },

    updateCategs(event, categId) {
      if (event.target.checked) {
        this.movie.categories.push(categId);
      } else {
        const index = this.movie.categories.indexOf(categId);
        if (index !== -1) {
          this.movie.categories.splice(index, 1);
        }
      }
    },

    submitUpdate() {
      movieService
        .updateMovie(this.movie.id, this.movie)
        .then(() => this.$router.push({ name: "MovieList" }));
    },
  },

  created() {
    this.fetchMovie();
    this.seeCategs();
  },
};
</script>

<style></style>
