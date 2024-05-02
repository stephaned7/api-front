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
        <button @click="likeMovie()">Like this movie</button>
        <p>Nombre de like: {{ likes }}</p>
    </div>
</template>

<script>
import movieService from '@/services/movieService'

export default {
    data() {
        return {
            movie: {},
            likes: 0
        }
    },

    methods: {
        fetchMovie(){
            return movieService.getMovie(this.$route.params.id)
            .then(res => {
                this.movie = res.data
            })
            .catch(e => console.error(e))
        },

        likeMovie(){
            movieService.likeMovie(this.movie.id)
            .then(() => this.fetchMovie())
            .catch(e => console.error(e))
        },

        seeLikesAmount(){
            return movieService.seeLikesAmount(this.movie.id)
            .then(res => {
                this.likes = res.data.likes
            })
            .catch(e => console.error(e))
        }
    },

    created(){
        this.fetchMovie().then(() => {
            this.seeLikesAmount()
        })
        .catch(e => console.error(e))
    }
}
</script>

<style lang="scss" scoped></style>