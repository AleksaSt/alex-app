<template>
    <div class="container">
        <div v-if="errors.length" class="alert alert-danger mt-3">
            {{ errors }}
        </div>
        <h2 class="mt-3">Login Here!</h2>
        <img src="https://image.freepik.com/free-icon/login-symbol_318-9896.jpg" alt="Image Not Loaded" class="img">
        <div class="form-group">
          <label class="mt-3"><b>Email</b></label>
          <input type="email" v-model="user.email" class="form-control" placeholder="Enter email here">
        </div>
        <div class="form-group">
          <label><b>Password</b></label>
          <input type="password" v-model="user.password" class="form-control" placeholder="Enter password here">
        </div>
      <button @click="loginUser()" class="btn btn-primary">Login</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data(){
        return{
            user:{}
        }
    },

    computed:{
        ...mapGetters({

            errors: 'getErrors'
        })
    },

    methods:{
        ...mapActions({
            login: 'login'
        }),

        loginUser(){
            this.login(this.user).then(() => {
                if(!this.errors){
                    this.$router.push({name: 'Home'})
                }
            })
        }
    }

}
</script>

<style>

</style>