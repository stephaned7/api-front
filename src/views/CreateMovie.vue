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
                <textarea name="synopsis" id="synopsis" v-model="movie.synopsis"></textarea>
            </div>

            <div>
                <label for="title">Titre du film</label>
                <input type="text" />
            </div>

            <div>
                <label for="releaseDate">Année de sortie</label>
                <input type="text"  v-model="movie.release_date"/>
            </div>

            <div>
                <label for="director">Année de sortie</label>
                <input type="text"  v-model="movie.release_date"/>
            </div>

            <div>
                <label for="genre">Année de sortie</label>
                <input type="text"  v-model="movie.genre"/>
            </div>

            <button type="submit">Ajouter le film</button>

        </form>
    </div>
</template>

<script>

import movieService from '@/services/movieService'

export default {
    data(){
        return {
            movie: {
                title: '',
                synopsis: '',
                release_date: '',
                director: '',
                genre: ''
            }
        }
    },

    methods: {
        submitMovie(){
            movieService.createMovie(this.movie)
            .then(() => {
                this.$router.push({ name: 'MovieList' })
            })
            .catch(e => console.error(e))
        },
    }
}
</script>

<style></style>