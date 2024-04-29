<template>
    <div v-if="movie">
        <h1>{{ movie.title }}</h1>
        <p>{{ movie.synopsis }}</p>
        <p>{{ movie.release_date }}</p>
        <p>{{ movie.director }}</p>
        <p>{{ movie.genre }}</p>
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