<template>
  <div>
    <h1>Ajouter un film</h1>

    <form @submit.prevent="submitMovie">
      <div>
        <label for="title">Titre du film</label>
        <input type="text" v-model="movie.title" />
      </div>

      <div>
        <label for="synopsis">Résumé</label>
        <textarea
          name="synopsis"
          id="synopsis"
          v-model="movie.synopsis"
        ></textarea>
      </div>

      <div>
        <label for="director">Réalisateur</label>
        <input type="text" v-model="movie.director" />
      </div>

      <div>
        <label for="releaseDate">Année de sortie</label>
        <input type="text" v-model="movie.release_date" />
      </div>

      <div v-for="(categ, index) in categories" :key="index">
        <label for="category">{{ categ.name }}</label>
        <input type="checkbox" :value="categ.id" @change="updateCategs($event, categ.id)" />
      </div>

      <button type="submit">Ajouter le film</button>
    </form>
  </div>
</template>

<script>
import movieService from "@/services/movieService";
import categoryService from "@/services/categoryService";

export default {
  data() {
    return {
      movie: {
        title: "",
        synopsis: "",
        release_date: "",
        director: "",
        categories: [],
      },
      categories: [],
    };
  },

  methods: {
    submitMovie() {
      movieService
        .createMovie(this.movie)
        .then(() => {
          this.$router.push({ name: "MovieList" });
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
  },
  created() {
    this.seeCategs();
  },
};
</script>

<style></style>
