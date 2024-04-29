import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8000/api',
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    getMovies(){
        return apiClient.get('/movies')
    },
    getMovie(id){
        return apiClient.get(`movies/${id}`)
    },
    createMovie(movieData){
        return apiClient.post('/movies', movieData)
    },
    updateMovie(id, movieData){
        return apiClient.put(`movies/${id}`, movieData)
    },
    deleteMovie(id){
        return apiClient.delete(`movies/${id}`)
    }
}