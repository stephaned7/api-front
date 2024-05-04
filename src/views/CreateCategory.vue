<template>
    <div>
        <h1>Ajouter une catégories</h1>

        <form @submit.prevent="submitCategory">
            <div>
                <label for="name">Nom de la catégorie</label>
                <input type="text" v-model="category.name">
            </div>

            <button type="submit">Ajouter la catégorie</button>
        </form>
    </div>
</template>

<script>
import categoryService from '@/services/categoryService'
    export default {
        data() {
            return {
                category: {
                    name: ''
                }
            }
        },

        methods: {
            submitCategory() {
                categoryService
                    .createCategory(this.category)
                    .then(() => {
                        this.$router.push({ name: 'Categories' })
                    })
                    .catch((e) => console.error(e))
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>