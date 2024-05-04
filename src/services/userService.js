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
    register(userData){
        return apiClient.post('/register', userData)
    },
    login(credentials){
        return apiClient.post('/login', credentials)
    },
    logout(){
        return apiClient.post('/logout')
    },
    getUserList(){
        return apiClient.get('/userList')
    },
    banUser(id){
        return apiClient.put(`userBan/${id}`)
    },
    unbanUser(id){
        return apiClient.put(`userUnban/${id}`)
    },
    promoteUser(id){
        return apiClient.put(`userPromote/${id}`)
    }
}