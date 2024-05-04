<template>
    <div>
        <h1>Users</h1>
        <div v-for="user in users" :key="user.id">
            <h2> {{ user.email }}</h2>
            <p>{{ getHighestRole(user.roles) }}</p>
            <button v-if="getHighestRole(user.roles) != 'Banned'" @click="banUser(user.id)">Bannir l'utilisateur</button>
            <button v-if="getHighestRole(user.roles) === 'Banned'" @click="unbanUser(user.id)">Débannir l'utilisateur</button>
            <button v-if="getHighestRole(user.roles) === 'User'" @click="promoteUser(user.id)">Donner les droits admin</button>
            <button v-if="getHighestRole(user.roles) === 'Admin'" @click="unbanUser(user.id)">Retirer les droits admin</button>
        </div>
    </div>
</template>

<script>
import userService from '@/services/userService'
    export default {
        data(){
            return {
                users: []
            }
        },

        methods: {
            async getUserList(){
                try{
                    const res = await userService.getUserList();
                    this.users = res.data;
                } catch(e){
                    console.log(e)
                }
            },

            async banUser(id){
                try {
                    const res = await userService.banUser(id);
                    console.log(res, 'User banned');
                    console.log(id);
                    await this.getUserList();
                } catch(err) {
                    console.log(err);
                }
            },

            async unbanUser(id){
                try {
                    const res = await userService.unbanUser(id);
                    console.log(res, 'User unbanned');
                    console.log(id);
                    await this.getUserList();
                } catch(err) {
                    console.log(err);
                }
            },

            async promoteUser(id){
                try {
                    const res = await userService.promoteUser(id);
                    console.log(res, 'User promoted');
                    console.log(id);
                    await this.getUserList();
                } catch (e){
                    console.log(e)
                }
            },

            getHighestRole(roles){
                if(roles.includes('ROLE_ADMIN')){
                    return 'Admin'
                } else if(roles.includes('ROLE_BANNED')){
                    return 'Banned'
                } else {
                    return 'User'
                }
            },
        },

        created(){
            this.getUserList()
        }
    }
</script>

<style lang="scss" scoped>

</style>