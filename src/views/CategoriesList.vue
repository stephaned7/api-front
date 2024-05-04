<template>
  <div>
    <h1>Liste des catégories</h1>
    <button @click="createCategory">Ajouter une catégorie</button>

    <ul>
      <li v-for="categ in categories" :key="categ.id">
        {{ categ.name }}
        <button @click="viewCategsMovies(categ.id)">Voir les films</button>
        <button @click="updateCategory(categ.id)">Modifier la catégorie</button>
        <button @click="deleteCategory(categ.id)">Supprimer la catégorie</button>
      </li>
    </ul>
  </div>
</template>

<script>
import categoryService from "@/services/categoryService";

export default {
  data() {
    return {
      categories: [],
    };
  },

  methods: {
    async getCategories() {
      try {
        const res = await categoryService.getCategories();
        this.categories = res.data;
      } catch (e) {
        console.error(e);
      }
    },

    createCategory() {
      this.$router.push({ name: "AddCategory" });
    },

    viewCategsMovies(id){
        this.$router.push({ name: "CategoryMovies", params: { id } });
    },

    updateCategory(id){
        this.$router.push({ name: "UpdateCategory", params: { id } });
    },

    deleteCategory(id){
        categoryService
            .deleteCategory(id)
            .then(() => {
                this.getCategories();
            })
            .catch((e) => console.error(e));
    },

  },

  created() {
    this.getCategories();
  },
};
</script>

<style>
@import "@/assets/style.scss";
</style>
