<template>
  <h1>Modifier</h1>

  <form @submit.prevent="submitUpdate">
    <div>
      <label for="name">Nom:</label>
      <input type="text" id="name" v-model="category.name" />
    </div>

    <button type="submit">Modifer</button>
  </form>
</template>

<script>
import categoryService from "@/services/categoryService";

export default {
  data() {
    return {
      category: {
        id: this.$route.params.id,
        name: "",
      },
    };
  },

  methods: {
    fetchCategory() {
      categoryService.fetchCategory(this.category.id).then((res) => {
        this.category = res.data;
      });
    },

    submitUpdate() {
      categoryService
        .updateCategory(this.category.id, this.category)
        .then(() => this.$router.push({ name: "Categories" }));
    },
  },

  created() {
    this.fetchCategory();
  },
};
</script>

<style lang="scss" scoped></style>
