<template>
    <div>
        <h1>Me connecter</h1>
        <form @submit.prevent="login">
            <div>
                <label for="emai">Email:</label>
                <input type="email" v-model="userData.email" required/>
            </div>

            <div>
                <label for="password">Password:</label>
                <input type="password" v-model="userData.password" required/>
            </div>

            <button type="submit">Me connecter</button>
        </form>

    </div>
</template>

<script>

import userService from '@/services/userService'
import { mapActions } from 'vuex'

    export default {
        data(){
            return {
                userData: {}
            };
        },

        methods: {
            ...mapActions(['loginUser']),
            async login(){
                try{
                    await userService.login(this.userData)
                    this.loginUser(this.userData.email)
                    console.log('connecté avec succès!')
                    this.$router.push('/');
                } catch(e){
                    console.error(e)
                }
            }
        }
    }
</script>

<style>

</style>