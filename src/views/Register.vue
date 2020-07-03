<template>
    <div class="container">
        <div v-for="(error, index) in errors" :key="index" class="alert alert-danger mt-3">
           {{error[0]}}
        </div>
        <h2 class="mt-3">Become A Manager!</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSg6uY9M5aKLVZOcTodxCHsMda2QPnvdAyUQ&usqp=CAU" alt="Image Not Loaded" class="img">
        <div class="form-group">
          <label class="mt-3"><b>Name</b></label>
          <input type="text" v-model="user.name" class="form-control" placeholder="Enter name here">
        </div>
        <div class="form-group">
          <label><b>Email</b></label>
          <input type="email" v-model="user.email" class="form-control" placeholder="Enter email here">
        </div>
        <div class="form-group">
          <label><b>Password</b></label>
          <input type="password" v-model="user.password" class="form-control" placeholder="Enter password here">
        </div>
        <div class="form-group">
          <label><b>Repeat Password</b></label>
          <input type="password" v-model="user.confirm_password" class="form-control" placeholder="Repeat password here">
        </div>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" v-model="user.accept_terms_and_conditions" value="1">
            <label class="form-check-label-mb-3">Accept Terms And Conditions</label>
        </div>
      <button @click="registerUser()" class="btn btn-primary">Register</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { authService } from '../services/AuthService'
export default {
    data(){
        return{
            user:{},
            errors:[]
        }
    },

    methods:{
        ...mapActions({
            login: 'login'
        }),

        registerUser(){
            authService.register(this.user).then(() => {
                
                this.login({password: this.user.password, email: this.user.email})
                this.$router.push({name: 'Home'})
            }).catch(error => {
                this.errors = error.response.data.errors
            })
        }
    }
}
</script>

<style>
.img{

    height:150px;
    width:150px;
}
</style>