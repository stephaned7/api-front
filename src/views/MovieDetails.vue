<template>
    <div v-if="movie">
        <h1>Title: {{ movie.title }}</h1>
        <p>Synopsis: {{ movie.synopsis }}</p>
        <p> Release year: {{ movie.release_date }}</p>
        <p>Director: {{ movie.director }}</p>
            <p>Genre(s)</p>
        <div v-for="(categ, index) in movie.categories" :key="index">
            <span>{{ categ.name }}</span>
        </div>
    </div>
</template>

<script>
import movieService from '@/services/movieService'

export default {
    data() {
        return {
            movie: {}
        }
    },

    methods: {
        fetchMovie(){
            let id = this.$route.params.id;
            movieService.getMovie(id)
            .then(res => this.movie = res.data)
            .catch(e => console.error(e))
        }
    },

    created(){
        this.fetchMovie()
    }
}
</script>

<style lang="scss" scoped></style>