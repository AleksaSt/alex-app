<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/">Home</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" v-if="!isUserLoggedIn" href="/register">Register</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" v-if="!isUserLoggedIn" href="/login">Login</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" v-if="isUserLoggedIn"  href="/shops">Shops</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" v-if="isUserLoggedIn"  href="/shops/create">Add Shops</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" v-if="isUserLoggedIn"  href="/managers">Managers</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" v-if="isUserLoggedIn"  href="/my-shops">My Shops</a>
          </li>
        </ul>
          <button v-if="isUserLoggedIn" @click="logoutUser()" class="btn btn-danger mr-3">Logout</button>
        <form @submit.prevent class="form-inline my-2 my-lg-0">
          <input v-if="isUserLoggedIn" class="form-control mr-sm-2" type="search" v-model="term" placeholder="Search" aria-label="Search">
          <button v-if="isUserLoggedIn" @click="searchShops()" class="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {

  data(){
    return{
      term: ''
    }
  },

  computed:{
    ...mapGetters({
      isUserLoggedIn: 'isUserLoggedIn'
    })
  },

  methods:{
    ...mapActions({
      logout: 'logout',
      search: 'search'
    }),

    logoutUser(){
      this.logout().then(() => {
        if(this.$route.name != 'Home'){
          this.$router.push({name: 'Home'})
        }
      })
    },

    searchShops(){
      this.search(this.term)
    }
  }
}
</script>

<style>

</style>
