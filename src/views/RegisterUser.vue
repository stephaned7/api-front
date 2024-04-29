<template>
    <div>
        <h1>M'inscrire</h1>
        <form @submit.prevent="register">
            <div>
                <label for="emai">Email:</label>
                <input type="email" v-model="userData.email" required/>
            </div>

            <div>
                <label for="password">Password:</label>
                <input type="password" v-model="userData.password" required/>
            </div>

            <button type="submit">Créer mon compte</button>
        </form>

    </div>
</template>

<script>

import userService from '@/services/userService'

    export default {
        data(){
            return {
                userData: {}
            };
        },

        methods: {
            async register(){
                try{
                    await userService.register(this.userData)
                    console.log('compte créé avec succès!')
                    this.$router.push({name: '/login'})
                } catch(e) {
                    console.error(e)
                }
            }
        }
    }
</script>

<style>

</style>