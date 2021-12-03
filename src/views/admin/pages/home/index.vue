<template >
    <div>
        

        <pre>
    {{jwtDecoded}}
        </pre>


    </div>
</template>
<script>
import djwt from 'jwt-decode'
import { mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters(['jwtDecoded'])
    },
    created(){
        console.log(djwt('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjQzLjM0OjgwMDBcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2MzcxODA1MDgsImV4cCI6MTYzNzE4NDEwOCwibmJmIjoxNjM3MTgwNTA4LCJqdGkiOiIxc3F2QnBPS2U3NllNVXd1Iiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3Iiwicm9sZV9pZCI6M30.bRXqJNYJIc07k0o7f_Apk9vKb7UWX0BGVv6bHDyHjD0'))
    }
}

</script>
<style lang="">
    
</style>