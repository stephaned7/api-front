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
    getCategories(){
        return apiClient.get('/categories')
    },
    // Retourne les catégories avec les films associés
    getCategory(id){
        return apiClient.get(`categories/${id}`)
    },
    // Retourne une catégorie spécifique
    fetchCategory(id){
        return apiClient.get(`category/${id}`)
    },
    getMoviesInCategory(id){
        return apiClient.get(`categories/movies/${id}`)
    },
    createCategory(CategoryData){
        return apiClient.post('/categories', CategoryData)
    },
    updateCategory(id, CategoryData){
        return apiClient.put(`categories/${id}`, CategoryData)
    },
    deleteCategory(id){
        return apiClient.delete(`categories/${id}`)
    }
}