export default{
    methods: {
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
};