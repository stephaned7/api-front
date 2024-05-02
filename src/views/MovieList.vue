<template>
    <div>
        <h1>Liste des films</h1>
        <button @click="createMovie">Ajouter un film</button>

        <ul>
            <li v-for="movie in movies" :key="movie.id">{{ movie.title }}
                <button @click="viewDetails(movie.id)">Voir les details</button>
                <button @click="updateMovie(movie.id)">Modifier le film</button>
                <button @click="deleteMovie(movie.id)">Supprimer le film</button>
            </li>
        </ul>

    </div>
</template>

<script>
import movieService from '@/services/movieService'

export default {
    data() {
        return {
            movies: []
        }
    },

    methods: {
        async fetchMovies() {
            try {
                const res = await movieService.getMovies()
                this.movies = res.data
            } catch (e) {
                console.log(e)
            }
        },

        createMovie() {
            this.$router.push({ name: 'CreateMovie' })
        },
        viewDetails(id){
            this.$router.push({ name: 'MovieDetails', params: {id} })
        },
        updateMovie(id){
            this.$router.push({ name: 'UpdateMovie', params: {id} })
        },
        deleteMovie(id){
            movieService.deleteMovie(id)
            .then(() => {this.fetchMovies()})
            .catch(e => console.error(e))
        }
    },

    created() {
        this.fetchMovies()
    }

}

</script>

<style>
ul {
    list-style-type: none;
}
</style>